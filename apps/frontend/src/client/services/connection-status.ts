import { t } from "../i18n";

const THG_PROTOCOL_HEADER = "X-THG-Protocol";
const THG_PROTOCOL_VERSION = 1;

export type ConnectionState =
  | "connected"
  | "reconnecting"
  | "no_network"
  | "weak_signal"
  | "waiting_for_network"
  | "server_unreachable"
  | "syncing";

const STATUS_TEXT_KEYS: Record<ConnectionState, string> = {
  connected: "connection.connected",
  reconnecting: "connection.reconnecting",
  no_network: "connection.waitingNetwork",
  weak_signal: "connection.weakSignal",
  waiting_for_network: "connection.waitingNetwork",
  server_unreachable: "connection.serverUnavailable",
  syncing: "connection.syncing"
};

type ConnectionListener = (state: ConnectionState) => void;

export class ConnectionStatusManager {
  private currentState: ConnectionState = "connected";
  private listeners = new Set<ConnectionListener>();
  private reconnectTimer: any = null;
  private probeTimer: any = null;
  private dotsTimer: any = null;
  private consecutiveFailures = 0;
  private lastOkAt = 0;

  constructor() {
    this.initListeners();
  }

  private initListeners() {
    if (typeof window === "undefined") return;

    window.addEventListener("DOMContentLoaded", () => {
      this.ensureConnectedState();
    });
    window.addEventListener("thegrapht:language-changed", () => this.setStatus(this.currentState, true));

    window.addEventListener("online", () => {
      console.info("[ConnectionStatus] Network online; checking service quality...");
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      this.setStatus("syncing", true);
      void this.probeConnection();
    });

    window.addEventListener("offline", () => {
      console.warn("[ConnectionStatus] Physical network connection lost!");
      if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
      this.setStatus("waiting_for_network");
    });

    this.probeTimer = window.setInterval(() => void this.probeConnection(), 20000);
    window.setTimeout(() => void this.probeConnection(), 2500);
  }

  private ensureConnectedState() {
    if (typeof navigator !== "undefined" && !navigator.onLine) this.setStatus("waiting_for_network");
  }

  private syncingTimeoutTimer: any = null;

  public getState(): ConnectionState {
    return this.currentState;
  }

  public subscribe(listener: ConnectionListener): () => void {
    this.listeners.add(listener);
    listener(this.currentState);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      listener(this.currentState);
    }
  }

  public setStatus(newState: ConnectionState, forceInstant: boolean = false): void {
    if (this.currentState === newState && !forceInstant) return;

    this.currentState = newState;
    this.notifyListeners();
    const targetText = t(STATUS_TEXT_KEYS[newState]);
    if (this.dotsTimer) {
      window.clearInterval(this.dotsTimer);
      this.dotsTimer = null;
    }

    if (newState === "syncing") {
      if (this.syncingTimeoutTimer) clearTimeout(this.syncingTimeoutTimer);
      this.syncingTimeoutTimer = window.setTimeout(() => {
        if (this.currentState === "syncing") {
          this.setStatus("connected");
        }
      }, 2000);
    } else if (this.syncingTimeoutTimer) {
      clearTimeout(this.syncingTimeoutTimer);
      this.syncingTimeoutTimer = null;
    }

    const titleElements = [
      document.getElementById("sidebar-brand-title"),
      document.querySelector(".brand-text-title"),
      document.querySelector(".brand-thegrapht")
    ].filter(Boolean) as HTMLElement[];

    const subtitleEl = document.getElementById("chat-subtitle");

    if (newState === "connected") {
      titleElements.forEach((el) => {
        el.textContent = "TheGraphT";
        el.setAttribute("data-connection-state", "connected");
        el.style.color = "";
      });

      if (subtitleEl) {
        subtitleEl.style.color = "";
        subtitleEl.removeAttribute("data-connection-state");
      }

      if (typeof (window as any).refreshCurrentDialogChrome === "function") {
        (window as any).refreshCurrentDialogChrome();
      } else if (typeof (window as any).syncChatHeaderMeta === "function") {
        (window as any).syncChatHeaderMeta();
      }
      return;
    }

    titleElements.forEach((el) => {
      el.textContent = targetText;
      el.setAttribute("data-connection-state", newState);
      if (newState === "reconnecting" || newState === "waiting_for_network") {
        el.style.color = "#94a3b8";
      } else if (newState === "no_network") {
        el.style.color = "#f87171";
      } else if (newState === "weak_signal") {
        el.style.color = "#f59e0b";
      } else {
        el.style.color = "#38bdf8";
      }
    });

    if (subtitleEl) {
      subtitleEl.textContent = targetText;
      subtitleEl.setAttribute("data-connection-state", newState);
      if (newState === "reconnecting" || newState === "waiting_for_network") {
        subtitleEl.style.color = "#94a3b8";
      } else if (newState === "no_network") {
        subtitleEl.style.color = "#f87171";
      } else if (newState === "weak_signal") {
        subtitleEl.style.color = "#f59e0b";
      } else {
        subtitleEl.style.color = "#38bdf8";
      }
    }

    let dots = 1;
    this.dotsTimer = window.setInterval(() => {
      dots = (dots % 3) + 1;
      const base = t(STATUS_TEXT_KEYS[this.currentState]).replace(/\.+$/, "");
      const dotsStr = ".".repeat(dots);
      if (this.currentState !== "connected") {
        const sub = document.getElementById("chat-subtitle");
        if (sub) sub.textContent = base + dotsStr;

        const currentTitles = [
          document.getElementById("sidebar-brand-title"),
          document.querySelector(".brand-text-title"),
          document.querySelector(".brand-thegrapht")
        ].filter(Boolean) as HTMLElement[];
        currentTitles.forEach((el) => { el.textContent = base + dotsStr; });
      }
    }, 420);
  }

  public markReachable(): void {
    this.consecutiveFailures = 0;
    this.lastOkAt = Date.now();
    if (this.currentState !== "connected" && this.currentState !== "weak_signal") {
      this.setStatus("connected");
    }
  }

  public recordPing(rttMs: number | null, success: boolean = true): void {
    if (!success) {
      this.noteProbeFailure();
      return;
    }
    this.consecutiveFailures = 0;
    this.lastOkAt = Date.now();
    if (rttMs == null) {
      this.setStatus("connected");
      return;
    }
    const connection = (navigator as any).connection;
    const effectiveType = String(connection?.effectiveType || "").toLowerCase();
    const weakRadio = effectiveType === "slow-2g" || effectiveType === "2g";
    this.setStatus(weakRadio || rttMs > 4000 ? "weak_signal" : "connected");
  }

  private noteProbeFailure(): void {
    if (!navigator.onLine) {
      this.setStatus("waiting_for_network");
      return;
    }
    const recentlyOk = Date.now() - this.lastOkAt < 20000;
    if (recentlyOk) {
      return;
    }
    this.consecutiveFailures += 1;
    if (this.consecutiveFailures >= 5) {
      this.setStatus("server_unreachable");
    } else if (this.consecutiveFailures >= 3) {
      this.setStatus("reconnecting");
    }
  }

  private resolveProbeUrl(): string {
    const endpoints = (window as any).__THEGRAPHT_PROTOCOL_ENDPOINTS__;
    const bootstrapPath = endpoints?.bootstrap;
    if (typeof bootstrapPath === "string" && bootstrapPath.startsWith("/")) {
      return bootstrapPath;
    }
    const apiBase = String((window as any).apiBase || "/api").replace(/\/+$/, "");
    if (apiBase.startsWith("/")) {
      return `${apiBase}/v1/bootstrap`;
    }
    return "/api/v1/bootstrap";
  }

  private async probeConnection(): Promise<void> {
    if (!navigator.onLine) {
      this.consecutiveFailures = 0;
      this.setStatus("waiting_for_network");
      return;
    }
    const startedAt = performance.now();
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 6000);
    try {
      const response = await fetch(this.resolveProbeUrl(), {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          [THG_PROTOCOL_HEADER]: String(THG_PROTOCOL_VERSION)
        },
        signal: controller.signal
      });
      if (!response.ok) throw new Error(String(response.status));
      this.consecutiveFailures = 0;
      this.lastOkAt = Date.now();
      this.recordPing(performance.now() - startedAt, true);
    } catch {
      this.noteProbeFailure();
    } finally {
      window.clearTimeout(timeout);
    }
  }

  public getCurrentState(): ConnectionState {
    return this.currentState;
  }
}

export const connectionStatusManager = new ConnectionStatusManager();
if (typeof window !== "undefined") {
  (window as any).connectionStatusManager = connectionStatusManager;
}

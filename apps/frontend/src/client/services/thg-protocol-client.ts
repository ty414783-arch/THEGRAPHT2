import { connectionStatusManager } from "./connection-status";

export const THG_IDEMPOTENCY_HEADER = "X-THG-Idempotency-Key";

export function createIdempotencyKey(scope = "send") {
  return scope + "_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
}

export interface THGProtocolStatus {
  active: boolean;
  sessionId: string | null;
  authKeyId: string | null;
  lastPingMs: number | null;
  sequenceNumber: number;
  protocolVersion: number;
  transportMode: string;
}

export class THGProtocolClient {
  private sessionId: string | null = null;
  private authKeyId: string | null = null;
  private sequenceNumber: bigint = 0n;
  private pingIntervalId: any = null;
  private lastPingMs: number | null = null;
  private active: boolean = false;
  private baseUrl: string = "";

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private get EffectiveBaseUrl(): string {
    if (this.baseUrl) {
      return this.baseUrl.replace(/\/+$/, "");
    }
    const configBase = (window as any).__THEGRAPHT_CONFIG__?.mtprotoBaseUrl;
    if (configBase) {
      return configBase.replace(/\/+$/, "");
    }
    return "/mtproto";
  }

  public async initSession(accountId: string = "u_web_client"): Promise<boolean> {
    try {
      const origin = window.location.origin;
      const baseUrl = this.EffectiveBaseUrl;
      const createRes = await fetch(`${baseUrl}/api/v1/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: origin
        },
        body: JSON.stringify({
          accountId,
          clientNonce: `web_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
        })
      });

      if (!createRes.ok) {
        console.warn("[THG Protocol] Session initialization returned non-200:", createRes.status);
        connectionStatusManager.recordPing(null, false);
        return false;
      }

      const createData = await createRes.json();
      this.sessionId = createData.sessionId;

      // Confirm session
      const confirmPath = createData.confirmUrl.startsWith("/mtproto")
        ? createData.confirmUrl
        : `${baseUrl}${createData.confirmUrl}`;

      const confirmRes = await fetch(confirmPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: origin
        },
        body: JSON.stringify({
          challenge: createData.challenge,
          clientProof: createData.challenge
        })
      });

      if (!confirmRes.ok) {
        console.warn("[THG Protocol] Session confirmation returned non-200:", confirmRes.status);
        connectionStatusManager.recordPing(null, false);
        return false;
      }

      const confirmData = await confirmRes.json();
      this.authKeyId = confirmData.authKeyId;
      this.active = true;
      this.sequenceNumber = 1n;

      console.info("[THG Protocol] Protocol Session v2 Active:", {
        sessionId: this.sessionId,
        authKeyId: this.authKeyId
      });

      connectionStatusManager.setStatus("connected", true);
      this.startPingKeepalive();
      return true;
    } catch (err) {
      console.warn("[THG Protocol] Failed to connect THG Protocol transport:", err);
      connectionStatusManager.recordPing(null, false);
      return false;
    }
  }

  public async sendRpc(method: string, params: any = {}): Promise<any> {
    if (!this.active || !this.sessionId) {
      return null;
    }

    this.sequenceNumber += 1n;
    const currentSeq = this.sequenceNumber;

    try {
      const origin = window.location.origin;
      const response = await fetch(`${this.EffectiveBaseUrl}/api/v1/transport/frame`, {
        method: "POST",
        headers: {
          Origin: origin,
          "Content-Type": "application/x-thegrapht-thg-frame",
          "X-TheGraphT-MTP-Session": this.sessionId,
          "X-TheGraphT-MTP-Seq": currentSeq.toString()
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method,
          params,
          id: Number(currentSeq)
        })
      });

      if (response.ok) {
        const json = await response.json();
        connectionStatusManager.recordPing(this.lastPingMs, true);
        return json;
      }
    } catch (err) {
      console.warn("[THG Protocol] RPC transport frame error:", err);
      connectionStatusManager.recordPing(null, false);
    }
    return null;
  }

  public startPingKeepalive(): void {
    if (this.pingIntervalId) {
      clearInterval(this.pingIntervalId);
    }

    this.pingIntervalId = setInterval(async () => {
      if (!this.active) return;
      const start = Date.now();
      const res = await this.sendRpc("thg.ping");
      if (res) {
        this.lastPingMs = Date.now() - start;
        connectionStatusManager.recordPing(this.lastPingMs, true);
      } else {
        connectionStatusManager.recordPing(null, false);
      }
    }, 15_000);
  }

  public getStatus(): THGProtocolStatus {
    return {
      active: this.active,
      sessionId: this.sessionId,
      authKeyId: this.authKeyId,
      lastPingMs: this.lastPingMs,
      sequenceNumber: Number(this.sequenceNumber),
      protocolVersion: 2,
      transportMode: "thg-binary-frame-v2"
    };
  }
}

// Global singleton instance
export const thgClient = new THGProtocolClient();

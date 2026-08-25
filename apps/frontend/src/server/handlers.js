import zlib from "node:zlib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildClientScript } from "./client-script.js";
import { resolveAssetFilePath } from "./client-manifest.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resolveResDir = () => {
  const candidates = [
    path.resolve(__dirname, "../../../../res"),
    path.resolve(__dirname, "../../res"),
    process.resourcesPath ? path.join(process.resourcesPath, "embedded-frontend", "res") : null,
    process.resourcesPath ? path.join(process.resourcesPath, "res") : null
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
  }

  return path.resolve(__dirname, "../../../../res");
};

const resDir = resolveResDir();
const appleEmojiDir = path.join(resDir, "emoji/apple-64");
const desktopReleaseDir = path.join(resDir, "download/release/desktop");
const gzipTextCache = new Map();
const GZIP_TEXT_CACHE_LIMIT = 24;

const getGzipTextBuffer = (body) => {
  const key = String(body || "");
  const cached = gzipTextCache.get(key);
  if (cached) {
    return cached;
  }

  const compressedBody = zlib.gzipSync(Buffer.from(key));
  gzipTextCache.set(key, compressedBody);

  if (gzipTextCache.size > GZIP_TEXT_CACHE_LIMIT) {
    const firstKey = gzipTextCache.keys().next().value;
    if (firstKey !== undefined) {
      gzipTextCache.delete(firstKey);
    }
  }

  return compressedBody;
};

const sendTextResponse = (request, response, statusCode, headers, body) => {
  const acceptsGzip = /\bgzip\b/i.test(String(request.headers["accept-encoding"] || ""));

  if (!acceptsGzip) {
    response.writeHead(statusCode, {
      ...headers,
      "Content-Length": String(Buffer.byteLength(body))
    });
    response.end(body);
    return;
  }

  const compressedBody = getGzipTextBuffer(body);

  response.writeHead(statusCode, {
    ...headers,
    "Content-Encoding": "gzip",
    "Content-Length": String(compressedBody.byteLength),
    Vary: "Accept-Encoding"
  });
  response.end(compressedBody);
};

export const createRequestHandler = ({
  html,
  homeHtml,
  newsHtml,
  asymproteHtml,
  faqHtml,
  privacyHtml,
  clientScriptUrl,
  clientPreloadUrls = [],
  clientCssUrls = [],
  clientBuildId = "",
  distDir,
  configScriptJs,
  baseSecurityHeaders,
  htmlSecurityHeaders,
  landingSecurityHeaders,
  manifestJson,
  manifestUrl,
  serviceWorkerScript,
  serviceWorkerUrl,
  inter400Url,
  inter400Buffer,
  inter500Url,
  inter500Buffer,
  inter600Url,
  inter600Buffer,
  inter700Url,
  inter700Buffer,
  inter800Url,
  inter800Buffer,
  logoUrl,
  logoBuffer,
  emojiIconUrl,
  emojiIconBuffer,
  sendButtonIconUrl,
  sendButtonIconBuffer,
  settingsKeyboardIconUrl,
  settingsKeyboardIconBuffer,
  searchEmptyVideoUrl,
  searchEmptyVideoBuffer,
  wallpaperUrl,
  wallpaperBuffer,
  messageSoundUrl,
  messageSoundBuffer,
  sendLocalSoundUrl,
  sendLocalSoundBuffer,
  outgoingCallRingtoneUrl,
  outgoingCallRingtoneBuffer,
  incomingCallRingtoneUrl,
  incomingCallRingtoneBuffer,
  androidAlphaApkUrl,
  androidAlphaApkBuffer,
  androidAlphaApkVersionedUrl,
  androidAlphaApkVersionedBuffer
}) => (request, response) => {
  if (!request.url) {
    response.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      ...baseSecurityHeaders
    });
    response.end("Not found");
    return;
  }

  const requestHost = request.headers.host || "";
  if (requestHost.includes("dl.thegrapht.su")) {
    let apkFilename = "thegrapht-android-alpha.apk";
    const decodedUrl = decodeURIComponent(request.url || "");
    const parsedUrl = decodedUrl.split("?")[0];

    if (parsedUrl.startsWith("/release/")) {
      apkFilename = parsedUrl.substring("/release/".length);
    } else if (parsedUrl.startsWith("/realease/")) {
      apkFilename = parsedUrl.substring("/realease/".length);
    } else if (parsedUrl.startsWith("/downloads/")) {
      apkFilename = parsedUrl.substring("/downloads/".length);
    } else if (parsedUrl !== "/" && parsedUrl !== "/index.html" && parsedUrl !== "/thegrapht-android-alpha.apk") {
      apkFilename = parsedUrl.replace(/^\/+/, "");
    }

    const safeApkNamePattern = /^[a-zA-Z0-9_.-]+\.apk$/;
    if (!safeApkNamePattern.test(apkFilename)) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
        ...baseSecurityHeaders
      });
      response.end("Invalid file request");
      return;
    }

    const apkCandidates = [
      path.join(resDir, "downloads", apkFilename),
      path.join(resDir, "download", apkFilename),
      path.resolve(__dirname, "../public/downloads", apkFilename),
      path.resolve(__dirname, "../../dist/downloads", apkFilename),
      path.resolve(__dirname, "../../../../apps/frontend/public/downloads", apkFilename),
      path.resolve(__dirname, "../../../../apps/frontend/dist/downloads", apkFilename)
    ];

    let apkPath = null;
    for (const candidate of apkCandidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        apkPath = candidate;
        break;
      }
    }

    try {
      if (apkPath) {
        const stat = fs.statSync(apkPath);
        response.writeHead(200, {
          "Content-Type": "application/vnd.android.package-archive",
          "Content-Disposition": `attachment; filename="${apkFilename}"`,
          "Content-Length": String(stat.size),
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          ...baseSecurityHeaders
        });
        const readStream = fs.createReadStream(apkPath);
        readStream.pipe(response);
        return;
      } else {
        response.writeHead(404, {
          "Content-Type": "text/plain; charset=utf-8",
          ...baseSecurityHeaders
        });
        response.end(`File not found: ${apkFilename}`);
        return;
      }
    } catch (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain; charset=utf-8",
        ...baseSecurityHeaders
      });
      response.end("Internal server error");
      return;
    }
  }

  if (request.url === "/health") {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...baseSecurityHeaders
    });
    response.end(JSON.stringify({
      service: "frontend",
      status: "ok",
      mode: "ui-only"
    }));
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      ...baseSecurityHeaders
    });
    response.end("Not found");
    return;
  }

  if (request.url.endsWith(".map")) {
    response.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      ...baseSecurityHeaders
    });
    response.end("Not found");
    return;
  }

  if (request.url.startsWith("/download/release/desktop/")) {
    const fileName = path.basename(request.url);
    const filePath = path.join(desktopReleaseDir, fileName);

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      response.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        ...baseSecurityHeaders
      });
      response.end("Not found");
      return;
    }

    const ext = path.extname(fileName).toLowerCase();
    const contentType = ext === ".exe"
      ? "application/vnd.microsoft.portable-executable"
      : (ext === ".blockmap" ? "application/octet-stream" : "application/octet-stream");

    response.writeHead(200, {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename=\"${fileName}\"`,
      "Cache-Control": "no-store",
      ...baseSecurityHeaders
    });
    fs.createReadStream(filePath).pipe(response);
    return;
  }

  if (request.url === "/config.js") {
    sendTextResponse(request, response, 200, {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      ...baseSecurityHeaders
    }, configScriptJs);
    return;
  }

  const reqPath = (request.url || "").split("?")[0];

  if (reqPath.startsWith("/downloads/") && reqPath.endsWith(".apk")) {
    const apkFilename = path.basename(reqPath);
    const safeApkNamePattern = /^[a-zA-Z0-9_.-]+\.apk$/;
    if (safeApkNamePattern.test(apkFilename)) {
      const apkCandidates = [
        path.join(resDir, "downloads", apkFilename),
        path.join(resDir, "download", apkFilename),
        path.resolve(__dirname, "../public/downloads", apkFilename),
        path.resolve(__dirname, "../../dist/downloads", apkFilename)
      ];
      for (const candidate of apkCandidates) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          const stat = fs.statSync(candidate);
          response.writeHead(200, {
            "Content-Type": "application/vnd.android.package-archive",
            "Content-Disposition": `attachment; filename="${apkFilename}"`,
            "Content-Length": String(stat.size),
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
            ...baseSecurityHeaders
          });
          fs.createReadStream(candidate).pipe(response);
          return;
        }
      }
    }
  }

  if (reqPath.startsWith("/assets/")) {
    const assetFilePath = resolveAssetFilePath(distDir, reqPath);
    if (assetFilePath) {
      const ext = path.extname(assetFilePath).toLowerCase();
      const contentType = ext === ".css"
        ? "text/css; charset=utf-8"
        : "application/javascript; charset=utf-8";
      const assetBody = fs.readFileSync(assetFilePath, "utf8");
      sendTextResponse(request, response, 200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        ...baseSecurityHeaders
      }, assetBody);
      return;
    }
  }

  if (reqPath === clientScriptUrl || reqPath === "/app.js" || reqPath.startsWith("/app.")) {
    const assetFilePath = resolveAssetFilePath(distDir, clientScriptUrl);
    if (assetFilePath) {
      const body = fs.readFileSync(assetFilePath, "utf8");
      sendTextResponse(request, response, 200, {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=31536000, immutable",
        ...baseSecurityHeaders
      }, body);
      return;
    }

    sendTextResponse(request, response, 503, {
      "Content-Type": "text/plain; charset=utf-8",
      ...baseSecurityHeaders
    }, "Client bundle not built. Run npm run build in apps/frontend.");
    return;
  }

  if (reqPath === "/assets/icon-helper.js") {
    sendTextResponse(request, response, 200, {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      ...baseSecurityHeaders
    }, buildClientScript());
    return;
  }

  if (reqPath.endsWith(".js") || reqPath.includes("/chunks/") || reqPath.startsWith("/dist/chunks/")) {
    const chunkFileName = path.basename(reqPath);
    const safeChunkPattern = /^[a-zA-Z0-9_.-]+\.js$/;
    if (safeChunkPattern.test(chunkFileName)) {
      const candidates = [
        path.resolve(__dirname, "../../dist/chunks", chunkFileName),
        path.resolve(__dirname, "../dist/chunks", chunkFileName),
        path.resolve(process.cwd(), "apps/frontend/dist/chunks", chunkFileName),
        path.resolve(process.cwd(), "dist/chunks", chunkFileName),
        path.resolve(__dirname, "../../dist", chunkFileName),
        path.resolve(process.cwd(), "apps/frontend/dist", chunkFileName)
      ];
      let chunkFilePath = null;
      for (const candidate of candidates) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          chunkFilePath = candidate;
          break;
        }
      }

      if (!chunkFilePath) {
        const modPrefix = chunkFileName.replace(/-[a-zA-Z0-9_]+\.js$/, "").replace(/\.js$/, "");
        const chunksDirs = [
          path.resolve(__dirname, "../../dist/chunks"),
          path.resolve(process.cwd(), "apps/frontend/dist/chunks"),
          path.resolve(__dirname, "../../dist"),
          path.resolve(process.cwd(), "apps/frontend/dist")
        ];
        for (const dir of chunksDirs) {
          if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            const fallbackFile = files.find(f => (f.startsWith(modPrefix + "-") || f === modPrefix + ".js") && f.endsWith(".js"));
            if (fallbackFile) {
              chunkFilePath = path.join(dir, fallbackFile);
              break;
            }
          }
        }
      }

      if (chunkFilePath) {
        const chunkContent = fs.readFileSync(chunkFilePath, "utf8");
        sendTextResponse(request, response, 200, {
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          ...baseSecurityHeaders
        }, chunkContent);
        return;
      }

      // Safe JS fallback so browser never throws MIME text/html error on script module load
      sendTextResponse(request, response, 200, {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        ...baseSecurityHeaders
      }, `/* Chunk ${chunkFileName} fallback */ export {};`);
      return;
    }
  }

  if (reqPath === logoUrl || reqPath === "/assets/logo.jpg" || reqPath === "/assets/logo.png" || reqPath === "/assets/asymprote.png" || reqPath === "/assets/icon-192.png" || reqPath === "/assets/icon-512.png" || reqPath === "/assets/apple-touch-icon.png" || reqPath === "/assets/favicon.png" || reqPath === "/favicon.ico") {
    response.writeHead(200, {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(logoBuffer);
    return;
  }

  if (reqPath.startsWith("/assets/")) {
    const assetFileName = path.basename(reqPath);
    const candidatePaths = [
      path.join(resDir, assetFileName),
      path.join(resDir, "webp", assetFileName),
      path.join(resDir, "svg", assetFileName),
      path.join(resDir, "sounds", assetFileName),
      path.join(resDir, "downloads", assetFileName)
    ];
    for (const p of candidatePaths) {
      if (fs.existsSync(p) && fs.statSync(p).isFile()) {
        const ext = path.extname(p).toLowerCase();
        let mime = "application/octet-stream";
        if (ext === ".jpg" || ext === ".jpeg") mime = "image/jpeg";
        else if (ext === ".png") mime = "image/png";
        else if (ext === ".webp") mime = "image/webp";
        else if (ext === ".svg") mime = "image/svg+xml";
        else if (ext === ".mp4") mime = "video/mp4";
        else if (ext === ".mp3") mime = "audio/mpeg";

        response.writeHead(200, {
          "Content-Type": mime,
          "Cache-Control": "public, max-age=31536000, immutable",
          ...baseSecurityHeaders
        });
        fs.createReadStream(p).pipe(response);
        return;
      }
    }
  }

  if (request.url === emojiIconUrl) {
    response.writeHead(200, {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(emojiIconBuffer);
    return;
  }

  if (request.url === sendButtonIconUrl) {
    response.writeHead(200, {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(sendButtonIconBuffer);
    return;
  }

  if (request.url === settingsKeyboardIconUrl) {
    response.writeHead(200, {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(settingsKeyboardIconBuffer);
    return;
  }

  if (request.url === searchEmptyVideoUrl) {
    response.writeHead(200, {
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(searchEmptyVideoBuffer);
    return;
  }

  if (request.url === wallpaperUrl || request.url === "/assets/wallpaper.svg" || request.url.startsWith("/assets/wallpaper.svg")) {
    response.writeHead(200, {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(wallpaperBuffer);
    return;
  }

  if (request.url === messageSoundUrl) {
    response.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(messageSoundBuffer);
    return;
  }

  if (request.url === sendLocalSoundUrl) {
    response.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(sendLocalSoundBuffer);
    return;
  }

  if (request.url === outgoingCallRingtoneUrl) {
    response.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(outgoingCallRingtoneBuffer);
    return;
  }

  if (request.url === incomingCallRingtoneUrl) {
    response.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(incomingCallRingtoneBuffer);
    return;
  }

  if (request.url === manifestUrl) {
    response.writeHead(200, {
      "Content-Type": "application/manifest+json; charset=utf-8",
      "Cache-Control": "no-store",
      ...baseSecurityHeaders
    });
    response.end(manifestJson);
    return;
  }

  if (request.url === serviceWorkerUrl) {
    response.writeHead(404, {
      "Content-Type": "text/plain",
      "Cache-Control": "no-store",
      ...baseSecurityHeaders
    });
    response.end("Service Worker Removed");
    return;
  }

  const fontResponses = new Map([
    [inter400Url, inter400Buffer],
    [inter500Url, inter500Buffer],
    [inter600Url, inter600Buffer],
    [inter700Url, inter700Buffer],
    [inter800Url, inter800Buffer]
  ]);

  if (fontResponses.has(request.url)) {
    response.writeHead(200, {
      "Content-Type": "font/ttf",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(fontResponses.get(request.url));
    return;
  }

  if (request.url.startsWith("/assets/emoji/apple-64/")) {
    const relativeEmojiPath = request.url.slice("/assets/emoji/apple-64/".length);
    const safeEmojiFileName = path.basename(relativeEmojiPath);

    if (!/^[0-9a-f-]+\.png$/i.test(safeEmojiFileName)) {
      response.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
        ...baseSecurityHeaders
      });
      response.end("Not found");
      return;
    }

    const emojiFilePath = path.join(appleEmojiDir, safeEmojiFileName);

    if (!fs.existsSync(emojiFilePath)) {
      response.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
        ...baseSecurityHeaders
      });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      ...baseSecurityHeaders
    });
    response.end(fs.readFileSync(emojiFilePath));
    return;
  }

  if (request.url === androidAlphaApkUrl) {
    const apkPath = path.join(resDir, "downloads", "thegrapht-android-alpha.apk");
    try {
      if (fs.existsSync(apkPath) && fs.statSync(apkPath).isFile()) {
        const stat = fs.statSync(apkPath);
        response.writeHead(200, {
          "Content-Type": "application/vnd.android.package-archive",
          "Content-Disposition": 'attachment; filename="thegrapht-android-alpha.apk"',
          "Content-Length": String(stat.size),
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          ...baseSecurityHeaders
        });
        const readStream = fs.createReadStream(apkPath);
        readStream.pipe(response);
        return;
      }
    } catch (err) {
      // Fallback
    }
    response.writeHead(200, {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="thegrapht-android-alpha.apk"',
      "Content-Length": String(androidAlphaApkBuffer.byteLength),
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      ...baseSecurityHeaders
    });
    response.end(androidAlphaApkBuffer);
    return;
  }

  if (request.url === androidAlphaApkVersionedUrl) {
    const apkPath = path.join(resDir, "downloads", "thegrapht-android-alpha-0.1.2.apk");
    try {
      if (fs.existsSync(apkPath) && fs.statSync(apkPath).isFile()) {
        const stat = fs.statSync(apkPath);
        response.writeHead(200, {
          "Content-Type": "application/vnd.android.package-archive",
          "Content-Disposition": 'attachment; filename="thegrapht-android-alpha-0.1.2.apk"',
          "Content-Length": String(stat.size),
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          ...baseSecurityHeaders
        });
        const readStream = fs.createReadStream(apkPath);
        readStream.pipe(response);
        return;
      }
    } catch (err) {
      // Fallback
    }
    response.writeHead(200, {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="thegrapht-android-alpha-0.1.2.apk"',
      "Content-Length": String(androidAlphaApkVersionedBuffer.byteLength),
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      ...baseSecurityHeaders
    });
    response.end(androidAlphaApkVersionedBuffer);
    return;
  }

  const hostHeader = request.headers.host || "";
  const isWebDomain = hostHeader.startsWith("web.") || hostHeader.startsWith("dev.") || hostHeader.startsWith("asymprote.") || hostHeader.startsWith("asymproto.") || hostHeader.includes("localhost") || hostHeader.includes("127.0.0.1");

  if (!isWebDomain && (request.url === "/" || request.url === "/index.html")) {
    sendTextResponse(request, response, 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      ...landingSecurityHeaders
    }, homeHtml);
    return;
  }

  const isDocRoute = request.url === "/faq" ||
                     request.url === "/product" ||
                     request.url === "/security" ||
                     request.url === "/technologies" ||
                     request.url.startsWith("/faq/");

  if (!isWebDomain && isDocRoute) {
    sendTextResponse(request, response, 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      ...landingSecurityHeaders
    }, faqHtml);
    return;
  }

  if (!isWebDomain && (request.url === "/asymprote" || request.url === "/asymprote/")) {
    sendTextResponse(request, response, 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      ...landingSecurityHeaders
    }, asymproteHtml || homeHtml);
    return;
  }

  if (!isWebDomain && request.url === "/privacy") {
    sendTextResponse(request, response, 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      ...landingSecurityHeaders
    }, privacyHtml);
    return;
  }

  const isNewsRoute = request.url === "/thegrapht-2-0" ||
                      request.url === "/thegrapht-2-0/" ||
                      request.url === "/news/thegrapht-2-0" ||
                      request.url === "/index/thegrapht-2-0";

  if (!isWebDomain && isNewsRoute) {
    sendTextResponse(request, response, 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      ...landingSecurityHeaders
    }, newsHtml || homeHtml);
    return;
  }

  if (!isWebDomain && hostHeader.includes("thegrapht.su")) {
    response.writeHead(302, {
      "Location": `https://web.thegrapht.su${request.url}`,
      ...baseSecurityHeaders
    });
    response.end();
    return;
  }

  sendTextResponse(request, response, 200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    Pragma: "no-cache",
    Expires: "0",
    "Clear-Site-Data": "\"cache\"",
    ...htmlSecurityHeaders
  }, html);
};

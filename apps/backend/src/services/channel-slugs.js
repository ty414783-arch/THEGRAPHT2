import crypto from "node:crypto";

import { queryOne } from "../db/client.js";

const SLUG_PATTERN = /^[a-z][a-z0-9_]{4,31}$/;
const RESERVED_SLUGS = new Set([
  "api",
  "ws",
  "admin",
  "support",
  "help",
  "about",
  "login",
  "register",
  "settings",
  "c",
  "g",
  "me",
  "thegrapht",
  "channel",
  "channels",
  "group",
  "groups"
]);

export const normalizeChannelSlug = (value) =>
  String(value || "")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();

export const validateChannelSlugFormat = (value) => {
  const slug = normalizeChannelSlug(value);

  if (!slug || !SLUG_PATTERN.test(slug) || RESERVED_SLUGS.has(slug)) {
    return { ok: false, slug };
  }

  return { ok: true, slug };
};

export const isChannelSlugAvailable = async (value, executor) => {
  const validation = validateChannelSlugFormat(value);
  if (!validation.ok) {
    return { available: false, slug: validation.slug };
  }

  const existing = await queryOne(
    `
      SELECT dialog_id
      FROM channels
      WHERE lower(slug) = $1
      LIMIT 1
    `,
    [validation.slug],
    executor
  );

  return {
    available: !existing,
    slug: validation.slug
  };
};

export const createInviteToken = () => crypto.randomBytes(12).toString("base64url");

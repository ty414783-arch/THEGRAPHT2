import { test, expect } from "@playwright/test";

test("legacy UI flags stay off so Telegram shell remains default", async ({ page }) => {
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error));

  await page.goto("/");

  const uiFlags = await page.evaluate(() => {
    return window.__THEGRAPHT_CONFIG__?.uiFlags || null;
  });

  expect(uiFlags?.newChatUi).toBe(false);
  expect(uiFlags?.newSidebar).toBe(false);
  expect(uiFlags?.newAuthUi).toBe(false);
  expect(pageErrors).toEqual([]);
});

test("renders preact app shell markup after auth boot when logged in", async ({ page }) => {
  test.skip(true, "New Preact shell is behind UI_NEW_* flags; default is legacy Telegram UI");
});

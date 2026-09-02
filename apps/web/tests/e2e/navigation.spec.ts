import { expect, test } from "@playwright/test";

const MOBILE_BREAKPOINT = 768; // Tailwind `md`

test.describe("Header navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows either the desktop nav or the mobile menu trigger, never both", async ({ page }) => {
    const viewport = page.viewportSize();
    test.skip(!viewport, "no viewport configured");

    const desktopNav = page.locator("header nav.md\\:flex");
    const mobileTrigger = page.locator("header details summary");

    if (viewport!.width >= MOBILE_BREAKPOINT) {
      await expect(desktopNav).toBeVisible();
      await expect(mobileTrigger).toBeHidden();
    } else {
      await expect(mobileTrigger).toBeVisible();
      await expect(desktopNav).toBeHidden();
    }
  });

  test("mobile menu opens, lists all sections, and closes on link click", async ({ page }) => {
    const viewport = page.viewportSize();
    test.skip(!viewport || viewport!.width >= MOBILE_BREAKPOINT, "mobile-only test");

    const details = page.locator("header details");
    const trigger = details.locator("summary");

    await expect(details).not.toHaveAttribute("open", "");
    await trigger.click();
    await expect(details).toHaveAttribute("open", "");

    const links = details.locator("nav a");
    await expect(links).toHaveCount(6);

    await links.first().click();
    await expect(details).not.toHaveAttribute("open", "");
  });

  test("mobile menu closes when clicking outside", async ({ page }) => {
    const viewport = page.viewportSize();
    test.skip(!viewport || viewport!.width >= MOBILE_BREAKPOINT, "mobile-only test");

    const details = page.locator("header details");
    await details.locator("summary").click();
    await expect(details).toHaveAttribute("open", "");

    await page.mouse.click(10, 10);
    await expect(details).not.toHaveAttribute("open", "");
  });

  test("desktop nav links are all present and horizontal", async ({ page }) => {
    const viewport = page.viewportSize();
    test.skip(!viewport || viewport!.width < MOBILE_BREAKPOINT, "desktop-only test");

    const nav = page.locator("header nav.md\\:flex");
    await expect(nav.locator("a")).toHaveCount(6);
  });
});

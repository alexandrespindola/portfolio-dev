import { expect, test } from "@playwright/test";

test.describe("Hero section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("headline is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("badge never forces the page wider than the viewport", async ({ page }) => {
    const viewport = page.viewportSize();
    if (!viewport) test.skip();

    const badge = page.getByText("AI-Native Full-Stack Engineer · GCP Certified · EU Citizen");
    await expect(badge).toBeVisible();

    const box = await badge.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport!.width + 1);
  });

  test("hero visual stays inside its rounded frame", async ({ page }) => {
    const frame = page.locator(".aspect-\\[4\\/3\\]").first();
    await expect(frame).toBeVisible();

    const frameBox = await frame.boundingBox();
    const viewport = page.viewportSize();
    expect(frameBox).not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(frameBox!.x).toBeGreaterThanOrEqual(0);
    expect(frameBox!.x + frameBox!.width).toBeLessThanOrEqual(viewport!.width + 1);

    const image = page.locator("img[alt='Abstract connected-system visual']");
    if (await image.count()) {
      const imgBox = await image.boundingBox();
      expect(imgBox).not.toBeNull();
      // the image must be fully contained within the frame, not bleeding out of it
      expect(imgBox!.x).toBeGreaterThanOrEqual(frameBox!.x - 1);
      expect(imgBox!.x + imgBox!.width).toBeLessThanOrEqual(frameBox!.x + frameBox!.width + 1);
    }
  });
});

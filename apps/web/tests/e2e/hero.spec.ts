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

    const badge = page.getByText("Forward Deployed & Applied AI Engineer · GCP Certified · EU Citizen");
    await expect(badge).toBeVisible();

    const box = await badge.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport!.width + 1);
  });
});

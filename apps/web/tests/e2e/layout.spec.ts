import { expect, test } from "@playwright/test";
import { findOverflowingElements, getHorizontalOverflow, PAGES } from "./utils";

for (const path of PAGES) {
  test(`no horizontal overflow on ${path}`, async ({ page }) => {
    await page.goto(path);
    const { scrollWidth, clientWidth, overflow } = await getHorizontalOverflow(page);

    if (overflow) {
      const offenders = await findOverflowingElements(page);
      throw new Error(
        `Horizontal overflow on ${path}: scrollWidth=${scrollWidth} clientWidth=${clientWidth}\n` +
          `Overflowing elements: ${JSON.stringify(offenders, null, 2)}`,
      );
    }

    expect(overflow).toBe(false);
  });
}

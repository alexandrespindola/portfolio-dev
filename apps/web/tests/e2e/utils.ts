import type { Page } from "@playwright/test";

export const PAGES = ["/", "/projects/gnosis-congress/"];

export async function getHorizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const scrollWidth = document.documentElement.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;
    return { scrollWidth, clientWidth, overflow: scrollWidth > clientWidth };
  });
}

export async function findOverflowingElements(page: Page) {
  return page.evaluate(() => {
    const clientWidth = document.documentElement.clientWidth;
    const offenders: { tag: string; classes: string; right: number; text: string }[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("body *")) {
      const rect = el.getBoundingClientRect();
      if (rect.right > clientWidth + 1) {
        offenders.push({
          tag: el.tagName,
          classes: el.className?.toString().slice(0, 80) ?? "",
          right: Math.round(rect.right),
          text: el.textContent?.trim().slice(0, 40) ?? "",
        });
      }
    }
    return offenders.slice(0, 15);
  });
}

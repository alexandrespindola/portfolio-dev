import { defineConfig } from "@playwright/test";

const PORT = 4321;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "mobile-320", use: { viewport: { width: 320, height: 900 }, isMobile: true, hasTouch: true } },
    { name: "mobile-375", use: { viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true } },
    { name: "mobile-414", use: { viewport: { width: 414, height: 900 }, isMobile: true, hasTouch: true } },
    { name: "tablet-768", use: { viewport: { width: 768, height: 1024 } } },
    { name: "desktop-1440", use: { viewport: { width: 1440, height: 900 } } },
  ],
  webServer: {
    // Runs against the static build (not `astro dev`): the dev server's Vite
    // HMR client can trigger a mid-test full-page reload on its first
    // connection, which aborts in-flight page.evaluate() calls with
    // "Execution context was destroyed".
    command: "bun run build && bun run preview",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});

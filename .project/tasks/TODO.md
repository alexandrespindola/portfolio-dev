# Portfolio — pending work

## Project imagery

- [ ] **Add the Gnosis Platform featured-card cover.** Create or export a 1600 × 900 WebP image and save it as `apps/web/public/projects/gnosis-platform.webp`. Then set that path as the `image` of **Gnosis Platform** in `apps/web/src/data/projects.ts`.

- [ ] **Add the RPA Migration featured-card cover.** Create a 1600 × 900 WebP visual of the n8n, Puppeteer and automation architecture, save it as `apps/web/public/projects/rpa-migration.webp`, and connect it in `apps/web/src/data/projects.ts`.

- [ ] **Add the Holded Core featured-card cover.** Create a 1600 × 900 WebP image that communicates ERP and commerce integration without revealing the client, save it as `apps/web/public/projects/holded-core.webp`, and connect it in `apps/web/src/data/projects.ts`.

- [ ] **Add images for the compact project cards that still use the generic mock.** Produce 1600 × 1000 WebP images for **Gnosis International Websites**, **Gentlecan**, **IFV** and **Content Alchemist**, save them in `apps/web/public/projects/`, and add the corresponding `image` paths in `apps/web/src/data/projects.ts`.

## Case-study visuals

- [ ] **Populate the Gnosis Platform case study gallery.** Add three 1200 × 900 WebP images for the reader, search and administration views. Add their `src` paths to the three `gallery` entries in `apps/web/src/content/case-studies/gnosis-platform.md`.

- [ ] **Populate the Gnosis Congress case study gallery.** Add three 1200 × 900 WebP images for registration, participant/payment operations and country administration. Add their `src` paths to `apps/web/src/content/case-studies/gnosis-congress.md`.

- [ ] **Populate the RPA Migration case study gallery.** Add three 1200 × 900 WebP images for the migration architecture, n8n workflow operations and Puppeteer validation. Add their `src` paths to `apps/web/src/content/case-studies/rpa-migration.md`.

- [ ] **Populate the Holded Core case study gallery.** Add three 1200 × 900 WebP images for the integration architecture, stock synchronization and operational queue/dashboard. Add their `src` paths to `apps/web/src/content/case-studies/holded-core.md`; do not expose client names or credentials in any screenshot.

- [ ] **Replace the generic case-study cover placeholders for Gnosis Platform, RPA Migration and Holded Core.** Export 1600 × 700 WebP covers, add them to `apps/web/public/projects/case-studies/`, and set each page's `cover` field in its respective Markdown file.

## Portfolio presentation and publication

- [ ] **Review the Gnosis Congress production count before publication.** Confirm that “3,000+ registrations in production” is still accurate, then update both the Hero proof point and `gnosis-congress.md` if the number changes.

- [ ] **Create a new social sharing image for the redesigned portfolio.** Replace `apps/web/public/og.jpg` with a 1200 × 630 image using the current black, charcoal and green visual system.

- [ ] **Validate the final layout at mobile and desktop breakpoints.** Review the home page and all four case studies at 360 px, 768 px, 1024 px and 1440 px wide, specifically checking card CTA alignment, image cropping, case-study gallery layout and fixed-header overlap.

- [ ] **Publish the verified build to Cloudflare Pages.** Run `bun run build`, deploy `apps/web/dist`, and verify the four public case-study URLs return HTTP 200 after deployment.

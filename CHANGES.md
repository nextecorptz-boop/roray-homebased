# Changes Log - Production Fixes

The following modifications were made to prepare the Roray Homebased website for production:

## 1. Image System
- Created `lib/images.ts` as a single source of truth for all image assets.
- Replaced all hardcoded image paths with imports from `IMAGES` constant.
- Updated image mapping to use high-quality pexels assets provided in `public/images/`.
- Switched to `next/image` for all background and content images with proper `sizes` and `priority` attributes.

## 2. Team Page Rebuild
- Entirely rewrote `app/team/page.tsx`.
- Shifted focus to a single-doctor presentation (Dr. Getrude Mande).
- Added asymmetric feature section and supporting professional network tiles.
- Removed all placeholderスタッフ cards.

## 3. SEO & Metadata
- Added unique SEO metadata (titles and descriptions) to every page.
- Implemented dynamic metadata for service detail pages.
- Created `app/robots.txt` and `app/sitemap.ts`.

## 4. Performance & Console Fixes
- Fixed logo aspect ratio warnings in `Navigation.tsx` and `Footer.tsx`.
- Silenced smooth-scroll warning in `app/layout.tsx`.
- Fixed lockfile root warning via `next.config.js`.
- Implemented `loading="lazy"` for all non-critical images.

## 5. Responsiveness Audit
- Adjusted hero headline size for mobile screens.
- Fixed footer grid collapsing for tablet views.
- Repositioned Floating WhatsApp button to the bottom-left on mobile to avoid overlap.
- Ensured service cards have consistent height on all breakpoints.
- Hidden process connector lines on mobile/tablet.
- Added `scroll-mt` to fix sticky nav jump offsets.

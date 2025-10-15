How to install / replace safely

1) Backup your current folder (optional but recommended):
   Copy: F:\Digital Agency\Dr Benzi Nkabinde\Website  →  F:\Digital Agency\Dr Benzi Nkabinde\Website_backup

2) Unzip this archive directly into:
   F:\Digital Agency\Dr Benzi Nkabinde\Website
   Allow Windows to OVERWRITE existing files.

3) Put your real images into src\assets\, replacing the placeholders with the SAME filenames:
   BookCover.png, DRBenziRemovedBackground.png, BookCoverFront.png, DSC00609.jpg ... DSC00954.jpg, DSC_4409.jpg

4) Run:
   cd "F:\Digital Agency\Dr Benzi Nkabinde\Website"
   npm install
   npm run dev
   Open http://localhost:5173

Notes:
- Accent colour updated to #B7391C.
- Carousel now supports mobile swipe + autoplay (pauses on hover/touch/focus, respects reduced motion).
- Router uses HashRouter — good for future GitHub Pages.

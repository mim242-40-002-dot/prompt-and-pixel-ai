# Testing

## Completed checks

Testing was performed against the final local source on August 9, 2026.

| Area | Actual result |
|---|---|
| Static structure | Passed: titles, descriptions, landmarks, unique IDs, internal anchors, local assets, alt attributes and required files |
| JavaScript syntax | Passed with Node syntax checking |
| Responsive matrix | Passed at 320×568, 360×800, 375×667, 390×844, 412×915, 768×1024, 1024×768, 1280×720, 1366×768, 1440×900 and 1920×1080; no horizontal overflow remained after fixes |
| Interaction | Passed: mobile navigation and accessible workflow tabs |
| Forms | Required fields, email format and honest “nothing was sent” status verified where applicable |
| Images | Local files resolved; browser reported no failed image loads |
| Console | No browser warnings or errors on the tested page |
| Screenshots | Captured desktop, mobile, tablet, feature-section and full-page desktop evidence |
| Browser | Passed in the Codex in-app Chromium browser |

## Accessibility review

Semantic landmarks, a single page heading, labelled controls, visible focus treatment, keyboard-operable navigation and controls, Escape handling, focus restoration, reduced-motion support and meaningful link text were checked. Automated Lighthouse/axe packages were not installed, so no numeric score is reported.

## Browser limitations

Firefox and WebKit executables were not available in the bundled environment. Safari hardware testing is unavailable on Windows. Standards-based HTML/CSS/JavaScript and reduced-motion fallbacks are used, but those browsers are recorded as not device-tested rather than claimed as passed.

## Contrast regression — August 9, 2026

The case-study cards were retested after a dark-section inheritance defect was reported. Computed styles now resolve to dark text (`rgb(16, 18, 37)`) on white cards and white text on dark action buttons. The updated section has no horizontal overflow, missing images or browser console issues. Modal opening, Escape dismissal and focus restoration were also rechecked.

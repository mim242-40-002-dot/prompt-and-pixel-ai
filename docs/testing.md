# Testing record

## Release candidate - 13 August 2026

| Area | Verified result |
|---|---|
| Static structure | Passed: nine HTML routes, one primary heading per page, semantic `main` landmarks, unique IDs, valid internal anchors, and all local targets present |
| JavaScript | Passed `node --check`; the Codex Chromium regression session recorded no page console error |
| Character archive | Passed: eight requested profiles contain publisher, identity, role, abilities, biography, and an official publisher source link |
| Filters | Passed: All 8, Marvel 7, DC 1, Heroes 6, and Villains 2; pressed state and live count update together |
| Profile dialog | Passed for all eight profiles: labelled native dialog, focus to Close, Escape dismissal, and focus return to the trigger |
| Service boundary | Passed: Fan Zone prompt/vote and Contact validation remain local and explicitly deny remote AI, database, email, or account service |
| Responsive matrix | Passed at 390x844, 768x1024, 1366x768, 1440x900, and 1920x1080 with matching client/scroll widths, eight cards, and zero broken images |
| Accessibility | Passed practical review for skip link, landmarks, heading order, visible focus, labels, live regions, keyboard operation, native controls, and reduced-motion CSS |
| Export safety | Passed public-file scan for localhost, WordPress administration links, PHP dependencies, credentials, secrets, publisher logos, actor likenesses, movie stills, comic scans, and false affiliation language |

## Browser and performance boundaries

These results describe the 13 August 2026 release candidate in the Codex in-app Chromium browser. The final public commit and live URL are recorded after GitHub Pages deployment. No Lighthouse score, Safari result, Firefox result, WebKit hardware result, or unobserved assistive-technology outcome is claimed.

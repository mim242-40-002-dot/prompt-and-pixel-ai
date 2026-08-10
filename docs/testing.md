# Testing

## Verified checks — 11 August 2026

| Area | Evidence-based result |
|---|---|
| Static structure | Passed across nine exported HTML pages: title, viewport, main landmark, primary heading, unique IDs, anchors, local targets, and required repository files |
| JavaScript syntax | Ten production JavaScript files passed the Node syntax parser |
| Assets | All 280 page references resolved; the character artwork is CSS/SVG-based, so no HTML image element is required |
| Responsive matrix | Passed at 390×844, 768×1024, 1366×768, 1440×900, and 1920×1080 with no horizontal overflow or broken image |
| Navigation | The mobile menu updated its expanded state and exposed all primary destinations |
| Character filters | Rivals exposed Null Crown and Red Static while hiding hero entries |
| Profile dialog | The profile dialog opened, moved focus to its Close control, and closed through its labelled button |
| Contact form | Local validation produced an explicit status that no information was transmitted or stored |
| Console | No public-page browser error was recorded during the archive regression check |
| WordPress export | Simply Static completed with the preserved GitHub Pages URL; the public output contains no PHP, localhost URL, or WordPress administration link |

## Accessibility and originality review

Testing covered skip links, landmarks, headings, filter pressed states, dialog labelling and focus, meaningful controls, visible focus indicators, reduced-motion CSS, and keyboard-operable navigation. The interface and character system were also reviewed for originality: the public site identifies itself as an independent educational concept and contains no Marvel character, logo, copied layout, or licensed artwork claim.

## Browser and performance boundaries

The tested browser was the Codex in-app Chromium browser. Firefox, Safari, and WebKit hardware were unavailable and are not claimed as verified. No Lighthouse score is reported. Performance observations are limited to the implemented static architecture, original CSS/SVG artwork, restrained animation, reduced-motion rules, and reduced production dependency set.

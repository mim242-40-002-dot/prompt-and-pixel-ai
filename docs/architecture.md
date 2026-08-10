# Architecture

## Private authoring layer

The local CMS uses WordPress 7.0.2, PHP 8.3.33, MariaDB 10.11, Hello Elementor, the Panelverse child theme, Elementor Free 4.2.2, and Simply Static 3.8.8. WordPress custom post types model characters and stories. Elementor data is retained for all nine pages.

## Public delivery layer

The repository root is a static production export for GitHub Pages. Original CSS shapes, SVG-like symbols, halftone layers, and abstract character panels avoid external comic artwork. JavaScript progressively enhances the menu, alignment filters, native dialog, timeline presentation, and honest static forms.

## Repository boundaries

- `wordpress-source/` — the portable Panelverse child theme
- `wordpress-evidence/` — sanitized WXR, Elementor JSON, manifest, notes, and export instructions
- Minimal `wp-content/` and `wp-includes/` assets — only dependencies referenced by production pages
- Page directories and root `index.html` — the public multi-page site
- `assets/screenshots/` — real public and WordPress/export evidence

No database, PHP runtime, plugin core, local configuration, credential, Marvel asset, or server-side form is part of the GitHub Pages runtime.

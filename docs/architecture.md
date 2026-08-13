# Architecture

## Private authoring layer

The private CMS uses WordPress 7.0.2, PHP 8.3.33, MariaDB 10.11, Hello Elementor 3.4.9, the HeroVerse Archive child theme, Elementor Free 4.2.2, and Simply Static 3.8.8. WordPress models nine pages plus structured character records; Elementor supplies reusable page containers and responsive controls.

## Public delivery layer

The repository root is a dependency-light static GitHub Pages release. Semantic HTML carries the content, `css/heroverse.css` provides responsive presentation and original CSS-built portrait illustrations, and `js/heroverse.js` progressively enhances navigation, combined filters, native dialogs, local fan prompts, preferences, and contact validation.

## Information model

Every profile exposes the same fields: character identifier, public name, civilian identity, publisher, role, abilities, short biography, and official source URL. Cards use `data-publisher`, `data-alignment`, and `data-character` attributes so one accessible filter system can serve the home, hero, and villain views.

## Repository boundaries

- `wordpress-source/`: portable child-theme source retained for private authoring
- `wordpress-evidence/`: sanitized WXR, nine Elementor JSON templates, manifest, notes, and export instructions
- Page directories and root `index.html`: nine-route public static release
- `css/` and `js/`: public runtime presentation and interaction
- `assets/screenshots/`: real website and private-authoring evidence used by the report

No database, PHP runtime, installed WordPress core, local configuration, credential, cache, actor likeness, movie still, comic scan, publisher logo, or server-side form is part of the public runtime.

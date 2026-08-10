# WordPress and Elementor development notes

Panelverse Comics replaces the earlier Prompt & Pixel interface while preserving the existing repository and GitHub Pages URL. It was created in an isolated local WordPress environment using PHP 8.3, MariaDB 10.11, WordPress 7.0.2, Hello Elementor, Elementor Free 4.2.2, a custom child theme, and Simply Static 3.8.8.

The editable page set is Home, Universe, Heroes, Villains, Stories, Timeline, Fan Zone, About, and Contact. Elementor containers and reusable HTML-widget sections create an original black, red, yellow, and cyan comic system. All characters, symbols, halftones, panels, and story concepts are original project material; the site contains no Marvel logo, character, copied layout, or licensed artwork.

The child theme registers `character` and `story` content types. Public interactions include alignment filters, keyboard-accessible profile dialogs, a responsive menu, reduced-motion handling, an interactive timeline presentation, and honest client-side contact feedback. The header and footer state that Panelverse is an independent educational concept not affiliated with Marvel.

The `elementor-templates/` directory contains privacy-safe page JSON. `wordpress-export/content.xml` is a sanitized WXR content export and `plugin-theme-manifest.json` records the exact local versions. Databases, credentials, WordPress core, installed plugin source, caches, and `wp-config.php` are excluded.

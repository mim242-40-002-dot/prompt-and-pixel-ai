# WordPress and Elementor development notes

HeroVerse Fan Archive replaces Panelverse while preserving the existing `prompt-and-pixel-ai` repository and GitHub Pages destination. Private authoring uses PHP 8.3.33, MariaDB 10.11, WordPress 7.0.2, Hello Elementor 3.4.9, Elementor Free 4.2.2, a custom child theme, and Simply Static 3.8.8.

The editable pages are Home, Universe, Heroes, Villains, Stories, Timeline, Fan Zone, About, and Contact. Reusable Elementor containers carry the archive headings, source boundaries, profile grids, story panels, and service disclaimers. A structured character content model stores publisher, identity, role, abilities, biography, and official source.

The public interface uses original inline-SVG/CSS cartoon portraits and a custom `HV` mark. It does not include Marvel or DC logos, actor likenesses, movie stills, comic scans, traced work, copied commercial layouts, or hotlinked promotional artwork. Green Arrow is identified as a DC guest; the seven other profiles are identified as Marvel characters.

The `elementor-templates/` directory contains privacy-safe JSON for all nine pages. `wordpress-export/content.xml` is a sanitized WXR with pages and character records. `plugin-theme-manifest.json` records the private stack. Databases, credentials, `wp-config.php`, WordPress core, installed plugin source, caches, and private configuration are excluded.

# HeroVerse Fan Archive

HeroVerse Fan Archive is Website 06 of the Web Engineering Lab portfolio. It replaces the former Panelverse release while preserving the `prompt-and-pixel-ai` repository, the `main / (root)` GitHub Pages setting, every public route, and the existing live URL.

The site presents Spider-Man, Thor, Iron Man, Hulk, Doctor Strange, Green Arrow, Loki, and Thanos through concise profile cards. Green Arrow is identified as a DC guest; the other seven profiles are Marvel characters. Character facts link to official publisher pages, while every crossover idea is labelled as a non-canon fan concept.

> Independent, non-commercial educational fan project. Marvel and DC characters and trademarks belong to their respective owners. This site is not affiliated with or endorsed by Marvel Entertainment or DC.

## Live project

- [Open HeroVerse Fan Archive](https://mim242-40-002-dot.github.io/prompt-and-pixel-ai/)
- [GitHub repository](https://github.com/mim242-40-002-dot/prompt-and-pixel-ai)

## Routes and content

- Home: cinematic introduction and an eight-character filterable archive
- Universe: publisher guide, source boundary, and editorial rules
- Heroes: Spider-Man, Thor, Iron Man, Hulk, Doctor Strange, and Green Arrow
- Villains: Loki and Thanos
- Stories: six visibly labelled non-canon crossover prompts
- Timeline: official-profile milestones separated from fan-created archive events
- Fan Zone: local matchup composer and preference interaction
- About: WordPress, Elementor, asset policy, and static-export process
- Contact: honest browser-only validation with no email or database claim

## WordPress and Elementor authoring

The private development stack uses WordPress 7.0.2, PHP 8.3.33, MariaDB 10.11, Hello Elementor 3.4.9, the custom HeroVerse child theme, Elementor Free 4.2.2, and Simply Static 3.8.8. Nine sanitized Elementor templates, a WXR export containing page and character records, a version manifest, development notes, and the child-theme source are retained as safe academic evidence.

The repository intentionally excludes databases, SQL dumps, `wp-config.php`, credentials, secrets, caches, and private local configuration.

## UI, interaction, and accessibility

- Original inline-SVG/CSS cartoon portrait panels, halftone textures, geometric comic frames, and a custom `HV` archive mark
- Combined All, Marvel, DC, Heroes, and Villains filters
- Native profile dialog with a consistent information model, initial focus, Escape support, backdrop close, and focus return
- Responsive navigation, fluid grids, visible keyboard focus, semantic landmarks, skip link, live status messages, and reduced-motion support
- Local-only matchup and contact demonstrations that never imply server processing or remote AI
- Official-source links for every character profile

## Static deployment architecture

WordPress remains the private authoring CMS. The production root is the validated static output targeted to `https://mim242-40-002-dot.github.io/prompt-and-pixel-ai/`. GitHub Pages serves HTML, CSS, and JavaScript only; no PHP, MariaDB, WordPress administration route, localhost URL, or credential is required at runtime.

## Asset policy

The interface contains no Marvel or DC logo, actor likeness, movie still, comic scan, traced artwork, copied commercial layout, or hotlinked promotional image. Portraits are original inline-SVG/CSS cartoon fan illustrations. A planned generated poster did not pass image safety review, so the release does not claim or ship an AI-generated social bitmap.

## Reproducing the private authoring environment

1. Create a private WordPress installation with PHP 8.3 and MariaDB 10.11.
2. Install Hello Elementor, Elementor Free, and Simply Static.
3. Copy and activate `wordpress-source/themes/panelverse-child/` (the retained directory name preserves the earlier child-theme path; its public identity is HeroVerse Archive).
4. Import `wordpress-evidence/wordpress-export/content.xml` and the optional Elementor JSON templates.
5. Review responsive controls, focus paths, reduced motion, and disclosure text.
6. Configure Simply Static with the exact production URL and export to an isolated staging directory.
7. Run the repository QA before moving the validated static files into the repository root.

## Verification scope

Static QA covers headings, landmarks, IDs, anchors, local assets, JavaScript syntax, alternative text, forbidden local/admin references, credential patterns, and PHP dependencies. Browser regression covers navigation, filters, all profile dialogs, focus return, Escape closing, Fan Zone controls, contact validation, reduced motion, and representative widths. No Lighthouse score or untested browser result is claimed.

## Documentation

- [Project overview](docs/project-overview.md)
- [Architecture](docs/architecture.md)
- [User flow](docs/user-flow.md)
- [Testing record](docs/testing.md)
- [Asset credits](docs/asset-credits.md)
- [WordPress development notes](wordpress-evidence/development-notes.md)
- [Static export workflow](wordpress-evidence/static-export.md)

## Author

Jannatun Nur Mim  
Department of Multimedia and Creative Technology  
Daffodil International University, Dhaka, Bangladesh

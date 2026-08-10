# Simply Static export workflow

1. Run the private WordPress authoring site locally and regenerate Elementor CSS.
2. Test all nine pages plus character filters, dialogs, navigation, contact feedback, and reduced-motion behavior.
3. Configure Simply Static for the absolute destination `https://mim242-40-002-dot.github.io/prompt-and-pixel-ai/` and local-directory delivery to an isolated staging folder.
4. Run the export, retry unresolved public HTML after releasing the single-threaded development server, and transfer the completed archive.
5. Sanitize WordPress-only speculation rules, admin AJAX data, nonces, generator metadata, and unused feeds.
6. Select the referenced production dependency set and record it in `static-export-manifest.json`.
7. Confirm the final HTML contains no localhost, admin, login, PHP, configuration, password, or token reference before placing it in the repository root.

GitHub Pages serves only the static output. WordPress, Elementor, and MariaDB remain private development dependencies.

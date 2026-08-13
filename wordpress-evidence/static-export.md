# Simply Static export workflow

1. Run the private WordPress authoring site and regenerate Elementor CSS.
2. Review all nine pages, reusable sections, profile data, official links, publisher labels, rights disclaimer, and responsive controls.
3. Test navigation, combined filters, all profile dialogs, Escape closing, focus return, Fan Zone controls, contact validation, and reduced motion.
4. Configure Simply Static with `https://mim242-40-002-dot.github.io/prompt-and-pixel-ai/` as the absolute destination and an isolated local staging directory.
5. Export, then remove development-only metadata, nonces, administration references, unused feeds, and unneeded plugin/runtime files.
6. Confirm that all nine legacy routes resolve and that every referenced local asset exists.
7. Scan the final output for localhost URLs, `wp-admin`, login links, PHP dependencies, credentials, secrets, and misleading server-form claims.
8. Place only the validated HTML, CSS, JavaScript, favicon, documentation, and safe authoring evidence in the repository.

GitHub Pages serves only the static release. WordPress, Elementor, PHP, and MariaDB remain private development dependencies.

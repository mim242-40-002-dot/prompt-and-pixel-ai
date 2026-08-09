# Architecture

## Overview

Prompt & Pixel is a dependency-free static website served from the repository root. `index.html` contains semantic content and landmarks; CSS is separated into design tokens, global foundations, components and responsive rules; `js/main.js` progressively enhances navigation and project-specific interactions.

## Structure

- `index.html` — page content, metadata and accessible control labels
- `css/variables.css` — color, spacing and fluid type tokens
- `css/global.css` — reset, typography, layout and forms
- `css/components.css` — project-specific cards and interactions
- `css/responsive.css` — tablet and mobile layout changes
- `js/main.js` — navigation, validation, filters, dialogs and optional project interactions
- `assets/` — local images, icons and verified screenshots

## State and data

State is intentionally local and temporary. Filters, tabs, dialogs and the simulated chatbot use in-memory DOM state. No personal data is stored or transmitted. Forms validate locally and expose a user-initiated email link.

## Responsive strategy

Fluid type and spacing handle intermediate widths. Structural breakpoints at 900px and 600px reorganize columns, navigation, forms and interactive surfaces rather than simply shrinking them.

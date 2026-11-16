# Personal Portfolio Site

This three-page responsive portfolio introduces my interests, developing technical skills, projects, and contact information.

## Accessibility Review

WAVE was run on the Home, Projects and Work, and About and Contact pages; the published pages reported zero automated errors, zero contrast errors, and zero alerts before the final manual improvements.

- I added a skip link on every page so keyboard users can bypass repeated navigation and move directly to the main content.
- I added a high-contrast `:focus-visible` outline so keyboard users can clearly identify the currently focused control.
- I replaced the raw GitHub URL with descriptive link text so its purpose is understandable outside the surrounding sentence.
- I connected every form control to a visible `<label>` and grouped the name and email fields with a descriptive `<fieldset>` and `<legend>`.
- I added specific inline error messages, `aria-invalid`, an `aria-live` status region, and automatic focus movement to make validation errors perceivable and actionable.

## WCAG AA Contrast

The consistent navy, blue, gold, pale-gold, cloud, white, and dark-text palette is defined once with CSS custom properties and reused across all three pages.

- White text on navy: 14.42:1.
- Pale-gold text on navy: 12.95:1.
- Blue links on white: 8.19:1.
- Dark body text on cloud: 13.65:1.
- Navy text on gold controls: 8.06:1.

Each listed combination exceeds the WCAG AA requirement of 4.5:1 for normal text.

## Intentional Gestalt Principles

- **Proximity:** Related project content is grouped inside individual cards, while consistent gaps separate each project from the next.
- **Similarity:** Navigation links, content panels, form fields, and project cards repeat consistent colors, borders, spacing, and typography to show which elements share a purpose.
- **Common region:** Borders and background colors enclose related content, including project cards, the contact-information fieldset, and the contact address block.

## Pages

- `index.html` — Home
- `projects.html` — Projects and Work
- `about.html` — About and Contact

## Accessibility Testing Note

Automated tools cannot confirm every accessibility requirement, so the site should also be tested with keyboard-only navigation, browser zoom, and a screen reader.

# TEFL demo site

Static, clickable demo pages. No build step — open index.html or serve the folder.

## Pages
- index.html — hero, course tabs, instalments calculator, modal form
- courses.html — course cards

## Local preview
    python3 -m http.server 8080 --bind 0.0.0.0

## Deploy
Push to main; GitHub Actions publishes to Pages (see .github/workflows/pages.yml).
Requires Pages enabled with "GitHub Actions" as the source.

## Notes
- All pages carry robots noindex while these are demos.
- The contact form is a demo: it validates and shows a success message but sends nothing.
- To wire real submissions, point the form at an n8n webhook.

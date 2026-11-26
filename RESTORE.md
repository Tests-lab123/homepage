# Restoring the mockups

Snapshot taken **26/11/2026** — mirror (homepage + all `/courses/` pages), the rebuild at `/rebuild/`, and the Audio Edition prototype.

## Reset to this snapshot

```bash
cd /home/ubuntu/.openclaw/workspace/demos/homepage-redesign
git fetch --tags
git reset --hard backup-2026-11-26
git push --force
```

GitHub Pages redeploys in about a minute.

## Off-box copies

- Tag `backup-2026-11-26` on `Tests-lab123/homepage` (survives any local loss)
- `/home/ubuntu/backups/homepage-site-2026-11-26.tar.gz` (11 MB)
- Drive: homepage-site-2026-11-26.tar.gz in the Lucas folder

## What is in the repo

| Path | What it is |
|---|---|
| `/` | mirror of tefl.org homepage |
| `/courses/` | mirror of the courses section (32 pages) |
| `/courses/online/120-hour-premier-online-tefl-course-audio-edition/` | Audio Edition prototype (header wrapper + `app.html`) |
| `/rebuild/` | hand-built redesign |
| `/_nuxt/icon-fix.css` | site-wide overrides (icon sizing, header) |
| `.nojekyll` | required so Pages serves `_nuxt` |

## Undoing a single change

Every change is its own commit:

```bash
git log --oneline -10     # find the commit
git revert <sha>          # undo just that one
git push
```

# Changelog

User-facing changes, newest first. The plan behind them is in [docs/ROADMAP.md](docs/ROADMAP.md).

## Unreleased

### Added
- Automatic deploy to GitHub Pages on every push to `main`.
- Development roadmap and step log in `docs/ROADMAP.md`.

### Fixed
- `npm ci` works again: `package-lock.json` is back in sync with `package.json`.

### Removed
- Unused libraries: recharts, jspdf, html2canvas, simple-statistics. They can come back when a feature needs them, for example PDF export in step 1.8.

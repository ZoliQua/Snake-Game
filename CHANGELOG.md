# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

## [2.1.1] — 2026-11-22

### Changed

- Vendored kit (`src/arcade/`) updated: the registry knows the tenth arcade game, Nut Sort, with its accent colour.
- README: the Zoltan's Arcade family table lists all ten games.

## [2.1.0] — 2026-11-13

### Changed

- Vendored kit (`src/arcade/`) updated: the registry knows the three new arcade games — Breakout, Space Invaders and
  Connect Four — with their accent colours; the duel round-score docs mention Connect Four.
- README: the Zoltan's Arcade family table lists all nine games.

## [2.0.0] — 2026-10-24

### Added
- Shared Zoltan's Arcade kit (`src/arcade/`): unified stats, theme, standalone shell and UI.
- Autosave & resume of the run in progress (`arcade.session.snake`).
- `SnakeDemo` attract mode driven by a BFS autopilot, used on the portal landing page.
- `embedded`, `onRunEnd` and `onStatusChange` props (shared `ArcadeGameProps` contract).
- Filling the whole board ends the run as a win.
- Vitest + Testing Library test suite, `npm run check`, GitHub Actions CI.
- Code of Conduct, Contributing, Contributors and Security docs, issue/PR templates.

### Changed
- Score panel, overlay, buttons and settings use the shared arcade design system (dark & light theme).
- High score now lives in `arcade.stats.snake`; `snake.highScore` is kept in sync.
- Base path is relative (`base: './'`), so builds work from any sub-folder.

### Fixed
- `npm run typecheck` checked nothing (it targeted the empty solution tsconfig); it now runs `tsc -b`.
- Keyboard listener was re-attached on every render; game hotkeys fired while typing in inputs or with Cmd/Ctrl held.

## [1.0.0] — 2026-04-21

- First release: 20×20 Snake with speed slider, wall wrap, high score and timer.

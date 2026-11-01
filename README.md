# 🐍 Snake

A minimal, type-safe Snake game built with **React 18**, **Vite** and **TypeScript** — keyboard-first, grid-based DOM, no canvas, no game engine.
Runs on its own **and** as one of the ten games of **[Zoltan's Arcade](https://github.com/ZoliQua/Arcade-Game-Center)**.

[![CI](https://github.com/ZoliQua/Snake-Game/actions/workflows/ci.yml/badge.svg)](https://github.com/ZoliQua/Snake-Game/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

---

## 📑 Table of contents

- [The Zoltan's Arcade family](#-the-zoltans-arcade-family)
- [Features](#-features)
- [Quick start](#-quick-start)
- [Controls](#%EF%B8%8F-controls)
- [Scoring & stats](#-scoring--stats)
- [Autosave & resume](#-autosave--resume)
- [Embedding in Arcade-Game-Center](#-embedding-in-arcade-game-center)
- [How it works](#-how-it-works)
- [Scripts](#-scripts)
- [Architecture](#%EF%B8%8F-architecture)
- [Contributing](#-contributing)
- [License](#%EF%B8%8F-license)

## 🕹️ The Zoltan's Arcade family

Every game is a standalone repo that also plugs into the portal. They share one design system, one scoring model and one save format through the vendored [`src/arcade/`](./src/arcade) kit.

| Game | Repo | Genre |
| --- | --- | --- |
| 🏠 **Arcade portal** | [Arcade-Game-Center](https://github.com/ZoliQua/Arcade-Game-Center) | All games in one place, live demos, stats, leaderboard |
| 🧱 Tetris | [Tetris-Game](https://github.com/ZoliQua/Tetris-Game) | Arcade |
| 🐍 **Snake** (this repo) | [Snake-Game](https://github.com/ZoliQua/Snake-Game) | Reflex |
| 🔢 2048 | [2048-Game](https://github.com/ZoliQua/2048-Game) | Puzzle |
| 🟡 Pac-Man | [Pac-Man-Game](https://github.com/ZoliQua/Pac-Man-Game) | Maze |
| ⚫ Gomoku | [Gomoku-Game](https://github.com/ZoliQua/Gomoku-Game) | Strategy |
| 🦷 Tic-Tac-Toe | [Tic-Tac-Toe-Game](https://github.com/ZoliQua/Tic-Tac-Toe-Game) | Duel |
| 🏓 Breakout | [Breakout-Game](https://github.com/ZoliQua/Breakout-Game) | Paddle |
| 👾 Space Invaders | [Space-Invaders-Game](https://github.com/ZoliQua/Space-Invaders-Game) | Shooter |
| 🔴 Connect Four | [Connect-Four-Game](https://github.com/ZoliQua/Connect-Four-Game) | Duel |
| 🔩 Nut Sort | [Nut-Sort-Game](https://github.com/ZoliQua/Nut-Sort-Game) | Sorting |

## ✨ Features

- 🎮 **Classic Snake** on a 20×20 grid; filling the whole board counts as a win
- ⚡ **Adjustable speed** (1–10) with speed-scaled scoring
- 🧱 **Wall wrap toggle** — torus mode (default) or classic walls
- 💾 **Autosave & resume** — close the tab mid-run and pick up where you left off
- 🏆 **Unified arcade stats** — best score, plays, total time, shared with the portal
- ⏱️ **Pause-aware run timer**
- 🌗 **Dark / light theme** shared with every arcade game (press **T**)
- 🤖 **Attract-mode demo** (`<SnakeDemo />`) — the real engine driven by a BFS autopilot, shown on the portal's landing page
- ⌨️ **Keyboard-first**; hotkeys are ignored while you type in a form field
- 🧪 **Tested** — pure-logic unit tests plus component tests with Vitest + Testing Library

## 🚀 Quick start

Requires **Node ≥ 20** and npm.

```bash
git clone https://github.com/ZoliQua/Snake-Game.git
cd Snake-Game
npm install
npm run dev          # http://localhost:5173
```

Production build: `npm run build && npm run preview`. The build uses relative asset paths, so `dist/` can be served from any sub-folder.

## ⌨️ Controls

| Key | Action |
| --- | --- |
| ⬆️ ⬇️ ⬅️ ➡️ / **W A S D** | Steer |
| **Space** / **Enter** | Start · pause · resume |
| **P** / **Esc** | Pause / resume |
| **R** | Restart |
| **T** | Toggle dark / light theme (standalone page) |

## 🎯 Scoring & stats

Each pellet is worth **N points at speed N** (speed changes apply from the next pellet on).

| Speed | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tick (ms) | 300 | 260 | 225 | 195 | 170 | **150** | 130 | 110 | 90 | 70 |
| Points / pellet | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 |

When a run ends the kit records it once in `localStorage` under `arcade.stats.snake`
(`best`, `plays`, `wins`, `totalScore`, `totalSeconds`, `lastScore`, `lastPlayedAt`).
The legacy `snake.highScore` key is kept in sync, so older builds keep their record.

## 💾 Autosave & resume

While a run is in progress it is saved about once a second and whenever the page is hidden or the game is unmounted
(key `arcade.session.snake`, schema-versioned and validated on load). Reloading shows **Welcome back** with the restored
run paused. **Discard** next to the *Autosaved* badge throws the save away. Finished runs clear their save automatically.

## 🧩 Embedding in Arcade-Game-Center

```tsx
import { SnakeGame, SnakeDemo } from '@arcade/snake';

<SnakeGame
  embedded                                   // hide the page title; the portal shows it
  onGameOver={(score) => submitScore('snake', score)}
  onStatusChange={({ status, score, seconds }) => updateHeader(status, seconds)}
/>
<SnakeDemo active={cardIsVisible} />          // landing-page attract mode
```

Both components follow the shared `ArcadeGameProps` / `ArcadeDemoProps` contract from `src/arcade/types.ts`.

## 🧠 How it works

State machine: `idle → running ↔ paused → gameOver → (restart) → running`.

A single pure function, `advanceGame(state, rng)`, owns one tick:

1. Resolve the queued direction (180° reversals are blocked against the **last applied** direction).
2. Compute the next head; wrap it or end the run on wall contact.
3. Check self-collision against the body **after** the tail moves (entering the cell the tail leaves is legal).
4. Grow and score on food, otherwise shift the tail; a full board ends the run as a win.

`useGameLoop` runs an interval only while running, reading the latest callback from a ref (no stale closures).
`useKeyboardDirection` attaches one window listener for the component's lifetime.

## 🧪 Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and production build |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (logic + component tests) |
| `npm run check` | lint → typecheck → test → build (what CI runs) |

## 🏗️ Architecture

```
src/
  arcade/            vendored Zoltan's Arcade kit — do not edit here (see its README)
  logic/             pure game rules
    types.ts constants.ts snake.ts food.ts collision.ts
    game.ts          advanceGame + createInitialState + isBoardFull
    autopilot.ts     BFS steering for the demo
    persist.ts       runtime validation of saved sessions
  hooks/             useGameLoop, useKeyboardDirection
  components/        GameBoard (full + mini), SpeedControl, WrapToggle
  demo/SnakeDemo.tsx landing-page attract mode
  SnakeGame.tsx      the embeddable game (ArcadeGameProps)
  App.tsx            standalone page: <ArcadeShell><SnakeGame/></ArcadeShell>
  main.tsx           entry; loads the shared arcade.css once
  index.ts           package entry used by Arcade-Game-Center
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md), the [Code of Conduct](./CODE_OF_CONDUCT.md) and [SECURITY.md](./SECURITY.md).
Contributors are listed in [CONTRIBUTORS.md](./CONTRIBUTORS.md); changes in [CHANGELOG.md](./CHANGELOG.md).

## ⚖️ License

[MIT](./LICENSE) © 2026 Zoltán Dul

---

<p align="center">Made with ❤️ by Zoltán Dul · part of <a href="https://github.com/ZoliQua/Arcade-Game-Center">Zoltan's Arcade</a></p>

# Snake

Minimal, type-safe Snake game built with React 18, Vite, and TypeScript.

## Stack

- React 18 + TypeScript
- Vite
- CSS Modules
- Node >= 20, npm

## Scripts

```bash
npm install
npm run dev         # local dev server
npm run build       # production build
npm run preview     # preview production build
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
```

## Controls

- Arrow keys or WASD — move
- Space or P — pause / resume
- R — restart

## Architecture

```
src/
  logic/       pure game rules (types, constants, snake, food, collision, game)
  hooks/       useGameLoop, useKeyboardDirection
  components/  GameBoard, ScoreBoard, GameControls, Overlay
  styles/
```

`advanceGame(state)` is the single pure tick function. UI components stay
presentational; state machine lives in `App.tsx`.

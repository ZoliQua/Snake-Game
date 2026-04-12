import type { Direction, GameState, Position } from './types';

export const GRID_SIZE = 20;
export const TICK_MS = 150;

export const INITIAL_DIRECTION: Direction = 'RIGHT';

export const INITIAL_SNAKE: Position[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];

export const INITIAL_FOOD: Position = { x: 14, y: 10 };

export const INITIAL_STATE: GameState = {
  snake: INITIAL_SNAKE,
  food: INITIAL_FOOD,
  direction: INITIAL_DIRECTION,
  nextDirection: INITIAL_DIRECTION,
  status: 'idle',
  score: 0,
  gridSize: GRID_SIZE,
};

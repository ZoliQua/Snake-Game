import { INITIAL_STATE } from './constants';
import { hitsSelf, hitsWall } from './collision';
import { isSamePosition, spawnFood } from './food';
import { isOppositeDirection, moveSnake, nextHead } from './snake';
import type { GameState } from './types';

export function advanceGame(state: GameState, rng: () => number = Math.random): GameState {
  if (state.status !== 'running') {
    return state;
  }

  const direction = isOppositeDirection(state.nextDirection, state.direction)
    ? state.direction
    : state.nextDirection;

  const head = nextHead(state.snake[0], direction);

  if (hitsWall(head, state.gridSize)) {
    return { ...state, direction, status: 'gameOver' };
  }

  const willEat = isSamePosition(head, state.food);
  const survivingBody = willEat ? state.snake : state.snake.slice(0, -1);

  if (hitsSelf(head, survivingBody)) {
    return { ...state, direction, status: 'gameOver' };
  }

  const snake = moveSnake(state.snake, head, willEat);
  const food = willEat ? spawnFood(snake, state.gridSize, rng) : state.food;
  const score = willEat ? state.score + 1 : state.score;

  return { ...state, snake, food, direction, score };
}

export function createInitialState(): GameState {
  return { ...INITIAL_STATE, snake: [...INITIAL_STATE.snake] };
}

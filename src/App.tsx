import { useCallback, useEffect, useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameControls } from './components/GameControls';
import { Overlay } from './components/Overlay';
import { ScoreBoard } from './components/ScoreBoard';
import { SpeedControl } from './components/SpeedControl';
import { useGameLoop } from './hooks/useGameLoop';
import { useHighScore } from './hooks/useHighScore';
import { useKeyboardDirection } from './hooks/useKeyboardDirection';
import { DEFAULT_SPEED, tickMsForSpeed } from './logic/constants';
import { advanceGame, createInitialState } from './logic/game';
import { isOppositeDirection } from './logic/snake';
import type { Direction } from './logic/types';
import styles from './App.module.css';

export default function App() {
  const [state, setState] = useState(createInitialState);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const { highScore, recordScore } = useHighScore();

  useEffect(() => {
    if (state.status === 'gameOver') {
      recordScore(state.score);
    }
  }, [state.status, state.score, recordScore]);

  const tick = useCallback(() => {
    setState((prev) => advanceGame(prev));
  }, []);

  useGameLoop(state.status === 'running', tickMsForSpeed(speed), tick);

  const handleStart = useCallback(() => {
    setState((prev) =>
      prev.status === 'idle' || prev.status === 'gameOver'
        ? { ...createInitialState(), status: 'running' }
        : prev,
    );
  }, []);

  const handleTogglePause = useCallback(() => {
    setState((prev) => {
      if (prev.status === 'running') return { ...prev, status: 'paused' };
      if (prev.status === 'paused') return { ...prev, status: 'running' };
      return prev;
    });
  }, []);

  const handleRestart = useCallback(() => {
    setState({ ...createInitialState(), status: 'running' });
  }, []);

  const handleDirection = useCallback((direction: Direction) => {
    setState((prev) => {
      if (prev.status !== 'running' && prev.status !== 'paused') return prev;
      if (isOppositeDirection(direction, prev.direction)) return prev;
      if (direction === prev.direction) return prev;
      return { ...prev, nextDirection: direction };
    });
  }, []);

  useKeyboardDirection({
    onDirection: handleDirection,
    onTogglePause: handleTogglePause,
    onRestart: handleRestart,
  });

  return (
    <main className={styles.app}>
      <ScoreBoard score={state.score} highScore={highScore} status={state.status} />
      <div className={styles.boardWrap}>
        <GameBoard gridSize={state.gridSize} snake={state.snake} food={state.food} />
        <Overlay
          status={state.status}
          score={state.score}
          onStart={handleStart}
          onResume={handleTogglePause}
          onRestart={handleRestart}
        />
      </div>
      <GameControls
        status={state.status}
        onStart={handleStart}
        onTogglePause={handleTogglePause}
        onRestart={handleRestart}
      />
      <SpeedControl speed={speed} onChange={setSpeed} />
    </main>
  );
}

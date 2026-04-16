import type { GameStatus } from '../logic/types';
import styles from './ScoreBoard.module.css';

type Props = {
  score: number;
  status: GameStatus;
};

const STATUS_LABEL: Record<GameStatus, string> = {
  idle: 'Ready',
  running: 'Running',
  paused: 'Paused',
  gameOver: 'Game over',
};

export function ScoreBoard({ score, status }: Props) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.score}>
        <span className={styles.label}>Score</span>
        <span className={styles.value}>{score}</span>
      </div>
      <div className={`${styles.status} ${styles[status]}`}>{STATUS_LABEL[status]}</div>
    </div>
  );
}

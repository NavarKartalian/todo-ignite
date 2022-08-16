import { Trash } from 'phosphor-react';
import circle from '../../assets/circle.svg';
import checked from '../../assets/checked.svg';
import styles from './Task.module.css';

interface TaskProps {
  task: {
    id: number;
    task: string;
    isComplete: boolean;
  }
  onComplete: () => void;
  onDelete: () => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.circleButton} onClick={onComplete}>
        {!task.isComplete ? (
          <img src={circle} alt="Empety circle" />
        ) : (
          <img src={checked} alt="Check button" />
        )}
      </button>

      <h2 className={task.isComplete ? styles.completedTask : styles.incompleteTask}>
        {task.task}
      </h2>

      <button className={styles.trashButton} onClick={onDelete}>
        <Trash size={18} />
      </button>
    </div>
  );
}
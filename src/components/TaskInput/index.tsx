import styles from './TaskInput.module.css';
import { PlusCircle } from 'phosphor-react';

interface TaskInputProps {
  setTaskTitle: (title: string) => void;
  taskTitle: string;
  onCreateNewTask: () => void;
}

export function TaskInput({ setTaskTitle, taskTitle, onCreateNewTask }: TaskInputProps) {
  return (
    <div className={styles.wrapper}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
      />

      <button onClick={onCreateNewTask} disabled={!taskTitle.trim()}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
}
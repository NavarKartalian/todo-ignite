import styles from './TaskInput.module.css';
import { PlusCircle } from 'phosphor-react';
import { useHandleTodo } from '../../context/handleTask';

export function TaskInput() {
  const { setTaskTitle, taskTitle, handleCreateNewTask } = useHandleTodo();

  return (
    <div className={styles.wrapper}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        onChange={(e) => setTaskTitle(e.target.value)}
        maxLength={40}
        value={taskTitle}
      />

      <button onClick={handleCreateNewTask} disabled={!taskTitle.trim()}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
}
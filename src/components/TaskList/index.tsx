import styles from './TaskList.module.css';
import Clipboard from '../../assets/Clipboard.svg';
import { Task } from '../Task';
import { useHandleTodo } from '../../context/handleTask';

export function TaskList() {
  const { tasks, numOfCompletedTasks, handleCompleteTask, handleDeleteTask } = useHandleTodo();

  return (
    <div className={styles.wrapper}>
      <div className={styles.taskInfo}>
        <div className={styles.tasksNum}>
          <h2>Tarefas criadas</h2>
          <p>{tasks.length}</p>
        </div>

        <div className={styles.tasksFinished}>
          <h2>Concluídas</h2>
          <p>{numOfCompletedTasks}</p>
        </div>
      </div>

      <div className={tasks.length === 0 ? styles.taskListPlaceholder : styles.taskList}>
        {tasks.length === 0 ? (
          <div className={styles.clipboardPlaceholder}>
            <img src={Clipboard} alt="Clipboard" />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <>
            {tasks.map(task => (
              <Task 
                key={task.id} 
                task={task} 
                onComplete={() => handleCompleteTask(task.id)} 
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import styles from './styles/app.module.css';

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      task: 'Finalizar o Todo',
      isComplete: true
    },
    {
      id: 2,
      task: 'Iniciar o desenvolvimento do game',
      isComplete: false
    },
  ]);

  const [ taskTitle, setTaskTitle ] = useState('');

  const numOfCompletedTasks = tasks.filter(task => task.isComplete === true).length;

  function handleCreateNewTask() {
    if(!taskTitle.trim()) return;

    setTask([...tasks, {
      id: tasks.length + 1,
      task: taskTitle,
      isComplete: false
    }]);

    setTaskTitle('');
  }
  
  function handleCompleteTask(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);

    setTask(newTasks);
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTask(filteredTasks);
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <TaskInput 
          taskTitle={taskTitle} 
          setTaskTitle={setTaskTitle} 
          onCreateNewTask={handleCreateNewTask}
        />

        <TaskList 
          tasks={tasks} 
          handleCompleteTask={handleCompleteTask} 
          handleDeleteTask={handleDeleteTask}
          numOfCompletedTasks={numOfCompletedTasks}
        />
      </main>
    </>
  )
}

export default App

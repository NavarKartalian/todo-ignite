import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";

interface TaskProviderProps {
  children: ReactNode;
}

interface Task {
  id: number;
  task: string;
  isComplete: boolean;
}

interface TodoContextData {
  tasks: Task[];
  taskTitle: string;
  numOfCompletedTasks: number;
  setTaskTitle: (value: string) => void;
  handleCreateNewTask: () => void;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [ taskTitle, setTaskTitle ] = useState('');
  const shouldSetTask = useRef(true);

  useEffect(() => {
    if(shouldSetTask.current) {
      shouldSetTask.current = false;
      const initialTasks = [
        {id: 1, task: 'Finalizar o Todo', isComplete: true},
        {id: 2, task: 'Iniciar o desenvolvimento dos assets para o jogo', isComplete: false},
        {id: 3, task: 'Terminar o curso de phyton', isComplete: false},
      ];
  
      const tasks = JSON.parse(localStorage.getItem('tasks') || JSON.stringify(initialTasks));
  
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const numOfCompletedTasks = tasks.filter(task => task.isComplete === true).length;

  function handleCreateNewTask() {
    if(!taskTitle.trim()) return;

    setTasks([...tasks, {
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

    setTasks(newTasks);
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  return (
    <TodoContext.Provider 
      value={
        {
          tasks,
          handleCompleteTask,
          handleDeleteTask,
          handleCreateNewTask,
          taskTitle,
          setTaskTitle,
          numOfCompletedTasks
        }
      }
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useHandleTodo() {
  const context = useContext(TodoContext);

  return context;
}

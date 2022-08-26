import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import styles from './styles/app.module.css';

function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <TaskInput />

        <TaskList />
      </main>
    </>
  )
}

export default App

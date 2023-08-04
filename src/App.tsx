import React from 'react';
import logo from '@app/assets/logo.svg';
import styles from './App.module.css';

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

function createTask(value: string): Task {
  return {
    id: Date.now().toString(),
    description: value,
    completed: false,
  };
}

export function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [task, setTask] = React.useState<string>('');

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTasks((state) => [createTask(task), ...state]);
    setTask('');
  }

  function completeTask(taskId: string) {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id !== taskId) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    });
  }

  function deleteTask(taskId: string) {
    setTasks((state) => state.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Todo logo" />
      </header>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" value={task} onChange={handleInput} />
          <button type="submit">+</button>
        </form>
        <div className={styles.todoHeader}>
          <div>
            Tarefas criadas <span>{totalTasks}</span>
          </div>
          <div>
            Concluídas
            <span>{completedTasks === 0 && totalTasks === 0 ? '0' : `${completedTasks} de ${totalTasks}`}</span>
          </div>
        </div>
        <div className={styles.todoList}>
          {tasks.map((item) => (
            <div className={styles.todoItem} key={item.id}>
              <div className={styles.todoControl}>
                <input id={item.id} type="checkbox" onClick={() => completeTask(item.id)} />
                <label htmlFor={item.id}>{item.description}</label>
              </div>
              <button onClick={() => deleteTask(item.id)}>-</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

import React from 'react';
import { Header } from '@app/components/Header';
import { Summary } from '@app/components/Summary';
import { TodoList } from '@app/components/TodoList';
import { createTask, Task } from '@app/utils/models.ts';
import styles from './App.module.css';

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
      <Header />

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" value={task} onChange={handleInput} />
          <button type="submit">+</button>
        </form>

        <Summary totalTasks={totalTasks} completedTasks={completedTasks} />

        <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </main>
    </>
  );
}

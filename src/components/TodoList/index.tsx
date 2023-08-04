import { Task } from '@app/utils/models.ts';
import styles from './TodoList.module.css';

export interface TodoListProps {
  tasks: Task[];
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TodoList({ tasks, completeTask, deleteTask }: TodoListProps) {
  return (
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
  );
}

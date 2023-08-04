import styles from './Summary.module.css';

export interface SummaryProps {
  totalTasks: number;
  completedTasks: number;
}

export function Summary({ totalTasks, completedTasks }: SummaryProps) {
  return (
    <div className={styles.todoHeader}>
      <div className={styles.created}>
        Tarefas criadas <span>{totalTasks}</span>
      </div>
      <div className={styles.finished}>
        Concluídas
        <span>{completedTasks === 0 && totalTasks === 0 ? '0' : `${completedTasks} de ${totalTasks}`}</span>
      </div>
    </div>
  );
}

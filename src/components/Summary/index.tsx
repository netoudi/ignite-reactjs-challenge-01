import styles from './Summary.module.css';

export interface SummaryProps {
  totalTasks: number;
  completedTasks: number;
}

export function Summary({ totalTasks, completedTasks }: SummaryProps) {
  return (
    <div className={styles.todoHeader}>
      <div>
        Tarefas criadas <span>{totalTasks}</span>
      </div>
      <div>
        Concluídas
        <span>{completedTasks === 0 && totalTasks === 0 ? '0' : `${completedTasks} de ${totalTasks}`}</span>
      </div>
    </div>
  );
}

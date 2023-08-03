import logo from '@app/assets/logo.svg';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Todo logo" />
      </header>
      <main className={styles.main}>
        <form className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>+</button>
        </form>
        <div className={styles.todoHeader}>
          <div>
            Tarefas criadas <span>0</span>
          </div>
          <div>
            Concluídas <span>0</span>
          </div>
        </div>
        <div className={styles.todoList}>
          {[1, 2, 3, 4, 5].map((value) => (
            <div className={styles.todoItem} key={value}>
              <div className={styles.todoControl}>
                <input id={String(value)} type="checkbox" />
                <label htmlFor={String(value)}>Lorem ipsum dolor sit amet.</label>
              </div>
              <button>-</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

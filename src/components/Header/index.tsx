import logo from '@app/assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Todo logo" />
    </header>
  );
}

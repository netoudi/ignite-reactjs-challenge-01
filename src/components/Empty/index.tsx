import { ClipboardText } from '@phosphor-icons/react';
import styles from './Empty.module.css';

export interface EmptyProps {
  title: string;
  description: string;
}

export function Empty({ title, description }: EmptyProps) {
  return (
    <div className={styles.wrapper}>
      <ClipboardText size={56} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

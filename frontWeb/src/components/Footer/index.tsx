import { FC } from 'react';
import styles from './styles.module.css';

const Footer:FC = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p>&copy; 2025 Set Site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
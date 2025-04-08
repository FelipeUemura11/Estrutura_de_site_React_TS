import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound:FC = () => {
  return (
    <div className={styles.container}>
      <h1> 404 - Página não encontrada</h1>
      <p> A página que você está procurando não existe.</p>
      <Link to="/" className={styles.link}>Voltar para Home</Link>
    </div>
  )
}

export default NotFound;
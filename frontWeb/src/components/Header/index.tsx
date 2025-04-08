import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header:FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Logo
        </Link>
        <ul className={styles.menu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
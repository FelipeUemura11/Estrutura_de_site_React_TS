// Layout do site
import { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}> {children} </main>
      <Footer />
    </div>
  )
}

export default Layout;
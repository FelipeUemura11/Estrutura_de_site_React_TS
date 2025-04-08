import {FC } from 'react';
import styles from './styles.module.css';

const About:FC = () => {
  return (
    <div className={styles.container}>
      <h1> Sobre Nos... </h1>
      <p>Este é o nosso site de teste</p>
    </div>
  )
}

export default About;
import { FC } from 'react'
import styles from './styles.module.css'

const Home:FC = () => {
  return (
    <div className={styles.container}>
      <h1> Bem vindo manito! </h1>
      <p>Este é o nosso site de teste</p>
    </div>
  )
}

export default Home;
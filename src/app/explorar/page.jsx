import React from 'react'
import LinksAccount from '../components/Links/LinksAccount'
import RifaCard from '../components/RifaCard/RifaCard'
import styles from './explore.module.css'

const page = () => {
  const rifas = [1, 2, 3, 4, 5]

  return (
    <main className={styles.main}>
      <h1>Explorar</h1>
      <div className={styles.searchSection}>
        <input placeholder='Buscar una rifa' />
        <button>Buscar</button>
      </div>
      <section className={styles.rifasSection}>
        <h2>Rifas destacadas</h2>
        <div className={styles.rifasContainer}>
          {rifas.map((rifa) => <RifaCard key={rifa} />)}
        </div>
      </section>
      <h3 className={styles.titleCrear}>Puedes crear tus rifas</h3>
      <LinksAccount />
    </main>
  )
}

export default page

import Image from 'next/image'
import React from 'react'
import image from './image-card.jpg'
import styles from './RifaCard.module.css'
import { HiTicket } from 'react-icons/hi'

const RifaCard = () => {
  return (
    <article className={styles.card}>
      <Image width={300} height={100} alt='image-rifa' src={image} />
      <div className={styles.cardDetails}>
        <h5>Rifa caballo</h5>
        <p className={styles.cardAwards}>Premios:</p>
        <ol>
          <li>Caballo tobiano</li>
          <li>Montura rígida</li>
        </ol>
        <div className={styles.cardInfoTicket}>
          <p className={styles.cardTicketsLeft}>¡Quedan: 70 números!</p>
          <p className={styles.cardRifaPrice}><HiTicket />$500</p>
        </div>
      </div>
    </article>
  )
}

export default RifaCard

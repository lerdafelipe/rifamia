import Image from 'next/image'
import React from 'react'
import image from './image-card.jpg'
import styles from './RifaCard.module.css'
import { TicketIcon } from '@/svg/icons'
import Link from 'next/link'

const RifaCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image alt='image-rifa' src={image} />
      </div>
      <div className={styles.cardDetails}>
        <h5>Rifa caballo</h5>
        <p className={styles.cardAwards}>Premios:</p>
        <ol>
          <li>Caballo tobiano</li>
          <li>Montura rígida</li>
        </ol>
        <div className={styles.cardInfoTicket}>
          <p className={styles.cardTicketsLeft}>¡Quedan: 70 números!</p>
          <p className={styles.cardRifaPrice}><TicketIcon />$500</p>
        </div>
        <div className={styles.goToMyRifaContainer}>
          <Link className={styles.goToMyRifa} href='#'>Editar rifa</Link>
        </div>
      </div>
    </article>
  )
}

export default RifaCard

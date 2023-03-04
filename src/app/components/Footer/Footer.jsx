import Link from 'next/link'
import { WppIcon, IgIcon, MailIcon } from '@/svg/icons'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Link className={styles.footerPolitics} href='/'>Politicas de privacidad.</Link>
      <footer className={styles.footer}>
        <div className={styles.footerEffect}>
          <span />
        </div>
        <div className={styles.footerContainersFlex}>
          <div className={styles.div33}>
            <Link className={styles.copyright} href='/'>© Rifamia</Link>
          </div>
          <div className={styles.div33}>
            <Link className={styles.privacy} href='/'>Politicas de cookies y privacidad</Link>
            <Link className={styles.terms} href='/'>Términos y condiciones</Link>
          </div>
          <div className={styles.div33}>
            <Link href='/'><WppIcon /></Link>
            <Link href='/'><IgIcon /></Link>
            <Link href='/'><MailIcon /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

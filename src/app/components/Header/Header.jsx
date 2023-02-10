import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <Link href='/'>
            <Image priority width={500} height={350} alt='logo' src='/rifamia-real.png' className={styles.icon} />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link className={styles.navItem} href='/explorar'>Explorar</Link>
          <Link className={styles.navItem} href='/login'>Ingresar</Link>
        </nav>

      </header>
    </div>
  )
}

export default Header

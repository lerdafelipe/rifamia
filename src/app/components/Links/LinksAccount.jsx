import Link from 'next/link'
import styles from './Links.module.css'

const LinksAccount = () => {
  return (
    <div className={styles.buttonSection}>
      <Link href='/registro'>Crear cuenta</Link>
      <Link href='/login'>Ingresar a mi cuenta</Link>
    </div>
  )
}

export default LinksAccount

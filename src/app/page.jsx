import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <h1>Sorteos fáciles, rápidos y transparentes</h1>
      <h4>Rifamia es una plataforma en la que podés armar tu rifa de una manera más estética, más cómoda, con resultados transparentes, integradas a un plataforma de pagos muy popular y confiable.</h4>
      <div className={styles.buttonSection}>
        <Link href='/registro'>Crear cuenta</Link>
        <Link href='/login'>Ingresar a mi cuenta</Link>
      </div>
      <section className={styles.howCreateContainer}>
        <h3>¿Cómo Funciona Rifamia?</h3>
        <div className={styles.howWork}>
          <div className={styles.div50}>
            <Image width={401} height={367} alt='ilustración rifamia svg' src='/rifamia-home.svg' />
          </div>
          <article className={styles.div50}>
            <div>
              <h5>Crea cuenta</h5>
              <p>Creas tu cuenta, rellenas tus datos personales para posibles contactos y finalmente podrás crear tus rifas personalizadas.</p>
            </div>
            <div>
              <h5>Verificar cuenta</h5>
              <p>Nos envías una solicitud de verificación, analizaremos tus datos para verificar tu cuenta y que tus rifas sean más confiables.</p>
            </div>
            <div>
              <h5>Empezá a crear tus rifas</h5>
              <p>Creas y configuras tus rifas de la manera que quieras, podes limitar la cantidad de números, precio del número, nombre de la rifa, premios, descripción, y muchas cosas más.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

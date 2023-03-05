import { FbIcon, IgIcon, MailIcon, PhoneIcon, TwIcon, WebIcon } from '@/svg/icons'
import React from 'react'
import Banner from '../components/Banner/Banner'
import RifaCard from '../components/RifaCard/RifaCard'
import Styles from './user.module.css'

const page = () => {
  const rifas = [1, 2, 3]
  return (
    <main className={Styles.main}>
      <section>
        <Banner />
        <aside className={Styles.infoUser}>
          <h1>Rifa Caballo Tobiano</h1>
          <div className={Styles.socialContainer}>
            <TwIcon />
            <IgIcon />
            <FbIcon />
            <WebIcon />
          </div>
          <div className={Styles.socialFormalContainer}>
            <p><MailIcon /> lerdafelipe@gmail.com</p>
            <p><PhoneIcon /> +54 3534 279005</p>
          </div>
        </aside>
        <aside className={Styles.misRifasContainer}>
          <h2>Mis rifas</h2>
          <div className={Styles.rifasContainer}>
            {rifas.map((rifa) => <RifaCard key={rifa} />)}
          </div>
          <div className={Styles.createRifa}>
            <button>Crear rifa nueva</button>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default page

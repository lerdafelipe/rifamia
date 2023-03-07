import { FbIcon, IgIcon, MailIcon, PhoneIcon, TwIcon, WebIcon } from '@/svg/icons'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Styles from './rifa.module.css'
import portada from '../user/portadaProfile.png'
import ContentRifa from '../components/ContentRifa/ContentRifa'
import ContentRifaEnded from '../components/ContentRifaEnded/ContentRifaEnded'
import LinksAccount from '../components/Links/LinksAccount'

const page = () => {
  const rifaEnd = true
  return (
    <main className={Styles.main}>
      <section>
        <Banner img={portada} />
        <aside className={Styles.infoUser}>
          <h1>Rifa Caballo Tobiano</h1>
          <p><span>17/03/2023</span></p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, soluta? Amet quasi inventore iste hic ducimus labore? Quos enim quidem obcaecati reprehenderit temporibus! Dolore eius quos saepe quis magnam illum.</p>
        </aside>
        <aside className={Styles.misRifasContainer}>
          {rifaEnd ? <ContentRifa /> : <ContentRifaEnded />}
          <div className={Styles.socialContainer}>
            <TwIcon />
            <IgIcon />
            <FbIcon />
            <WebIcon />
            <MailIcon />
            <PhoneIcon />
          </div>
        </aside>
        <aside className={Styles.rifaDescriptionCont}>
          <h2>Descripción</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas nihil ipsam, soluta ex repudiandae, asperiores natus qui nemo exercitationem est quos possimus tempore earum doloremque distinctio nulla tempora debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto commodi asperiores impedit necessitatibus, facere obcaecati maxime similique sunt modi quos quis tempora cumque sint ab odio. Natus, quos rem!</p>
        </aside>
      </section>
      <h3 className={Styles.titleCrear}>Puedes crear tus rifas</h3>
      <LinksAccount />
    </main>
  )
}

export default page

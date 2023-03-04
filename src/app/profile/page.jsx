import { DniIcon, FbIcon, IgIcon, LocationIcon, PhoneIcon, TwIcon, UserIcon, WebIcon } from '@/svg/icons'
import React from 'react'
import Styles from './Profile.module.css'

const page = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.profileSection}>
        <h1>Información personal</h1>
        <h5>Los campos marcados con un asterisco son obligatorios e inmutables</h5>
        <aside>
          <form>
            <div className={Styles.inputsContainer}>
              <label htmlFor='name'><UserIcon /></label>
              <input id='name' type='text' placeholder='Nombre*' />
            </div>
            <div className={Styles.inputsContainer}>
              <label htmlFor='lastname'><UserIcon /></label>
              <input id='lastname' type='text' placeholder='Apellido*' />
            </div>
            <div className={Styles.inputsContainer}>
              <label htmlFor='adress'><LocationIcon /></label>
              <input id='adress' type='text' placeholder='Dirección*' />
            </div>
            <div className={Styles.inputsContainer}>
              <label htmlFor='phone'><PhoneIcon /></label>
              <input id='phone' type='phone' placeholder='Teléfono*' />
            </div>

            <div className={Styles.divs50}>
              <div className={Styles.inputsContainer}>
                <label htmlFor='idtype'><DniIcon /></label>
                <input id='idtype' type='text' placeholder='Tipo de documento*' />
              </div>
              <div className={Styles.inputsContainer}>
                <label htmlFor='idnumber'><DniIcon /></label>
                <input id='idnumber' type='text' placeholder='N° de documento*' />
              </div>
            </div>

            <div className={Styles.inputsContainer}>
              <label htmlFor='instagram'><IgIcon /></label>
              <input id='instagram' type='text' placeholder='Instagram URL' />
            </div>
            <div className={Styles.inputsContainer}>
              <label htmlFor='twitter'><TwIcon /></label>
              <input id='twitter' type='text' placeholder='Twitter URL' />
            </div>
            <div className={Styles.inputsContainer}>
              <label htmlFor='facebook'><FbIcon /></label>
              <input id='facebook' type='text' placeholder='Facebook URL' />
            </div>
            <div className={Styles.inputsContainer}>
              <label htmlFor='website'><WebIcon /></label>
              <input id='website' type='text' placeholder='Sitio Web URL' />
            </div>

            <button>Guardar datos</button>
          </form>
        </aside>
      </section>
    </main>
  )
}

export default page

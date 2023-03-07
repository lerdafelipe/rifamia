import React from 'react'
import { MailIcon, PhoneIcon, TicketForIcon, UserIcon } from '@/svg/icons'
import Image from 'next/image'
import Styles from './Form.module.css'

const Form = () => {
  return (
    <form className={Styles.formTickets}>
      <div className={Styles.inputsContainer}>
        <label htmlFor='name'><UserIcon /></label>
        <input id='name' placeholder='Nombre completo' />
      </div>
      <div className={Styles.inputsContainer}>
        <label htmlFor='phone'><PhoneIcon /></label>
        <input id='phone' type='tel' placeholder='Teléfono' />
      </div>
      <div className={Styles.inputsContainer}>
        <label htmlFor='email'><MailIcon /></label>
        <input id='email' type='email' placeholder='tuemail@mail.com' />
      </div>
      <div className={Styles.inputsContainer}>
        <label htmlFor='tickets'><TicketForIcon /></label>
        <select id='tickets'>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className={Styles.NumbersToBuy}>
        <span className={Styles.separator} />
        <span>Comprar 5 números ($2500)</span>
        <span className={Styles.separator} />
      </div>
      <button className={Styles.mpButton}>
        <Image width={688} height={179} src='/mp.jpg' alt='mercadopago img' />
      </button>
      <p className={Styles.mpInfo}>*Mercadopago solo procesa pagos en Argentina.</p>
    </form>
  )
}

export default Form

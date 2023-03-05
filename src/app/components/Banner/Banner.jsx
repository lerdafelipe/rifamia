import React from 'react'
import Styles from './Banner.module.css'

const Banner = () => {
  return (
    <aside className={Styles.bannerContainer}>
      <img alt='Imagen banner rifa' src='https://www.horse1.es/images/Caballo-en-forma.jpg' />
    </aside>
  )
}

export default Banner

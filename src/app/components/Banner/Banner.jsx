import Image from 'next/image'
import React from 'react'
import Styles from './Banner.module.css'

const Banner = ({ img }) => {
  return (
    <aside className={Styles.bannerContainer}>
      <Image width='1450' height='366' alt='Imagen banner rifa' src={img || '/portadaProfile.png'} />
    </aside>
  )
}

export default Banner

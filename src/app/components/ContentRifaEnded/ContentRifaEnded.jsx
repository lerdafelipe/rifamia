import { UserIcon } from '@/svg/icons'
import Link from 'next/link'
import React from 'react'
import Styles from './ContentRifaEnded.module.css'

const ContentRifaEnded = () => {
  return (
    <div className={Styles.rifaEndedContainer}>
      <div>
        <h1>Participantes</h1>
        <span>[Terminada]</span>
      </div>
      <aside>
        <p>3527 Números vendidos</p>
      </aside>
      <h2>Ganadores</h2>
      <aside className={Styles.tableWinners}>
        <table>
          <thead>
            <tr>
              <th>Premios</th>
              <th>Ganadores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Caballo Tobiano</td>
              <td>Rodrigo Eder</td>
            </tr>
            <tr>
              <td>Montura de caballo grande</td>
              <td>Gastón Lerda</td>
            </tr>
          </tbody>
        </table>
      </aside>
      <p className={Styles.linkToUser}>
        <Link href='/user'>
          <UserIcon />
          Felipe Lerda
        </Link>
      </p>
    </div>
  )
}

export default ContentRifaEnded

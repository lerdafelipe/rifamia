import { TicketForIcon } from '@/svg/icons'
import React from 'react'
import Styles from './ContentRifa.module.css'

const ContentRifa = () => {
  return (
    <div className={Styles.mainContent}>
      <aside>
        <h3>Datos de la rifa</h3>
        <table>
          <tbody>
            <tr>
              <td>Premios</td>
              <td>
                <ol>
                  <li>Caballo Tobiano</li>
                  <li>Montura de cuero</li>
                  <li>Fusta trenzada de novillo las darlsers laskrsdd</li>
                  <li>Cordero</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>Números disponibles</td>
              <td>3500</td>
            </tr>
            <tr>
              <td>Números vendidos</td>
              <td>2350</td>
            </tr>
            <tr>
              <td><TicketForIcon /><TicketForIcon /> Precio</td>
              <td>$225</td>
            </tr>
          </tbody>
        </table>
      </aside>
      <aside>
        <h3>Comprá tu número</h3>
      </aside>
    </div>
  )
}

export default ContentRifa

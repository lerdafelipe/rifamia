import React from 'react'
import { TicketForIcon } from '@/svg/icons'
import Styles from './Table.module.css'

const TableRifa = () => {
  return (
    <table className={Styles.tableInfo}>
      <tbody>
        <tr>
          <td>Premios</td>
          <td>
            <ol>
              <li>Caballo Tobiano</li>
              <li>Montura de cuero</li>
              <li>Fusta trenzada de novillo</li>
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
  )
}

export default TableRifa

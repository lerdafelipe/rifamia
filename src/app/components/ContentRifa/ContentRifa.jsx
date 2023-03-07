import { UserIcon } from '@/svg/icons'
import Link from 'next/link'
import React from 'react'
import Styles from './ContentRifa.module.css'
import Form from './Form/Form'
import TableRifa from './Table/TableRifa'

const ContentRifa = () => {
  return (
    <div className={Styles.mainContent}>
      <aside>
        <h3>Datos de la rifa</h3>
        <TableRifa />
        <p className={Styles.linkToUser}><Link href='/user'><UserIcon /> Felipe Lerda</Link></p>
      </aside>
      <aside>
        <h3>Comprá tu número</h3>
        <Form />
      </aside>
    </div>
  )
}

export default ContentRifa

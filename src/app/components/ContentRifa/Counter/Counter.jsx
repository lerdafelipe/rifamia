import React from 'react'
import Styles from './Counter.module.css'

const Counter = () => {
  return (
    <div className={Styles.counterContainer}>
      <div>
        <span>
          <h4>6</h4>
          <strong>Dias</strong>
        </span>
        <span>
          <h4>14</h4>
          <strong>Horas</strong>
        </span>
        <span>
          <h4>37</h4>
          <strong>Minutos</strong>
        </span>
        <span>
          <h4>52</h4>
          <strong>Segundos</strong>
        </span>
      </div>
    </div>
  )
}

export default Counter

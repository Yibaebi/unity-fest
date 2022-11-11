import React from 'react'
import Flash from 'react-reveal/Flash'
import { ButtonHighlight, RightArrow } from '../../assets'
import styles from './styles.module.css'

const Button = ({ label = 'Button', type, customClassName = '', hideHighlight = false, borderColor = '', forever }) => {
  return (
    <button type={type} className={`${styles.button} ${customClassName} ${styles[borderColor] ?? ''}`}>
      {label} <RightArrow className={styles.right_arrow} />
      {!hideHighlight && (
        <Flash forever>
          <ButtonHighlight className={styles.button_highlight} />
        </Flash>
      )}
    </button>
  )
}

export { Button }

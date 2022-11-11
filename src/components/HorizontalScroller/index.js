import React from 'react'
import styles from './styles.module.css'

const HorizontalScroller = ({ text = '', secText = '', customContainerClassName = '', reverse = false }) => {
  return (
    <div className={`${styles['marquee']} ${customContainerClassName} ${reverse ? styles.reverse : ""}`}>
      <p>
        <span>
          {text} {secText}
        </span>
        <span>
          {text} {secText}
        </span>
        <span>
          {text} {secText}
        </span>
        <span>
          {text} {secText}
        </span>
      </p>
    </div>
  )
}

export { HorizontalScroller }

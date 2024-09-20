import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
const Input = ({label , imgPath , placeholder , alt}) => {
  return (
    <div className={styles.inp}>
              <label htmlFor={label} className={styles.hiddenLabel}>{label}</label>
              <input id={label} type="text" placeholder={placeholder} />
              <Image
                src={imgPath}
                width={24}
                height={24}
                alt={alt}
              />
            </div>
  )
}

export default Input

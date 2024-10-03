import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
const Input = ({label , style, imgPath , placeholder , alt}) => {
  console.log(style);
  
  return (
  <div className={styles.inpContainer}>
              <label htmlFor={label} className={styles.hiddenLabel}>{label}</label>
    <div className={styles.inp} style={style}>
              <input  id={label} type="text" placeholder={placeholder} />
            {
              imgPath && (
                <Image
                src={imgPath}
                width={24}
                height={24}
                alt={alt}
              />
              )
            }
            </div>
  </div>
  )
}

export default Input

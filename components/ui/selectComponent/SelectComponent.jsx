"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const SelectComponent = ({display='hidden', options, label,selectedOption, setSelectedOption, head, style , imgPath = '/assets/icons/form/drop.png' ,w=5 , h=10}) => {

  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      {label && <label style={{display}}  className={styles.label}>{label}</label>}
      <div className={styles.heading} onClick={() => setOpen(!open)} style={style} >
        <h3  >{selectedOption || head}</h3>
        <Image src={imgPath} width={w} height={h} alt='drop icon' />
      </div>
      {
        open && (
          <ul className={styles.options} style={style}>

            {options.map((option) => (
              <li key={option.value} onClick={() => { setSelectedOption(option.value), setOpen(!open) }}>{option.value}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default SelectComponent;

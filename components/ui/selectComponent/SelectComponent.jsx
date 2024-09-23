"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const SelectComponent = ({ options  , selectedOption , setSelectedOption , head}) => {
    const [open , setOpen] = useState(false)
  return (
    <div className={styles.container}>
     
      <div className={styles.heading} onClick={() => setOpen(!open)}>
      <h3  >{selectedOption || head}</h3>
      <Image src={"/assets/icons/form/drop.png"} width={5} height={10} alt='drop icon'/>
      </div>
     {
        open && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li key={option.value} onClick={()=>{setSelectedOption(option.value),setOpen(!open)}}>{option.value}</li>
            ))}
          </ul>
        )
     }
    </div>
  )
}

export default SelectComponent;

import React from 'react'
import styles from "@/components/about/About.module.css"
import Image from 'next/image'
const CardContent = ({title , desc , year}) => {    
  return (
    <div className={styles.rightcontent}>
            <div className={styles.heading}>
            <h3>
              {year}
            </h3>
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
  )
}

export default CardContent

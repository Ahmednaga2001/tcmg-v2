import React from 'react'
import styles from "@/components/about/About.module.css"
import Image from 'next/image'

const CardImg = ({path}) => {
  return (
    <div className={styles.leftcontent}>
    <Image  src={path} width={469} height={287}  className={styles.img}  alt='the image for city'/>
    </div>
  )
}

export default CardImg

import React from 'react'
import styles from "@/components/about/About.module.css"
import Image from 'next/image'
const VisionImg = ({imgStyle , path}) => {    
  return (
    <Image src={path} width={300} height={300} className={styles[imgStyle]} alt='the image for vision section'/>

  )
}

export default VisionImg

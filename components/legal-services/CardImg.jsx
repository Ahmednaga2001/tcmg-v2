import React from 'react'
import styles from "@/components/legal-services/legalservices.module.css"
import Image from 'next/image'
const CardImg = ({imgStyle , path , title}) => {      
  return (
    <Image src={path} width={300} height={300} className={styles[imgStyle]} alt={title}/>

  )
}

export default CardImg

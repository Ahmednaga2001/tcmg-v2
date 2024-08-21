import styles from "@/components/legal-services/legalservices.module.css"
import Image from 'next/image'
const CardImg = ({imgStyle , path , title}) => {      
  return (
    <Image src={path} width={280} height={280} className={styles[imgStyle]} alt={path}/>

  )
}

export default CardImg

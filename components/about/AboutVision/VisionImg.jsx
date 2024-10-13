import styles from "@/components/about/AboutVision/page.module.css";
import Image from 'next/image'
const VisionImg = ({imgStyle , path}) => {  
    
  return (
    <Image src={path} width={280} height={280} className={styles[imgStyle]} alt='the image for vision section'/>

  )
}

export default VisionImg

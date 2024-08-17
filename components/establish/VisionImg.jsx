import styles from "@/components/establish/establish.module.css"
import Image from 'next/image'
const VisionImg = ({imgStyle , path,title}) => {    
  console.log(title + "ah");
  
  return (
    <Image src={path} width={275} height={280} className={styles[imgStyle]} alt={title}/>

  )
}

export default VisionImg

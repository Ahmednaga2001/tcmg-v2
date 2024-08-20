import styles from "@/components/about/About.module.css"
import Image from 'next/image'

const CardImg = ({path}) => {
  return (
    <div className={styles.leftcontent}>
    <Image  src={path} width={468.98} height={287}  className={styles.img}  alt={path}/>
    </div>
  )
}

export default CardImg

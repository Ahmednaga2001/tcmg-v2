import Image from 'next/image'
import styles from "./branches.module.css"
const CardImg = ({w,h,path,classStyle,alt}) => {    
  return (
    <div className={styles[classStyle]}>
    <div className={styles.overlay}></div>
    <Image
      src={path}
      width={w}
      height={h}
      alt={alt}
    />
  </div>
  )
}

export default CardImg

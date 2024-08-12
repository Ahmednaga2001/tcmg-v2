import Image from 'next/image'
import styles from "@/components/branches/CardImg"
const CardImg = ({w,h,path,classStyle,alt}) => {
    console.log(w,h,path);
    
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

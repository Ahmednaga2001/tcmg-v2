import styles from "@/components/hire-attorny/hireattorny.module.css"
import Image from "next/image"
const HireCard = ({title , desc , path}) => {
  return (
    <div className={styles.card}>
    <div className={styles.topCard}>
      <Image src={path} width={300} height={310}/>
      <span>{title}</span>
    </div>
    <p>
      {desc}
    </p>
  </div>
  )
}

export default HireCard

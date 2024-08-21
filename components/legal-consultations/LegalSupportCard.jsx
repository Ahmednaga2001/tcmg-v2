import styles from "@/components/legal-consultations/legalconsultations.module.css"
import Image from "next/image"
const LegalSupportCard = ({title , path , w , h}) => {
  return (
    <div className={styles.card}>
    <div className={styles.topCard}>
        <Image src = {path} width={w} height={h} alt={path}/>
    </div>
    <span>{title}</span>

</div>
  )
}

export default LegalSupportCard

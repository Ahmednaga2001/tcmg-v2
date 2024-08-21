import styles from "@/components/legal-services/legalservices.module.css"
const OfferingCard = ({id , title , desc}) => {
  return (
    <div className={styles.card}>
    <div className={styles.topCard}>
        <span>{id}</span>
        <h3>{title}</h3>
    </div>
    <p>{desc}</p>

</div>
  )
}

export default OfferingCard

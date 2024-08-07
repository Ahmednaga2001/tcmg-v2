import styles from "@/components/legal-services/legalservices.module.css";
import Image from "next/image";
const SuceessFactorCard = ({ title, desc, path }) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <div className={styles.topOverlay}>
          <Image src={path} width={30} height={30} alt={title} />
          <h3>{title}</h3>
        </div>
        <p>{desc}</p>
      </div>
      <div className={styles.topCard}>
        <Image src={path} width={60} height={60} alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SuceessFactorCard;

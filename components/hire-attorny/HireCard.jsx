import styles from "@/components/hire-attorny/hireattorny.module.css";
import Image from "next/image";
const HireCard = ({ title, desc, path }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topCard}>
        <div className={styles.overlay}></div>
        <div className={styles.topCardImg}>
          <Image src={path} width={303} height={319} alt={path} />
          <span>{title}</span>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default HireCard;

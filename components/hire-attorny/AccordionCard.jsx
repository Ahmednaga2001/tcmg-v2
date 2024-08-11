import styles from "@/components/hire-attorny/hireattorny.module.css"
import Image from "next/image";
import { useState } from "react";

const AccordionCard = ({title , desc}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleIsOpen = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className={styles.accordionQues}>
    <div className={styles.accordionQuesHeader} onClick={handleIsOpen}>
      <h3>{title}</h3>
      <Image
        src="/assets/icons/legalservices/buttonDropdown.png"
        width={30}
        height={30}
        alt="Toggle"
      />
    </div>
    <div
      className={`${styles.accordionQuesContent} ${
        isOpen ? styles.open : ""
      }`}
    >
      <p>{desc}</p>
    </div>
  </div>
  )
}

export default AccordionCard

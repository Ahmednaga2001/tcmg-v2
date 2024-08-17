"use client";
import styles from "@/components/establish/establish.module.css";
import Image from "next/image";
import { useState } from "react";

const LegalServiceAccordion = ({ title, path, desc }) => {  
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
      <div className={styles.accordionItem}>
        <div className={styles.accordionItemHeader} onClick={handleIsOpenOne}>
            <Image
              src={path}
              width={80}
              height={97}
              alt={title}
              className={styles.accordionItemIcon}
            />
            <span>{title}</span>
        </div>
        <div
          className={`${styles.accordionContent} ${
            isOpenOne ? styles.open : ""
          }`}
        >
          <p>{desc}</p>
        </div>
      </div>

  );
};

export default LegalServiceAccordion;

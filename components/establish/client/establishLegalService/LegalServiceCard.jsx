"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
const LegalServiceCard = ({ title, path, desc }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionItemHeader} onClick={handleIsOpenOne}>
          <Image
            src={path}
            width={80}
            height={96}
            alt={path}
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
    </div>
  );
};

export default LegalServiceCard;
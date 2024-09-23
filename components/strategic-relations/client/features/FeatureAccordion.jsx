"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css"
const FeatureAccordion = ({ title, path, desc }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionItemHeader}>
          <div>
            <Image
              src={path}
              width={90}
              height={90}
              alt={title}
              className={styles.accordionItemIcon}
            />
            <span>{title}</span>
          </div>
          <Image
            src="/assets/icons/strategicrelations/ep_arrow-down-bold.png"
            alt="arrow-down"
            width={24}
            height={24}
            className={`${styles.accordionArrowIcon} ${
              isOpenOne ? "" : ""
            }`}
            onClick={handleIsOpenOne}
          />
        </div>
        <div
          className={`${styles.accordionContent} ${
            isOpenOne ? styles.open : ""
          }`}
        >
          <p>{desc}</p>
          <Image
            src="/assets/icons/strategicrelations/arrow-down.png"
            width={24}
            height={24}
            onClick={handleIsOpenOne}
            alt="bottomIcon"
            className={styles.bottomIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureAccordion;

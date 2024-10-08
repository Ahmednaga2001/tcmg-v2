"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css"
const WhyChooseAccordion = ({ title, path, desc }) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const handleIsOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionItemHeader} onClick={handleIsOpenOne}
        >
          <div>
            <Image
              src={path}
              width={40}
              height={40}
              alt={title}
              className={styles.accordionItemIcon}
            />
            <span>{title}</span>
          </div>
          <Image
            src="/assets/icons/hireattorny/doublalarroweleft.png"
            alt="doublalarroweleft"
            width={24}
            height={24}
            className={`${styles.accordionArrowIcon} ${isOpenOne ? styles.hide : ""
              }`}
          />
        </div>
        <div
          className={`${styles.accordionContent} ${isOpenOne ? styles.open : ""
            }`}
        >
          <p>{desc}</p>
          <Image
            src="/assets/icons/hireattorny/arrowtop.png"
            width={10}
            height={14}
            onClick={handleIsOpenOne}
            alt="bottomIcon"
            className={styles.bottomIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAccordion;

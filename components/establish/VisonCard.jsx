import React from "react";
import styles from "@/components/establish/establish.module.css"
const VisonCard = ({visionContentstyle , title , desc}) => {  
  return (
    <div className={styles[visionContentstyle]}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default VisonCard;

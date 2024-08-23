"use client";
import styles from "@/components/hiring/hiring.module.css";
import AccordionCard from "./AccordionCard";

const data = [
  {
    title : "وظائف محامين متاحة في المجموعة التجارية والبحرية للمحاماة",
    desc : "",
  }
  {
    title : "مطلوب محامين خريجين حقوق عربي وإنجليزي",
    desc : ""
  }
]

const Accordion = () => {
  return (
    <section className={styles.accordionQuestions}>
      <h2>نظرة حول وظائف خالية للمحامين في TCMG</h2>
      {data.map((el,index) => (
        <AccordionCard title={el.title} desc={el.desc} key={index} />
      ))}
    </section>
  );
};

export default Accordion;

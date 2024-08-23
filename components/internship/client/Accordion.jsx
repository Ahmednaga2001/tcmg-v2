"use client";
import styles from "@/components/internship/internship.module.css";
import AccordionCard from "./AccordionCard";

const data = [
  {
    title : "ما هي برامج التدريب المتاحة في TCMG للمحامين الجدد؟",
    desc : ""
  },
  {
    title : "كيف يمكنني التقديم لبرنامج التدريب في TCMG؟",
    desc : ""
  },
  {
    title : "ما هي المجالات القانونية التي يغطيها برنامج التدريب في TCMG؟",
    desc : ""
  },
  {
    title : "هل يتضمن برنامج التدريب في TCMG فرص عمل عملية؟",
    desc : ""
  },
  {
    title : "ما هي المهارات والخبرات المطلوبة للالتحاق ببرنامج التدريب في TCMG؟",
    desc : ""
  },
  {
    title : "هل هناك أي تكاليف مرتبطة ببرنامج التدريب في TCMG؟",
    desc : ""
  }
]

const Accordion = () => {
  return (
    <section className={styles.accordionQuestions}>
      <h2>نظرة حول تدريب المحاماه الخاص ب TCMG</h2>
      {data.map((el,index) => (
        <AccordionCard title={el.title} desc={el.desc} key={index} />
      ))}
    </section>
  );
};

export default Accordion;

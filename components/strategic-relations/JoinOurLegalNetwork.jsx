import styles from "@/components/strategic-relations/strategicrelations.module.css";
import Image from "next/image";
const JoinOurLegalNetwork = () => {
  return (
    <section className={styles.legalNetwork}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/strategicrelations/Mask group.png"
          className={styles.img}
          width={424}
          height={450}
          alt="Mask group image"
        />
      </div>
      <div className={styles.content}>
       <h2>انضم إلي شبكتنا القانونية </h2>
       <p>تسعى مكاتب TCMG للمحاماة بجدية وطموح لبناء شراكات استراتيجية قوية مع مكاتب المحاماة الأخرى. فنحن نؤمن بأن التعاون مع مكاتب المحاماة الرائدة يمثل فرصة لتبادل المعرفة والخبرات, وتعزيز التعاون المشترك في مجال القانون. يتيح هذا التعاون لنا تقديم خدمات متميزة لعملائنا وتعزيز مسارنا المهني في سوق القانون الدولي. بناءً على روح الشراكة والاحترام المتبادل؛ فنحن نسعى جاهدين لتحقيق النجاح المشترك والتطور المستمر للجانبين.
       </p>
      
      </div>
    </section>
  );
};

export default JoinOurLegalNetwork;

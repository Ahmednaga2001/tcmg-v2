
import styles from "@/components/ask-attorny/ask-attrony.module.css";
import AskLawyer from "@/components/ask-attorny/AskLawyer";
import ConnectwithLegalExpert from "@/components/ask-attorny/ConnectwithLegalExpert";
import About from "@/components/ask-attorny/About";
import AskLawyerForm from "@/components/ask-attorny/client/AskLawyerForm";
import PopUp from "@/components/ask-attorny/client/PopUp";

function AskAttorny() {
  

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>
          بناء شراكات استراتيجية: اكتشف فرص التعاون والتواصل مع مكاتب TCMG
          للمحاماة لتحقيق النجاح المشترك
        </h1>
      </section>
      <PopUp/>

      <ConnectwithLegalExpert />
      <About />
      <AskLawyer />
      <AskLawyerForm />
    </div>
  );
}

export default AskAttorny;

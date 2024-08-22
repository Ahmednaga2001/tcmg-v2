import Challenges from "@/components/internship/Challenges";
import Experience from "@/components/internship/client/Experience";
import Offer from "@/components/internship/client/Offer";
import styles from "@/components/internship/internship.module.css"
import PathToLegalExcellence from "@/components/internship/PathToLegalExcellence";
import Links from "@/components/join-us/Links";
function Internship() {
  return <div className={styles.page}>
    <section className={styles.hero}>
        <h1>
          بناء شراكات استراتيجية: اكتشف فرص التعاون والتواصل  مع مكاتب TCMG
          للمحاماة لتحقيق النجاح المشترك
        </h1>
      </section>
      <Links/>
      <PathToLegalExcellence/>
      <Challenges/>
      <Offer/>
      <Experience/>
  </div>;
}

export default Internship;

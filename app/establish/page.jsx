import Accordion from "@/components/establish/Accordion";
import Countries from "@/components/establish/Countries";
import DreamCompany from "@/components/establish/DreamCompany";
import styles from "@/components/establish/establish.module.css";
import LegalServices from "@/components/establish/LegalServices";
import RequestLawyer from "@/components/establish/RequestLawyer";
import StartCompany from "@/components/establish/StartCompany";
import TypesofCompanies from "@/components/establish/TypesofCompanies";
import UniqueServiceFeatures from "@/components/establish/UniqueServiceFeatures";
function Establish() {
  return (
    <div className={styles.establish}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>تأسيس الشركات وريادة الأعمال في مصر بأعلى الامتيازات  </h1>
          <p>
          مع المجموعة التجارية والبحرية للمحاماة،<br/>أصبح حلم ريادة الأعمال وتأسيس شركة راسخة واقعاً.
          </p>
        </div>
      </section>
      <UniqueServiceFeatures />
      <StartCompany />
      <LegalServices />
      {/* <Countries />
      <TypesofCompanies />
      <DreamCompany />
      <RequestLawyer />
      <Accordion /> */}
    </div>
  );
}

export default Establish;

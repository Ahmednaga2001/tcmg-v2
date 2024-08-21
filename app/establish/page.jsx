import Accordion from "@/components/establish/client/Accordion";
import Countries from "@/components/establish/Countries";
import DreamCompany from "@/components/establish/client/DreamCompany";
import styles from "@/components/establish/establish.module.css";
import LegalServices from "@/components/establish/LegalServices";
import StartCompany from "@/components/establish/StartCompany";
import TypesofCompanies from "@/components/establish/client/TypesofCompanies";
import UniqueServiceFeatures from "@/components/establish/client/UniqueServiceFeatures";
import CompanyEstablishForm from "@/components/establish/client/CompanyEstablishForm";
import Link from "next/link";
import Image from "next/image";
export const metadata={
  title : "Establish"
}
function Establish() {
  return (
    <div className={styles.establish}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>تأسيس الشركات وريادة الأعمال في مصر بأعلى الامتيازات  </h1>
          <p>
          مع المجموعة التجارية والبحرية للمحاماة،<br/>أصبح حلم ريادة الأعمال وتأسيس شركة راسخة واقعاً.
          </p>
          <Link href="#">
          تعرف على المزيد
          <Image src="/assets/icons/establish/arrowleft.png" width={20} height={20} alt="arrow-left"/>
          </Link>
        </div>
      </section>
      <UniqueServiceFeatures />
      <StartCompany />
      <LegalServices />
      <Countries />
      <TypesofCompanies />
      <DreamCompany />
      <CompanyEstablishForm/>
      <Accordion />
    </div>
  );
}

export default Establish;

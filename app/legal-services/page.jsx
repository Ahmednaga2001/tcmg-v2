import styles from "@/components/legal-services/legalservices.module.css";
import OurOfferings from "@/components/legal-services/OurOfferings";
import SuccessFactors from "@/components/legal-services/SuccessFactors";
import Guidelines from "../../components/legal-services/BestPractice";
import Category from "@/components/legal-services/Category";
import Accordion from "@/components/legal-services/client/Accordion";
function LegalServices() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>خدمات قانونية بمعايير عالمية المستوي</h1>
          <p>
            خدمات قانونية للأفراد والمؤسسات والشركات مقدمة من أكبر مكتب محاماة
            في مصر بحبرات قانونية فاقت الـ 30 عاما ” تحت شعار مستوي جديد من
            الحلول القانونية “
          </p>
        </div>
      </section>
      <OurOfferings/>
      <SuccessFactors/>
      <Guidelines/>
      <Category/>
      <Accordion/>
    </div>
  );
}

export default LegalServices;

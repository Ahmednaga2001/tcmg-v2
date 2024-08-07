import styles from "@/components/legal-services/legalservices.module.css";
import OurOfferings from "@/components/legal-services/OurOfferings";
import SuccessFactors from "@/components/legal-services/SuccessFactors";
import Guidelines from "../../components/legal-services/BestPractice";
function LegalServices() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>خدمات قانونية بمعايير عالمية المستوي</h1>
          <p>
            خدمات قانونية للأفراد والمؤسسات والشركات مقدمة  من أكبر مكتب محاماة
            في مصر بحبرات قانونية فاقت الـ 30 عاما  ” تحت شعار مستوي جديد من
            الحلول القانونية “
          </p>
        </div>
      </section>
      <OurOfferings/>
      <SuccessFactors/>
      <Guidelines/>
    </div>
  );
}

export default LegalServices;

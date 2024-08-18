import Accordion from "@/components/legal-consultations/Accordion";
import InstantLegalAdviceforAll from "@/components/legal-consultations/InstantLegalAdviceforAll";
import LawyersTeam from "@/components/legal-consultations/LawyersTeam";
import styles from "@/components/legal-consultations/legalconsultations.module.css"
import LegalSupport from "@/components/legal-consultations/LegalSupport";
import OurCustomers from "@/components/legal-consultations/OurCustomers";
import ReserveConsultation from "@/components/legal-consultations/ReserveConsultation";
import StartCompany from "@/components/legal-consultations/StartCompany";
import WhyTrustUs from "@/components/legal-consultations/WhyTrustUs";
function LegalConsultation() {
  return <div className={styles.page}>
     <section className={styles.hero}>
        <h1>المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية بوابتك نحو عالم من الأمان والوضوح</h1>
        <div className={styles.content}>
          <p>
          في ظل التعقيدات القانونية التي سادت هذا العصر؛ يواجه الكثير من الضحايا صعوبة في استرجاع حقوقهم. فإذا كنت تتعرض لانتهاك في حقوقك, أو تواجه مشكلة في استعادها, أو حتى تبحث عن محامي استشارات قانونية يرشدك في كافة شؤونك المالية أو الأسرية أو التجارية. الآن يجب أن تتوقف عن البحث عن محامي؛ فهنا يأتي دور المجموعة التجارية والبحرية أفضل مكتب محاماة واستشارات قانونية في مصر, وأحد أفضلها في الشرق الأوسط؛ لاتخاذ خطوة جريئة نحو تطبيق القانون وتحقيق العدالة, لكافة عملائنا المتقدمين لطلب المشورة في قضاياهم, أو المساعدة في فهم أحد فروع القانون. 
          </p>
        </div>
      </section>
      <InstantLegalAdviceforAll/>
      <LegalSupport/>
      <LawyersTeam/>
      <StartCompany/>
      <ReserveConsultation/>
      <WhyTrustUs/>
      <OurCustomers/>
      <Accordion/>
  </div>;
}

export default LegalConsultation;

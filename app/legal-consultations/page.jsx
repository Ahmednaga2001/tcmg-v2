import DividerOne from "@/components/legal-consultations/consultDivider/DividerOne";
import DividerTwo from "@/components/legal-consultations/consultDivider/DividerTwo";
import styles from "./page.module.css";
import OurCustomers from "@/components/shared/customers/Customers";
import ConsultHero from "@/components/legal-consultations/consultHero/ConsultHero";
import ConsultSupport from "@/components/legal-consultations/consultSupport/ConsultSupport";
import ConsultLegalAdvice from "@/components/legal-consultations/consultLegalAdvice/ConsultLegalAdvice";
import ConsultNowEasy from "@/components/legal-consultations/consultNowEasy/ConsultNowEasy";
import ConsultReserve from "@/components/legal-consultations/client/consultReserve/ReserveConsultation";
import ConsultWhyTrust from "@/components/legal-consultations/client/consultWhyTrust/ConsultWhyTrust";
import Accordion from "@/components/legal-consultations/client/Accordion";
import ConsultStrongestLawyers from "@/components/legal-consultations/consultStrongestLawyers/ConsultStrongestLawyers";
export const metadata={
  title : "Legal Consultations"
}

const customers = [
  {
    id: 1,
    img: "/assets/images/legalconsultations/حسام نصار.png",
    name: "المهندس حسام نصار",
    category: "مهندس إماراتي خبير",
    body: "جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات",
  },
  {
    id: 2,
    img: "/assets/images/legalconsultations/هيثم الشيمي.png",
    name: "أستاذ هيثم الشيمي",
    category: "مدير ماليات",
    body: "دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم",
  },
  {
    id: 3,
    img: "/assets/images/legalconsultations/فاطمة عيسى.png",
    name: "أستاذة فاطمة عيسى",
    category: "رائدة أعمال",
    body: "خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة",
  },
  {
    id: 4,
    img: "/assets/images/legalconsultations/أحمد سليم.png",
    name: "أستاذ أحمد سليم",
    category: "مستثمر ورجل أعمال",
    body: "تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك",
  },
];
function LegalConsultation() {
  return (
    <div className={styles.consultPage}>
      <ConsultHero/>
      <ConsultSupport/>
      <ConsultStrongestLawyers/>
     <ConsultLegalAdvice/>
     <ConsultNowEasy/>
      <ConsultReserve/>
      <DividerOne />
      <ConsultWhyTrust/>
      <OurCustomers customers={customers} />
      <DividerTwo />
     <Accordion/>
    </div>
  );
}

export default LegalConsultation;

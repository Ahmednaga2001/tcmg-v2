import Accordion from "@/components/hire-attorny/Accordion";
import CorporateService from "@/components/hire-attorny/CorporateService";
import styles from "@/components/hire-attorny/hireattorny.module.css";
import IndividualServices from "@/components/hire-attorny/IndividualServices";
import LegalInstructions from "@/components/hire-attorny/LegalInstructions";
import RequestLawyer from "@/components/hire-attorny/RequestLawyer";
import WhyChoose from "@/components/hire-attorny/WhyChoose";
import Image from "next/image";

function HireAttorny() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>
            توكيل محامي ذو خبرة متراكمة ونجاح مُثبَت في جميع تخصصات القانون
          </h1>
          <p>
            هل تواجه مشكلة في حل بعض المسائل القانونية سواء الأسرية أو التجارية
            أو المالية وغيرها؟ إذًا لابد أنك تبحث عن خدمة توكيل محامي, وهنا تكون
            قد خطوة أولى خطواتك في حل جميع مشكلاتك القانونية وهي توكيل محامي
            متمرس من المجموعة التجارية والبحرية للمحاماة لخدمة . جميع الكيانات
            من الأفراد والشركات والمؤسسات, يمكنك الاستناد عليه باطمئنان لتولّي
            حل شؤونك القانونية عنك, أو الإجابة عن كافة تساؤلاتك لتحصل على فهم
            أعمق وموثوقية أكبر؛ لإيجاد أكثر الحلول فعالية وتماشيًا مع معطيات
            قضيتك؛ للفوز بها، واسترجاع حقوقك المسلوبة.
          </p>
        </div>
      </section>
      <WhyChoose />
      <IndividualServices />

      <CorporateService />
      <LegalInstructions/>
      <RequestLawyer/>
      <Accordion/>
    </div>
  );
}
export default HireAttorny;

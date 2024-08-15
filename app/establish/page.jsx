import Countries from "@/components/establish/Countries";
import DreamCompany from "@/components/establish/DreamCompany";
import styles from "@/components/establish/establish.module.css";
import LegalServices from "@/components/establish/LegalServices";
import StartCompany from "@/components/establish/StartCompany";
import TypesofCompanies from "@/components/establish/TypesofCompanies";
import UniqueServiceFeatures from "@/components/establish/UniqueServiceFeatures";
function Establish() {
  return (
    <div className={styles.establish}>
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
      <UniqueServiceFeatures/>
      <StartCompany/>
      <LegalServices/>
      <Countries/>
      <TypesofCompanies/>
      <DreamCompany/>
    </div>
  );
}

export default Establish;

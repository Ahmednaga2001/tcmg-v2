import styles from "@/components/legal-services/legalservices.module.css";
import Image from "next/image";
import SuceessFactorCard from "./SuceessFactorCard";
const data = [
  {
    title: "الاحترافية",
    desc: "تمثل الاحترافية أحد معاييرنا الأساسية، حيث نسعى جاهدين لتقديم خدمات قانونية للشركات وجميع الكيانات، بكل مهارة وعلى مستوى عالٍ من الجودة والاحترافية. نحن نلتزم بتقديم استشارات وحلول قانونية متميزة تضمن تحقيق أفضل النتائج لعملائنا.",
    path: "/assets/icons/legalservices/settingIcon.png"
  },
  {
    title : "السرعة والدقة",
    desc : "تسعى مكاتبنا بالمجموعة التجارية والبحرية للمحاماة دائمًا لتقديم الحلول القانونية ضمن إطار زمني قصير دون التقصير في جمع تفاصيل القضية بدقة ومهارة عاليتين.",
    path: "/assets/icons/legalservices/speedIcon.png"
  },
  {
    title : "سنوات الخبرة",
    desc : "ترجع كفاءِة محامينا بمكاتب المجموعة التجارية والبحرية في تقديم الخدمات القانونية إلى سنوات الخبرة بما يزيد عن 30 عامًا، من تنمية المهارات والخبرات المتراكمة.",
    path: "/assets/icons/legalservices/personsIcon.png"
  },
  {
    title : "فعالية النتائج",
    desc : "يعمل فريقنا من المحامين بجدية واجتهاد سعيًا لتحقيق احتياجات الموكلين من الخدمات القانونية والحرص التام على تقديم حلول فعالة وضمان نجاح القضية.",
    path: "/assets/icons/legalservices/notesIcon.png"
  },
]
const SuccessFactors = () => {
  return (
    <section className={styles.succeesfactors}>
      <h2>معايير نجاح مجموعة TCMG في مجال المحاماة</h2>
      <div className={styles.parent}>
       {
        data.map((el,index)=>{
          return <SuceessFactorCard title={el.title} desc={el.desc} path={el.path} key={index}/>
        })
       }

      </div>
    </section>
  );
};

export default SuccessFactors;

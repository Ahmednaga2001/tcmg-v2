import styles from "./page.module.css"
import ExperienceAccordion from "./ExperienceAccordion";
const data = [
  {
    title: "تقديم مشورة متكاملة",
    desc : "نقدم استشارات قانونية شاملة في مجالات الدمج والاستحواذ, القانون التجاري وأيضًا التقاضي, مع التركيز على دعم النمو والتوسع وحل النزاعات بكفاءة.",
    // path: "/assets/images/business/ترخيص مزاولة النشاط.png",
  },
  {
    title: "فهم عميق للأسواق",
    desc : "دينا معرفة شاملة بكلًا من الأسواق المحلية والدولية؛ لذلك يمكننا من تقديم استشارات قانونية تتماشى مع تطورات السوق ومتطلبات الأعمال.",
    // path: "/assets/images/business/ترخيص مزاولة النشاط.png",
  },
  {
    title: "دعم استراتيجي مستدام",
    desc : "نركز على بناء شَراكَات طويلة الأمد مع عملائنا من خلال تقديم دعم استراتيجي مستمر ومساعدتهم في تحقيق أهدافهم على المدى الطويل ",
    // path: "/assets/images/business/ترخيص مزاولة النشاط.png",
  },
  {
    title : "التزام بالجودة والاحترافية",
    desc : "نلتزم بتقديم خدمات رجال الاعمال أحترافية تلبي احتياجات كافة الشركات, مع التركيز على جميع التفاصيل؛ مما يعزز ثقة عملائنا ويضمن تحقيق أفضل النتائج.",
    // path: "/assets/images/business/ترخيص مزاولة النشاط.png",
  },
  {
    title : "تجربة عميقة ومتنوعة",
    desc : "نقدم خبرة قانونية واسعة ومتخصصة في التعامل مع تحديات الشركات عبر مختلف القطاعات؛ مما يتيح لنا تقديم حلول فعّالة لدعم نمو شركتك وتعزيز نجاحها في السوق.",
    // path: "/assets/images/business/ترخيص مزاولة النشاط.png",
  },
  
  {
    title: "استجابة سريعة ومرونة",
   desc : "نعمل على تقديم خدمات رجال الاعمال بسرعة ومرونة, مع تقديم استجابات سريعة وحلول قانونية تتناسب مع ظروف السوق المتغيرة.",
    // path: "/assets/images/business/ترخيص مزاولة النشاط.png",
  },
 

];
const BusinessExperience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.topContent}>
       <h2>ما يميز خدمات رجال الأعمال لدينا عن غيرنا من مكاتب المحاماة</h2>
      </div>
      <div className={styles.accordionParent}>
        {
          data.map((item, index) => {
            return (
              <ExperienceAccordion
                key={index}
                title={item.title}
                desc={item.desc}
               
              />
            )
          })
        }
      </div>
    </section>
  );
};

export default BusinessExperience;

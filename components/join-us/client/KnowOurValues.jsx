import styles from "@/components/join-us/join-us.module.css";
import WhyChooseAccordion from "./WhyChooseAccordion";
const data = [
  {
    title: "التأثير",
    desc: "في مكتبنا، نتبنى مهمة ترك بصمة إيجابية في المجتمع من خلال تقديم دعم قانوني يؤثر بشكل ملموس في حياة الأفراد. نعمل بتفاني لتعزيز العدالة والمساواة، ونسعى إلى تطوير استراتيجيات وحلول قانونية تخدم هذه الأهداف. نحن حريصون على مشاركة خبراتنا وتعزيز التعاون بين مكاتب المحاماة لتحقيق تأثير أكبر وأكثر فاعلية في المجتمع.",
    path: "/assets/icons/joinus/التأثير .png",
  },
  {
    title: "التميز",
    desc: "في TCMG، نلتزم بتحقيق التميز في كل جوانب خدماتنا القانونية, معتمدين على الابتكار والفعالية في تقديم الحلول. نؤكد على أهمية التعاون المهني لتعزيز التميز والاستثنائية في المجال القانوني. نحرص على توطيد علاقاتنا مع شركائنا القانونيين لنشر هذه القيم في كل ما نقوم به.",
    path: "/assets/icons/joinus/التميز.png",
  },
  {
    title: "الكفاءة",
    desc : "في مكتبنا، نحرص على تطبيق معايير عالية من الكفاءة والاحترافية في تقديم خدماتنا. نلتزم بدقة في تحقيق الأهداف المهنية ونصبو إلى الجودة العالية دون تنازل. نعتبر التعاون المهني ركيزة أساسية للنجاح ونسعى لتعزيز التفاهم والتقدم المشترك مع شركائنا في المجال القانوني.",
    path: "/assets/icons/joinus/الكفاءة.png",
  },
  {
    title : "التعاون",
    desc : "عندنا في TCMG, نحن نؤمن بقيمة التعاون وروح الفريق كوسائل أساسية لتحقيق النجاح. نحن نشجع على التواصل وتبادل الأفكار والتجارب بين أفراد الفريق وشركائنا؛ مما يساعدنا على إيجاد الحلول المثلى للمسائل القانونية التي نواجهها.",
    path : "/assets/icons/joinus/التعاون.png"
  }
];
const KnowOurValues = () => {
  return (
    <section className={styles.values}>
      <div className={styles.topContent}>
        <h2>تعرف على قيمنا</h2>
        <p>
          في مكتبنا, نحن نسعى جاهدين لتقديم حلول قانونية مبتكرة ومميزة ونبني
          علاقات متينة مع عملائنا بالثقة والاحترام. نحن نضع تطوير فريقنا وتوفير
          بيئة عمل مشجعة للتعلم والنمو المهني في صلب قيمنا. فإذا كنت تبحث عن
          مكتب محاماة للتدريب؛ بإمكانك الآن الانضمام إلينا, فمن القيم التي
          ستجدها راسخة عندنا
        </p>
      </div>
      <div className={styles.accordionParent}>
        <WhyChooseAccordion
          title={data[0].title}
          desc={data[0].desc}
          path={data[0].path}
        />
        <WhyChooseAccordion
          title={data[1].title}
          desc={data[1].desc}
          path={data[1].path}
        />
        <WhyChooseAccordion
          title={data[2].title}
          desc={data[2].desc}
          path={data[2].path}
        />
        <WhyChooseAccordion
          title={data[3].title}
          desc={data[3].desc}
          path={data[3].path}
        />
      </div>
    </section>
  );
};

export default KnowOurValues;

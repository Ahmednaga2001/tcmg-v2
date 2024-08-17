import styles from "@/components/establish/establish.module.css";
import Image from "next/image";
import LegalServiceAccordion from "./LegalServiceAccordion";
const data = [
  {
    title: "ترخيص مزاولة النشاط ",
    desc: `تقدم المجموعة التجارية والبحرية للمحاماة ترخيص مزاولة الأعمال لشركتك الذي يضمن استقرار وتماسك الشركة، فضلاً عن حصولك على امتيازات حصرية من أكبر مكتب لتأسيس الشركات  في مصر.
تقدم المجموعة التجارية والبحرية للمحاماة ترخيص مزاولة الأعمال لشركتك الذي يضمن استقرار وتماسك الشركة، فضلاً عن حصولك على امتيازات حصرية من أكبر مكتب لتأسيس الشركات  في مصر.`,
    path: "/assets/icons/establish/ترخيص مزاولة النشاط.png",
  },
  {
    title : "صياغة العقود",
    dec : "",
    path: "/assets/icons/establish/صياغة العقود.png",
  },
  {
    title : "تأسيس الشركات",
    desc : "",
    path: "/assets/icons/establish/تأسيس الشركات.png"
  },
  {
    title : "استشارة قانونية",
    path: "/assets/icons/establish/إستشارة قانونية.png"
  },
  {
    title : "الجمعيات العمومية",
    path: "/assets/icons/establish/الجمعيات العمومية.png"
  },
  {
    title : "تسجيل العلامات التجارية",
    path: "/assets/icons/establish/تسيل العلامة التجارية.png"
  },
  {
    title : "تقارير الضرائب",
    path: "/assets/icons/establish/تقارير الضرائب.png"
  },
  {
    title : "متابعة ما بعد التأسيس",
    path: "/assets/icons/establish/متابعة ما بعد التأسيس.png"
  }
];
const LegalServices = () => {
  return (
    <section className={styles.legalServices}>
      <div className={styles.header}>
        <h2>خدماتنا القانونية في أعمال تأسيس الشركات </h2>
        <Image src="/assets/icons/establish/crown.png" width={60} height={25} alt="crown icon" />
        <p>
          عملنا بجد لتقديم خدمات ذكية ومرنة ومعقولة التكلفة تعود بالنفع على جميع
          عملائنا الراغبون في تأسيس الشركات في مصر والإمارات. تصفح قائمة خدماتنا
          ، واتصل بنا لحجز لقاء تمهيدي مع أحد خبراء الشركات بالمجموعة التجارية
          والبحرية للمحاماة.{" "}
        </p>
      </div>
      <div className={styles.accordionParent}>
        {
          data.map((el,index)=>(
            <LegalServiceAccordion title = {el.title} desc = {el.desc} path = {el.path} key={index} />
          ))
        }
      </div>
    </section>
  );
};

export default LegalServices;

import styles from "@/components/establish/establish.module.css";
import Image from "next/image";
const data = [
  {
    title: "1- احجز استشارة قانونية",
    desc: "احصل على استشارة قانونية مع محامي شركات من المحامين الخبراء في المجموعة التجارية والبحرية للمحاماة لتحديد الشكل القانوني المناسب لشركتك.",
    path: "/assets/images/establish/Calender.png",
  },
  {
    title: "2- قم بتوكيل محامي",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Hire-lawyer-Female.png",
  },
  {
    title: "3- إنطلق في عالم الأعمال",
    desc: "الآن انتهى دورنا، وبدء مشوارك في عالم ريادة الأعمال. اطمأن كل المعاينات والإجراءات تنتهي في بضعة ايام بعدها أعلن عن نشاطك التجاري وانطلق.",
    path: "/assets/images/establish/Business-World.png",
  },
];
const StartCompany = () => {
  return (
    <section className={styles.startcompany}>
      <h2>اتبع الخطوات التالية لبدء تأسيس شركتك بنجاح</h2>
      <div className={styles.parent}>
        <div className={styles.content}>
          <h3>{data[0].title}</h3>
          <p>{data[0].desc}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.Img}>
          <Image
            src={data[0].path}
            width={300}
            height={302}
            alt="calender image"
          />
        </div>
      </div>

      <div className={styles.parent}>
        <div className={styles.Img}>
          <Image
            src={data[1].path}
            width={300}
            height={302}
            alt="Hire-lawyer-Female imaga"
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}>
          <h3>{data[1].title}</h3>
          <p>{data[1].desc}</p>
        </div>
      </div>

      <div className={styles.parent}>
        <div className={styles.content}>
          <h3>{data[2].title}</h3>
          <p>{data[2].desc}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.Img}>
          <Image
            src={data[2].path}
            width={300}
            height={302}
            alt="Business-World image"
          />
        </div>
      </div>
    </section>
  );
};

export default StartCompany;

import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";

const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/legalconsultations/محمد ابوضيف.png",
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "محامي جنائي",
    img: "/assets/images/legalconsultations/هشام محمود.png",
  },
//   {
//     id: 3,
//     name: "خلف حسين",
//     category: "محامي مدني",
//     img: "/assets/images/legalconsultations/خلف حسين.png",
//   },
  {
    id: 4,
    name: "سهى خيري",
    category: "محامية بنوك",
    img: "/assets/images/legalconsultations/سهى خيرى.png",
  },
//   {
//     id: 5,
//     name: "كرم موريس",
//     category: "محامي شركات",
//     img: "/assets/images/homePage/lawyers/كرم موريس.png",
//   },
];

const LawyersTeam = () => {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.header}>
        <h2>أقوى المحامين والمستشارين في شتى فروع القانون</h2>
        {/* <Image
          src="/assets/icons/crown.svg"
          alt="Crown"
          width={60}
          height={25}
        /> */}
      </div>
      <p>
      في المجموعة التجارية والبحرية أفضل مكتب محاماة واستشارات قانونية فورية في مصر والشرق الأوسط, يكرس فريق العمل والمحامون كل جهودهم وخبرتهم العميقة طيلة سنوات خدمتهم للحق القانوني داخل مصر وخارجها, عبر الاستجابة لجميع طلبات الاستشارة القانونية بكل شغف وإقبال لمساعدة كل طالب للمشورة, باستخدام أحدث التقنيات والحلول القانونية المناسبة لمعطيات المشكلة؛ لضمان نجاح الفضية أو بناء كيان تجاري على أساس قانوني قوي.
      </p>
      <div className={styles.cards}>
        {lawyers.map((lawyer) => (
          <div className={styles.card} key={lawyer.id}>
            <Image
              src={lawyer.img}
              alt={`Photo of ${lawyer.name}`}
              width={279}
              height={300}
            />
            <p>{lawyer.name}</p>
            <p>{lawyer.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LawyersTeam;

import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    title: "تسجيل الشركة",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "إستراتيجية الأعمال",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التخطيط المالي",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "العقود القانونية",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التوجيه الإداري",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "دعم مستمر",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التوسع والنمو",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
];
const dataTwo = [
  {
    title: "دعم من مستشار قانوني متخصص",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "خصوصية عملائنا ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التوجيه القانوني ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "البحث القانوني في موضوع القضية",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تحديد موعد الاستشارة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تقديم الاستشارة مكتوبة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "امكانية الاجتماع أون لاين",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "المتابعة القانونية بعد الاستشارة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "علاقات استراتيجية ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
];
const CompaniesServices = () => {
  return (
    <div className={styles.companiesServices}>


      <div className={styles.card}>
        <div className={styles.topData}>
          <h3>تأسيس شركات</h3>
          <span>1999</span>
          <span>
            1999<sub>EGY</sub>
          </span>
        </div>
        <div className={styles.bodyData}>
        <div className={styles.offer}>
            <span></span>
            <span>لفترة محدودة</span>
            <span></span>
        </div>
          {data.map((el, index) => (
            <span>
              <Image
                src={el.path}
                key={index}
                width={24}
                height={24}
                alt="check mark icon"
              />
              {el.title}
            </span>
          ))}
        </div>
          <Link href="#">
            تحديد
            <Image
              src="/assets/icons/legalconsultations/arrow-left.png"
              width={24}
              height={24}
              alt="arrow left icon"
            />
          </Link>
      </div>


      <div className={styles.card}>
        <div className={styles.topData}>
          <h3>أعمال شركات</h3>
          <span className={styles.info}>تواصل معنا للحجز</span>
        
        </div>
        <div className={styles.bodyData}>
        <div className={styles.offer}>
           
        </div>
          {dataTwo.map((el, index) => (
            <span>
              <Image
                src={el.path}
                key={index}
                width={24}
                height={24}
                alt="check mark icon"
              />
              {el.title}
            </span>
          ))}
        </div>
          <Link href="#">
            تحديد
            <Image
              src="/assets/icons/legalconsultations/arrow-left.png"
              width={24}
              height={24}
              alt="arrow left icon"
            />
          </Link>
      </div>
    </div>
  );
};

export default CompaniesServices;

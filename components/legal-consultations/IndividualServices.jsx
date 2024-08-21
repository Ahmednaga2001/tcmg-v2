import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "دعم من مستشار قانوني متخصص ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "خصوصية عملائنا ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التوجيه القانوني ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "البحث القانوني في موضوع القضية ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تحديد موعد الاستشارة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تقديم الاستشارة مكتوبة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
];

const dataTwo = [
  {
    title: "دعم من مستشار قانوني متخصص ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "خصوصية عملائنا ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التوجيه القانوني ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "البحث القانوني في موضوع القضية ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تحديد موعد الاستشارة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
];

const dataThree = [
  {
    title: "دعم من مستشار قانوني متخصص ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "خصوصية عملائنا ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "التوجيه القانوني ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "البحث القانوني في موضوع القضية ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تحديد موعد الاستشارة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "تقديم الاستشارة مكتوبة ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
  {
    title: "امكانية الاجتماع أون لاين ",
    path: "/assets/icons/legalconsultations/Checkmark.png",
  },
];

const IndividualServices = () => {
  return (
    <div className={styles.individualServices}>
      <div className={styles.card}>
        <div className={styles.topData}>
          <h3>استشارة واتس آب</h3>
          <span>349</span>
          <span>
            199<sub>EGY</sub>
          </span>
        </div>
        <div className={styles.bodyData}>
          <div className={styles.offer}>
            <span></span>
            <span>لفترة محدودة</span>
            <span></span>
          </div>
          {data.map((el, index) => (
            <span key={index}>
              <Image
                src={el.path}
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
          <h3>استشارة هاتفية</h3>
          <span>449</span>
          <span>
            299<sub>EGY</sub>
          </span>
        </div>
        <div className={styles.bodyData}>
          <div className={styles.offer}>
            <span></span>
            <span>لفترة محدودة</span>
            <span></span>
          </div>
          {dataTwo.map((el, index) => (
            <span key={index}>
              <Image
                src={el.path}
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
          <h3>استشارة مكتبية</h3>
          <span>999</span>
          <span>
            499<sub>EGY</sub>
          </span>
        </div>
        <div className={styles.bodyData}>
          <div className={styles.offer}>
            <span></span>
            <span>لفترة محدودة</span>
            <span></span>
          </div>
          {dataThree.map((el, index) => (
            <span key={index}>
              <Image
                src={el.path}
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

export default IndividualServices;

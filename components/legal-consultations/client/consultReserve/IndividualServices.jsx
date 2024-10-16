import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const servicesData = [
  {
    title: "استشارة واتس آب",
    priceOriginal: 349,
    priceDiscounted: 199,
    features: [
      "دعم من مستشار قانوني متخصص",
      "خصوصية عملائنا",
      "التوجيه القانوني",
      "البحث القانوني في موضوع القضية",
      "تحديد موعد الاستشارة",
      "تقديم الاستشارة مكتوبة"
    ],
  },
  {
    title: "استشارة هاتفية",
    priceOriginal: 449,
    priceDiscounted: 299,
    features: [
      "دعم من مستشار قانوني متخصص",
      "خصوصية عملائنا",
      "التوجيه القانوني",
      "البحث القانوني في موضوع القضية",
      "تحديد موعد الاستشارة",
    ],
    isPopular: true,
  },
  {
    title: "استشارة مكتبية",
    priceOriginal: 999,
    priceDiscounted: 499,
    features: [
      "دعم من مستشار قانوني متخصص",
      "خصوصية عملائنا",
      "التوجيه القانوني",
      "البحث القانوني في موضوع القضية",
      "تحديد موعد الاستشارة",
      "تقديم الاستشارة مكتوبة",
      "امكانية الاجتماع أون لاين"
    ],
  },
];

const IndividualServices = () => {
  return (
    <div className={styles.individualServices}>
     <div className={styles.container}>
     {servicesData.map((service, index) => (
        <div className={styles.card} key={index}>
          {service.isPopular && <span className={styles.popular}>الأكثر طلباً</span>}
          <div className={styles.topData}>
            <h3>{service.title}</h3>
            <span>{service.priceOriginal}</span>
            <span>
              {service.priceDiscounted}<sub>EGY</sub>
            </span>
          </div>
          <div className={styles.bodyData}>
            <div className={styles.offer}>
              <span></span>
              <span>لفترة محدودة</span>
              <span></span>
            </div>
            {service.features.map((feature, idx) => (
              <span key={idx}>
                <Image
                  src="/assets/icons/legalconsultations/Checkmark.png"
                  width={24}
                  height={24}
                  alt="check mark icon"
                />
                {feature}
              </span>
            ))}
          </div>
          <Link href="/payment">
            تحديد
            <Image
              src="/assets/icons/legalconsultations/arrow-left.png"
              width={24}
              height={24}
              alt="arrow left icon"
            />
          </Link>
        </div>
      ))}

     </div>
    </div>
  );
};

export default IndividualServices;

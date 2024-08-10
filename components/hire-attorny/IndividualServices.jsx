"use client";
import styles from "@/components/hire-attorny/hireattorny.module.css";
import HireCard from "./HireCard";
import Image from "next/image";
import { useState } from "react";
const dataOne = [
  {
    title: "تأسيس الشركات",
    desc: "نقدم خدمات متكاملة لتأسيس الشركات تشمل إعداد العقود واللوائح الداخلية, وتقديم الاستشارات القانونية لضمان الامتثال للقوانين المحلية والدولية.",
    path: "/assets/images/hireattorny/legal1.png",
  },
  {
    title: "التقاضي",
    desc: "ندافع عن حقوق الأفراد في المحاكم بفعالية وكفاءة، معتمدين على خبرتنا الواسعة لضمان تحقيق العدالة وإنصاف موكلينا.",
    path: "/assets/images/hireattorny/legal2.png",
  },
  {
    title: "الملكية الفكرية",
    desc: "نوفر حماية شاملة لحقوق الملكية الفكرية للأفراد بما في ذلك تسجيل براءات الاختراع, والعلامات التجارية وأيضًا حقوق الطبع والنشر وحل النزاعات المتعلقة بها.",
    path: "/assets/images/hireattorny/legal3.png",
  },
  {
    title: "الضرائب",
    desc: "نقدم استشارات قانونية متخصصة في مجال الضرائب لضمان اتباع عملائنا للأنظمة الضريبية المحلية والدولية, ونقدم أيضًا الحلول المناسبة للمسائل الضريبية المعقدة.",
    path: "/assets/images/hireattorny/legal4.png",
  },
];
const dataOneHidden = [
  {
    title: "التأمين",
    desc: "نقدم دعم قانوني متكامل لشركات التأمين والأفراد فيما يتعلق بعقود التأمين, تسوية النزاعات وأيضًا التعامل مع متطلبات التأمين المختلفة.",
    path: "/assets/images/hireattorny/legal5.png",
  },
  {
    title: "العقارات",
    desc: "نوفر خدمات قانونية متكاملة في مجال العقارات تشمل إعداد العقود, التفاوض, حل النزاعات العقارية وأيضًا ضمان الامتثال للتشريعات العقارية.",
    path: "/assets/images/hireattorny/legal6.png",
  },
  {
    title: "الأموال العامة",
    desc: "نقدم استشارات قانونية متخصصة في قضايا الأموال العامة, بما في ذلك التحقيقات والمرافعات القانونية لضمان حماية الأموال العامة.",
    path: "/assets/images/hireattorny/legal7.png",
  },
  {
    title: "التوظيف",
    desc: "نقدم استشارات قانونية شاملة للأفراد لحماية حقوقهم في مكان العمل، وحل النزاعات العمالية، وضمان بيئة عمل عادلة وآمنة.",
    path: "/assets/images/hireattorny/legal8.png",
  },
];
const IndividualServices = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleDisplay = () => {
    setIsHidden(!isHidden);
  };

  return (
    <section className={styles.attorneyrepresentation}>
      <h2>توكيل محامي أفراد من خبراء المجموعة للترافع في القضايا</h2>
      <p>
        عندما يتعلق الأمر بالخدمات القانونية للأفراد، يمكنك توكيل محامي من
        المجموعة التجارية والبحرية للمحاماة والحصول على مجموعة واسعة من الخدمات
        القانونية المصممة لتلبية احتياجاتك الشخصية. بفضل فريقنا من المحامين ذوي
        الخبرة الواسعة والمعرفة العميقة, سنقوم بدعمك في كافة جوانب حياتك
        القانونية؛ مما يضمن حماية حقوقك وتحقيق أهدافك الشخصية في هذا العالم
        المعقد.
      </p>
      <div className={styles.cards}>
        {dataOne.map((el, index) => (
          <HireCard
            key={index}
            title={el.title}
            desc={el.desc}
            path={el.path}
          />
        ))}
      </div>

      {!isHidden && (
        <div
          className={`${styles.cardsHidden} ${!isHidden ? styles.show : ""}`}
        >
          <div className={styles.cards}>
            {dataOneHidden.map((el, index) => (
              <HireCard
                key={index}
                title={el.title}
                desc={el.desc}
                path={el.path}
              />
            ))}
          </div>
        </div>
      )}
      <span className={styles.more} onClick={handleDisplay}>
        {isHidden ? "عرض المزيد" : "عرض أقل"}
        <Image
          src="/assets/icons/hireattorny/arrow-left.svg"
          width={30}
          height={30}
        />
      </span>
    </section>
  );
};

export default IndividualServices;

"use client";
import styles from "@/components/hire-attorny/hireattorny.module.css"
import HireCard from "./HireCard"
import Image from "next/image"
import { useState } from "react";
const dataOne = [
    {
        title : "أسواق المال",
        desc : "نقدم خدمات قانونية متخصصة لحماية مصالح شركتك في أسواق المال وتحقيق أهدافك بأعلى معايير الأمان والشفافية.",
        path: "/assets/images/hireattorny/legal9.png",
    },
    {
        title : "الإندماج والاستحواذ",
        desc : "نوفر استشارات قانونية متخصصة للمؤسسات في الاندماج والاستحواذ لضمان سير العملية بسلاسة وحماية مصالح شركتك بأعلى معايير الاحترافية.",
        path: "/assets/images/hireattorny/legal10.png",
    },
    {
        title : "التحكيم التجاري",
        desc : "نقدم خدمات التحكيم التجاري لتسوية النزاعات الخاصة بالشركات بطريقة فعّالة وسريعة, مع الحفاظ على السرية وضمان حقوق الأطراف المعنية.",
        path: "/assets/images/hireattorny/legal11.png",
    },
    {
        title : "التطوير العقاري والإنشاءات",
        desc : "نقدم دعمًا قانونيًا شاملًا لمشاريع التطوير العقاري والإنشاءات, من خلال إعداد العقود وضمان الامتثال للقوانين والتشريعات ذات الصلة.",
        path: "/assets/images/hireattorny/legal12.png",
    }
]
const dataOneHidden = [
    {
        title : "الخدمات البنكية والمالية",
        desc : "نقدم استشارات قانونية متخصصة للشركات والمؤسسات في مجالات الخدمات البنكية والمالية؛ لضمان الامتثال التنظيمي وتعزيز المعاملات المالية بأعلى معايير الشفافية.",
        path: "/assets/images/hireattorny/legal13.png"
    },
    {
        title : "الرعاية الصحية",
        desc : "نقدم خدمات قانونية للمؤسسات الصحية لضمان الامتثال للقوانين الصحية وتقديم المشورة القانونية حول قضايا الرعاية الصحية المختلفة.",
        path: "/assets/images/hireattorny/legal14.png"
    },
    {
        title : "التجزئة والمستهلك",
        desc : "ندعم الشركات العاملة في قطاع التجزئة والمستهلك بتقديم الاستشارات القانونية المتعلقة بحماية المستهلك وتنظيم العلاقات التجارية.",
        path: "/assets/images/hireattorny/legal15.png"
    },
    {
        title : "التقاضي",
        desc : "نحن نُمثل الشركات في جميع مراحل التقاضي, بدءًا من تقديم الدعوى وحتى إصدار الحكم, مع التركيز على تحقيق أفضل النتائج بأعلى كفاءة وفعالية.",
        path: "/assets/images/hireattorny/legal16.png"
    }
]
const CorporateService= () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleDisplay = () => {
    setIsHidden(!isHidden);
  };
  return (
    <section className={styles.attorneyrepresentation}>
        <h2>توكيل محامي شركات من خبراء المجموعة للترافع في القضايا</h2>
    <p>
    عندما يتعلق الأمر بالخدمات القانونية للشركات، تقدم المجموعة التجارية والبحرية للمحاماة مجموعة شاملة من الحلول المصممة خصيصًا لتلبية احتياجات الشركات. قم بتوكيل محامي من فريقنا ذوي الخبرة الواسعة والمعرفة العميق, وأحصل على دعم شامل لشركتك في كافة الجوانب القانونية؛ مما يضمان نجاحها واستمراريتها في بيئة الأعمال التنافسية هذه.
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
      <div  className={`${styles.cardsHidden} ${!isHidden ? styles.show : ''}`}>
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
  )
}

export default CorporateService

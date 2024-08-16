import React from "react";
import styles from "@/components/legal-services/legalservices.module.css";
import CardContent from "./CardContent";
import CardImg from "./CardImg";
import Link from "next/link";
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "الإندماج و الإستحواذ",
    desc: "نوفر استشارات قانونية متخصصة في عمليات الاندماج والاستحواذ, لضمان إدارة هذه العمليات بسلاسة وفعالية. نحن نساعد في التقييم القانوني للصفقات, إعداد الوثائق اللازمة وأيضًا ضمان حماية مصالح شركتك أثناء المفاوضات والتنفيذ. هدفنا هو تحقيق أهدافك التجارية بكفاءة مع تقليل المخاطر القانونية.",
    path: "/assets/images/legalservices/img1.png",
  },
  {
    id: 2,
    title: "التحكيم التجاري",
    desc: "نقدم خدمات التحكيم التجاري لحل النزاعات التجارية بكفاءة عالية. نهدف إلى تسوية القضايا بسرعة وبأسلوب غير قضائي دون اللجوء الى المحاكم؛ مما يوفر لك الوقت والتكاليف مقارنة بالإجراءات القانونية التقليدية. فريقنا من المحامين المتخصصين يضمن لك استشارات دقيقة وتمثيلًا فعالًا, مع التركيز على تحقيق نتائج عادلة تلبي مصالح جميع الأطراف.",
    path: "/assets/images/legalservices/img2.png",
  },
  {
    id: 3,
    title: "تأسيس الشركات",
    desc: "نقدم دعمًا قانونيًا متكاملًا لتأسيس الشركات, بدءًا من إعداد العقود واللوائح الداخلية إلى تقديم الاستشارات لضمان الامتثال للقوانين المحلية والدولية. نساعدك في جميع مراحل إنشاء شركتك؛ لتوفير أساس قوي وبنية قانونية متينة لضمان نجاح عملك الجديد.",
    path: "/assets/images/legalservices/img3.png",
  },
  {
    id: 4,
    title: "التقاضي",
    desc: "نقدم خدمات متكاملة للتقاضي, حيث نُمثل عملائنا في جميع مراحل القضايا القانونية. نعمل على تطوير استراتيجيات فعالة لضمان تحقيق نتائج إيجابية في المحاكم, بدءًا من تقديم الدعوى وحتى تنفيذ الأحكام. نحن ملتزمون بتقديم دعم قانوني متخصص لضمان حماية مصالحك وتحقيق العدالة بكفاءة عالية.",
    path: "/assets/images/legalservices/img4.png",
  },
];
const Category = () => {
  return (
    <section className={styles.category}>
      <h2>القطعات</h2>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryCard}>
          <CardContent
            visionContentstyle="content"
            title={data[0].title}
            desc={data[0].desc}
          />
          <CardImg
            imgStyle="imgleft"
            path={data[0].path}
            title={data[0].title}
          />
        </div>
        <div className={styles.categoryCard}>
          <CardImg
            imgStyle="imgright"
            path={data[1].path}
            title={data[1].title}
          />
          <CardContent
            visionContentstyle="contentleft"
            title={data[1].title}
            desc={data[1].desc}
          />
        </div>
        <div className={styles.categoryCard}>
          <CardContent
            visionContentstyle="content"
            title={data[2].title}
            desc={data[2].desc}
          />
          <CardImg
            imgStyle="imgleft"
            path={data[2].path}
            title={data[2].title}
          />
        </div>
        <div className={styles.categoryCard}>
          <CardImg
            imgStyle="imgright"
            path={data[3].path}
            title={data[3].title}
          />
          <CardContent
            visionContentstyle="contentleft"
            title={data[3].title}
            desc={data[3].desc}
          />
        </div>
      </div>
      <div className={styles.linkContainer}>
        <Link href="#" className={styles.linkItem}>
          تصفح القطاعات القانونية
          <Image
            src="assets/icons/legalservices/arrow-left.svg"
            alt="Navigate to full team page"
            width={30}
            height={30}
          />
        </Link>
        <Link href="#" className={styles.linkItem}>
          راسلنا عبر البريد الالكتروني
          <Image
            src="/assets/icons/legalservices/calender.png"
            alt="Calendar icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </section>
  );
};

export default Category;

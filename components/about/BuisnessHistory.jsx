import CardContent from "@/components/about/CardContent";
import LineCard from "@/components/about/LineCard";
import CardImg from "@/components/about/CardImg";
import styles from "@/components/about/About.module.css";
const cardInfo = [
  {
    year: "1986",
    title: "إطلاق مكتب المحامي محمد أبو ضيف الأول بالأسكندرية",
    desc: "في مارس من عام 1986 قام المحامي محمد أبو ضيف بتأسيس أول مكتب محاماة باتخاذ مقر له في مدينة الإسكندرية، ليكون شعار المكتب الأول توفير الحماية القانونية للموكلين",
  },
  {
    year: "1996",
    title: "إطلاق المكتب الثاني في قلب مدينة القاهرة",
    desc: "تم إفتتاح مكتبنا الثاني للمحاماة والاستشارات القانونية في مدينة القاهرة الكبري ليصبح المقر الرئيسي للمكتب في قلب المدينة وذلك لنوسع من نطاق أعمالنا في كافة المدن المصرية",
  },
  {
    year: "2005",
    title: "بناء فريق عمل متكامل من أكبر المحامين والمستشارين",
    desc: "إستقطب المكتب نخبة من أكبر محامين مصر والمتخصصين في مجالات القانون المختلفة رافعًا شعار تقديم مستوى جديد من الحلول القانونية عالية المستوى بطريقة فريدة ومبتكرة",
  },
  {
    year: "2008",
    title: "الإطلاق الأول للمجموعة التجارية والبحرية للمحاماة",
    desc: "تم إطلاق المجموعة التجارية والبحرية للمحاماة بكل قوة بغرض تقديم خدمات قانونية بمعايير عالمية المستوى لخدمة العملاء الكرام على الصعيد المحلي والدولي وسعياً من فريق العمل بأن تصبح أكبر مكتب محاماة دولي في مصر.",
  },
  {
    year: "2016",
    title: "الاحتفال بمرور 30 عاماً من العطاء القانوني",
    desc: "احتفل المكتب بمرور 30 عاماً من العطاء القانوني للعملاء الكرام من الأفراد والشركات والمؤسسات في مصر والشرق الأوسط وبكون المجموعة أعرق مكتب محاماة مصري يدعم الموكلين منذ 1986 في كل المدن المصرية والعربية.",
  },
  {
    year: "2020",
    title: "بروتوكول تعاون دولي مع مكتب زايد الشحي بالإمارات",
    desc: "بدء المكتب بروتوكول تعاون دولي مع مكتب المحامي زايد الشحي في دبي بالإمارات العربية المتحدة بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط، ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.",
  },
  {
    year: "2023",
    title: "بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة",
    desc: "بدء المكتب بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة في الرياض بالمملكة العربية السعودية بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط، ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.",
  },
  {
    year: "2024",
    title: "بروتوكول تعاون دولي مع شركة سيتشوان ينجلينج هيشي للمحاماة",
    desc: `
    بدء المكتب بروتوكول تعاون دولي مع سيتشوان ينجلينج هيشي
    في الصين بتشغندو بغرض التوسع في العطاء القانوني على النطاق الدولي،
    ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.
  `,
  },
];
const BuisnessHistory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.parent}>
        <CardContent
          year={cardInfo[0].year}
          title={cardInfo[0].title}
          desc={cardInfo[0].desc}
        />
        <LineCard />
        <CardImg path="/assets/images/about/alex.png" />
      </div>
      <div className={styles.parent}>
        <CardImg path="/assets/images/about/cairo.png" />
        <LineCard />
        <CardContent
          year={cardInfo[1].year}
          title={cardInfo[1].title}
          desc={cardInfo[1].desc}
        />
      </div>
      <div className={styles.parent}>
        <CardContent
          year={cardInfo[2].year}
          title={cardInfo[2].title}
          desc={cardInfo[2].desc}
        />
        <LineCard />
        <CardImg path="/assets/images/about/building.png" />
      </div>
      <div className={styles.parent}>
        <CardImg path="/assets/images/about/space.png" />
        <LineCard />
        <CardContent
          year={cardInfo[3].year}
          title={cardInfo[3].title}
          desc={cardInfo[3].desc}
        />
      </div>
      <div className={styles.parent}>
        <CardContent
          year={cardInfo[6].year}
          title={cardInfo[6].title}
          desc={cardInfo[6].desc}
        />
        <LineCard />
        <CardImg path="/assets/images/about/anniversary.png" />
      </div>
      <div className={styles.parent}>
        <CardImg path="/assets/images/about/Maskgroup.png" />
        <LineCard />
        <CardContent
          year={cardInfo[5].year}
          title={cardInfo[5].title}
          desc={cardInfo[5].desc}
        />
      </div>
      <div className={styles.parent}>
        <CardContent
          year={cardInfo[6].year}
          title={cardInfo[6].title}
          desc={cardInfo[6].desc}
        />
        <LineCard />
        <CardImg path="/assets/images/about/anniversary2.png" />
      </div>
      <div className={styles.parent}>
        <CardImg path="/assets/images/about/Maskgroup2.png" />
        <LineCard />
        <CardContent
          year={cardInfo[7].year}
          title={cardInfo[7].title}
          desc={cardInfo[7].desc}
        />
      </div>
    </section>
  );
};

export default BuisnessHistory;

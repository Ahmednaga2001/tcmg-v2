import LineCard from "@/components/about/aboutMilestonesSection/LineCard";

import styles from "@/components/about/aboutMilestonesSection/aboutMilestonesSection.module.css";
import MilestoneCard from "./MilestoneCard";
import MilestoneImage from "./MilestoneImage";
const cardInfo = [
  {
    year: "1986",
    title: "إطلاق مكتب المحامي محمد أبو ضيف الأول بالأسكندرية",
    desc: "في مارس من عام 1986 قام المحامي محمد أبو ضيف بتأسيس أول مكتب محاماة باتخاذ مقر له في مدينة الإسكندرية، ليكون شعار المكتب الأول توفير الحماية القانونية للموكلين",
    imagePath : "/assets/images/about/alex.png"
  },
  {
    year: "1996",
    title: "إطلاق المكتب الثاني في قلب مدينة القاهرة",
    desc: "تم إفتتاح مكتبنا الثاني للمحاماة والاستشارات القانونية في مدينة القاهرة الكبري ليصبح المقر الرئيسي للمكتب في قلب المدينة وذلك لنوسع من نطاق أعمالنا في كافة المدن المصرية",
    imagePath :"/assets/images/about/cairo.png" 
  },
  {
    year: "2005",
    title: "بناء فريق عمل متكامل من أكبر المحامين والمستشارين",
    desc: "إستقطب المكتب نخبة من أكبر محامين مصر والمتخصصين في مجالات القانون المختلفة رافعًا شعار تقديم مستوى جديد من الحلول القانونية عالية المستوى بطريقة فريدة ومبتكرة",
    imagePath : "/assets/images/about/building.png" 
  },
  {
    year: "2008",
    title: "الإطلاق الأول للمجموعة التجارية والبحرية للمحاماة",
    desc: "تم إطلاق المجموعة التجارية والبحرية للمحاماة بكل قوة بغرض تقديم خدمات قانونية بمعايير عالمية المستوى لخدمة العملاء الكرام على الصعيد المحلي والدولي وسعياً من فريق العمل بأن تصبح أكبر مكتب محاماة دولي في مصر.",
    imagePath : "/assets/images/about/space.png"
  },
  {
    year: "2016",
    title: "الاحتفال بمرور 30 عاماً من العطاء القانوني",
    desc: "احتفل المكتب بمرور 30 عاماً من العطاء القانوني للعملاء الكرام من الأفراد والشركات والمؤسسات في مصر والشرق الأوسط وبكون المجموعة أعرق مكتب محاماة مصري يدعم الموكلين منذ 1986 في كل المدن المصرية والعربية.",
    imagePath : "/assets/images/about/anniversary.png"
  },
  {
    year: "2020",
    title: "بروتوكول تعاون دولي مع مكتب زايد الشحي بالإمارات",
    desc: "بدء المكتب بروتوكول تعاون دولي مع مكتب المحامي زايد الشحي في دبي بالإمارات العربية المتحدة بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط، ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.",
    imagePath:"/assets/images/about/Maskgroup.png"
  },
  {
    year: "2023",
    title: "بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة",
    desc: "بدء المكتب بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة في الرياض بالمملكة العربية السعودية بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط، ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.",
    imagePath : "/assets/images/about/anniversary2.png"
  },
  {
    year: "2024",
    title: "بروتوكول تعاون دولي مع شركة سيتشوان ينجلينج هيشي للمحاماة",
    desc: `
    بدء المكتب بروتوكول تعاون دولي مع سيتشوان ينجلينج هيشي
    في الصين بتشغندو بغرض التوسع في العطاء القانوني على النطاق الدولي،
    ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.
  `,
  imagePath : "/assets/images/about/Maskgroup2.png"
  },
];
const AboutMilestones = () => {
  return (
    <section className={styles.aboutMilestonesSection}>
      {cardInfo.map((card, index) => (
        <div className={styles.aboutMilestoneItem} key={index}>
          {index % 2 === 0 ? (
            <>
              <MilestoneCard year={card.year} title={card.title} desc={card.desc} />
              <LineCard />
              <MilestoneImage path={card.imagePath} />
            </>
          ) : (
            <>
              <MilestoneImage path={card.imagePath} />
              <LineCard />
              <MilestoneCard year={card.year} title={card.title} desc={card.desc} />
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default AboutMilestones;

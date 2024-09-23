import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/client/homePage/Carousel";
import Branches from "@/client/homePage/Branches";
import Parteners from "@/client/homePage/Parteners";
import HomeHero from "@/components/home/homeHero/HomeHero";
import HomeCarousel from "@/components/home/client/homeCarousel/HomeCarousel";
import HomeWhyUs from "@/components/home/homeWhyUs/HomeWhyUs";
import Team from "@/components/shared/client/Team/Team";
import Customers from "@/components/shared/customers/Customers";
import Stats from "@/components/shared/stats/Stats";

const services = [
  {
    id: 1,
    img: "/assets/images/homePage/تأسيس الشركات.png",
    header: "تأسيس الشركات",
    body: "هل ترغب في تأسيس شركة في مصر؟ نعمل على تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز من الأداء. حيث نقدم الدعم في تأسيس الشركات في مصر والسعودية والإمارات بمختلف أنواعها، وإعداد عقود التأسيس واللوائح الداخلة، بالإضافة إلى مساعدة العملاء على اختيار نوع الشركة، وتوفير الدعم في كافة مراحل التأسيس والإعداد.",
  },
  {
    id: 2,
    img: "/assets/images/homePage/الاستشارات القانونية.png",
    header: "الاستشارات القانونية",
    body: "نفخر بتقديم الاستشارات القانونية  من مستشار قانوني مُحنك مع دعم من أكبر محامين مصر المتخصصين في مجالات القانون المختلفة والمستعدين لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية وهذه الخدمة لكل من يبحث عن رقم محامي للاستشارة.",
  },
  {
    id: 3,
    img: "/assets/images/homePage/توكيل محامي .png",
    header: "توكيل محامي",
    body: "هل تواجه أي صعوبة في حل مسائلك القانونية؟ نقدم من خلال مجموعة مكاتب TCMG خدمة توكيل محامي يتمتع بكفاءة عالية وخبرة كافية في شتى فروع القانون, بما يلزم لتقديم دعم قانوني قوي أو إتمام إجراءات قانونية نيابة عنك, سواء كنتَ فردًا أو شركةً.",
  },
];

const cases = [
  {
    id: 1,
    img: "/assets/images/homePage/اسواقالمال.png",
    header: "أسواق المال ",
    body: "تقوم المجموعة بدورًا مهمًا في أسواق المال من خلال تقديم الاستشارات القانونية المتخصصة في القضايا المالية والمصرفية. نعمل على ضمان الامتثال الكامل للوائح المالية, وتمثيل عملائنا أمام الهيئات التنظيمية والمحاكم المالية؛ مما يساهم في حماية حقوقهم وتعزيز استثماراتهم بأعلى معايير الأمان والشفافية.",
  },
  {
    id: 2,
    img: "/assets/images/homePage/الاندماج.png",
    header: "الإندماج والإستحواذ",
    body: "في TCMG, نقوم بدورٍ فعًّال للشركات في عمليات الأندماج والأستحوازك, حيث نعمل على ضمان الامتثال الكامل للقوانين واللوائح المحلية والدولية, ونسعى لتحقيق أهداف عملائنا الاستراتيجية بكفاءة عالية. نمثل أيضًا عملاءنا في التفاوض وإبرام العقود؛ مما يساعدهم في تحقيق نمو مستدام وتوسيع نطاق أعمالهم بطريقة منظمة وفعًّالة",
  },
  {
    id: 3,
    img: "/assets/images/homePage/بنكية.png",
    header: "الخدمات البنكية والمالية",
    body: "هل تبحث عن استشارات قانونية موثوقة في القطاعين البنكي والمالي؟ نساعد كلًا من للشركات والمؤسسات في هذا المجال عن طريق ضمان الامتثال الكامل للوائح المالية والمصرفية وتمثيلهم أمام الهيئات التنظيمية والمحاكم المختصة. نسعى إلى تقديم حلول قانونية مبتكرة تدعم النمو المالي وتعزز الثقة والاستقرار في استثمارات عملائنا.",
  },
  {
    id: 4,
    img: "/assets/images/homePage/تطوير عقاري.png",
    header: "التطوير العقاري والإنشاءات",
    body: "هل ترغب في دعم قانوني لمشروعات التطوير العقاري والإنشاءات؟ سنساعد الشركات في العمل على إعداد ومراجعة عقود الإنشاءات والتطوير, وضمان الامتثال للوائح والقوانين المحلية والدولية. نحرص على تقديم الدعم القانوني لعملائنا لضمان نجاح مشروعاتهم وحمايتهم من المخاطر القانونية المحتملة",
  },
  {
    id: 5,
    img: "/assets/images/homePage/تحكيم تجاري.png",
    header: "التحكيم التجاري",
    body: "هل تواجه نزاعات تجارية وتحتاج إلى حل سريع وفعال؟ في المجموعة التجارية والبحرية, نعمل على تقديم استشارات قانونية متخصصة للشركات, وتمثيلهم أمام هيئات التحكيم المحلية والدولية. نضمن حماية حقوقك التجارية والحصول على حلول سريعة وعادلة, بما يتوافق مع المعايير القانونية العالمية",
  },
  {
    id: 6,
    img: "/assets/images/homePage/نقل وشحن.png",
    header: "النقل والشحن",
    body: "في المجموعة التجارية والبحرية للمحاماة, نقدم دعمًا قانونيًا شاملاً لكل الشركات العاملة في قطاع النقل والشحن البحري أو حتى البري. نعمل على إتمام عقود النقل, حل النزاعات المتعلقة بالشحن وأيضًا تقديم استشارات قانونية متخصصة لضمان الامتثال للقوانين الدولية وحتى المحلية",
  },
  {
    id: 7,
    img: "/assets/images/homePage/التقاضي.png",
    header: "التقاضي",
    body: "تقدم المجموعة التجارية والبحرية للمحاماة خبرات متعمقة للشركات في تقديم الدعم القانوني أمام المحاكم المختلفة. نعمل على تحليل القضايا بدقة, إعداد مرافعات قوية وأيضًا تقديم حجج قانونية مدعومة بأدلة قوية.",
  },
];

const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "محامي جنائي",
    img: "/assets/images/homePage/lawyers/هشام محمود.png",
  },
  {
    id: 3,
    name: "خلف حسين",
    category: "محامي مدني",
    img: "/assets/images/homePage/lawyers/خلف حسين.png",
  },
  {
    id: 4,
    name: "سهى خيري",
    category: "محامية بنوك",
    img: "/assets/images/homePage/lawyers/سهي خيري.png",
  },
  {
    id: 5,
    name: "كرم موريس",
    category: "محامي شركات",
    img: "/assets/images/homePage/lawyers/كرم موريس.png",
  },
];

const customers = [
  {
    id: 1,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "المهندس حسام نصار",
    category: "مهندس إماراتي خبير",
    body: "جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات",
  },
  {
    id: 2,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "أستاذ هيثم الشيمي",
    category: "مدير ماليات",
    body: "دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم ",
  },
  {
    id: 3,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "أستاذة فاطمة عيسى",
    category: "رائدة أعمال",
    body: "خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة",
  },
  {
    id: 4,
    img: "/assets/images/homePage/lawyers/Ellipse 2.png",
    name: "أستاذ أحمد سليم",
    category: "مستثمر ورجل أعمال",
    body: "تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك",
  },
];

const articles = [
  {
    id: 1,
    header: "محامي في مصر",
    date: "28 يناير   . 9 دقائق",
    body: "على مر السنين وقد تم الاعتراف بالمحامي المصري كونه أحد أجدر رجال القانون في تولي المسائل القانونية, فقد عُرِف بعقليته الاستراتيجية العالية وامتلاكه المقدرة الفائقة في إدارة الأزمات وفض المنازعات المحلية والدولية في كثير من بلاد الوطن العربي في شتى فروع القانون.",
    img: "/assets/images/homePage/articles/محامي في مصر.png",
  },
  {
    id: 2,
    header: "تأسيس شركة في السعودية",
    date: "28 يناير   . 9 دقائق",
    body: "هي خطوة جوهرية للعديد من رواد الأعمال والمستثمرين الراغبين في استغلال الفرص الاقتصادية المتاحة في البلاد، حيث تعد المملكة العربية السعودية واحدة من أكبر الاقتصادات في الشرق الأوسط وتتمتع ببيئة استثمارية مشجعة ومتطورة.",
    img: "/assets/images/homePage/articles/تأسيس شركة في السعودية.png",
  },
  {
    id: 3,
    header: "تأسيس شركة في السعودية",
    date: "28 يناير   . 9 دقائق",
    body: "هي خطوة جوهرية للعديد من رواد الأعمال والمستثمرين الراغبين في استغلال الفرص الاقتصادية المتاحة في البلاد، حيث تعد المملكة العربية السعودية واحدة من أكبر الاقتصادات في الشرق الأوسط وتتمتع ببيئة استثمارية مشجعة ومتطورة.",
    img: "/assets/images/homePage/articles/تأسيس شركة في السعودية2.png",
  },
  {
    id: 4,
    header: "حماية الملكية الفكرية",
    date: "28 يناير   . 9 دقائق",
    body: "تعد أحد أفرع الملكية حيث لا تقتصر على كونها ملكية مادية فقط خاصة بالعقارات، ويندرج تحتها براءات الاختراع وحقوق النشر والعلامات التجارية؛ لذا وقد باتت الحاجة تتطلب توكيل المحامي المختص بحماية الملكية الفكرية.",
    img: "/assets/images/homePage/articles/حماية الملكية الفكرية.png",
  },
];

const displayJsx = function (obj) {
  return obj.map((el) => (
    <div key={el.id}>
      <Image
        src={el.img}
        alt={el.img}
        width={600}
        height={350}
        className={styles.image}
      />
      <h3>{el.header}</h3>
      {el.date && <span className={styles.date}>{el.date}</span>}
      <p>{el.body}</p>
      <span className="link">
        الذهاب إلي الصفحة
        <Image
          src="assets/icons/arrow-left.svg"
          alt="Arrow Left Small"
          width={20}
          height={20}
        />
      </span>
    </div>
  ));
};

const lawyersJsx = lawyers.map((lawyer) => (
  <div className={styles.card} key={lawyer.id}>
    <Image src={lawyer.img} alt={lawyer.name} width={279} height={300} />
    <p>{lawyer.name}</p>
    <p>{lawyer.category}</p>
  </div>
));

const customersJsx = customers.map((customer) => (
  <div className={styles.customer} key={customer.id}>
    <div className={styles.top}>
      <div className={styles.left}>
        <span>{customer.name}</span>
        <br />
        <span>{customer.category}</span>
      </div>
      <div className={styles.right}>
        <Image src={customer.img} alt={customer.name} width={80} height={80} />
      </div>
    </div>
    <div className={styles.bottom}>
      <Image src="/assets/icons/quote.svg" alt="Quote" width={28} height={23} />
      <p>{customer.body}</p>
    </div>
  </div>
));

function Home() {
  return (
    <div className={styles.page}>
      <HomeHero/>
      <HomeCarousel/>
      <HomeWhyUs />
      <Scroll />
      <Team lawyers={lawyers}/>
      {/* <Stats /> */}
      <Stats/>
      {/* <OurCustomers /> */}
      <Customers/>
      <Articles />
      <Branches />
      <Parteners />
    </div>
  );
}



function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <h2>لماذا تختارنا وبكل ثقة؟</h2>
      <p>
        يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات
        التي تسيّر آلية العمل داخل مكتبنا، بالإضافة إلى مبادئ المحامين والشركاء
        العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي
        والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد
        عملاؤنا بقوة مكتبنا وثقة التعامل معنا، والمبادئ التالية ما ستجدها عند
        التعامل معنا:
      </p>
      <div className="slider"></div>
    </section>
  );
}

function Scroll() {
  return (
    <>
      <section className={styles.scroll}>
        <div className={styles.right}>
          <h2>خدمات قانونية عالمية المستوى منذ 1986</h2>
          <p>
            نختصّ بتقديم أكثر من 30 خدمة قانونية بخبرات عالمية وفهم واسع للبيئة
            القانونية. لتقديم أفضل مستوى من الحلول القانونية على الصعيد المحلي
            والدولي في مكتبنا بقلب مدينة القاهرة. فمن خلال دمج خبرات فريق العمل
            المكون من أكثر من 40 محامي متخصصين في مجالات القانون المختلفة، تكمن
            قوتنا في تقديم خدمات قانونية بمعايير أداء عالمية ومستوى فاعلية ممتاز
            في الجودة والوقت.
          </p>
          <span className="link">
            توجه إلي صفحة الخدمات القانونية
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={20}
              height={20}
            />
          </span>
        </div>
        <div className={styles.left}>{displayJsx(services)}</div>
      </section>
      <section className={styles.scroll}>
        <div className={styles.right}>
          <h2>محامين خبراء في مجالات القانون والقضايا المختلفة</h2>
          <p>
            ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا بالتخصصات
            القانونية التي تتطلب خبرة قانونية وفكر استراتيجي من الدرجة الأولى.
            حيث نفخر بوجود شركائنا المتخصصين في مجالات القانون المختلفة،
            والمستعدون لدعم عملائنا الكرام بكل السبل الممكنة لتحقيق أهدافهم
            بأسرع وقت وبأعلى جودة ممكنة؛ سعياً منا لنصبح أفضل شركة محاماة في مصر
            في المستقبل القريب.
          </p>
          <span className="link">
            تصفح كامل الخدمات القانونية
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={20}
              height={20}
            />
          </span>
        </div>
        <div className={styles.left}>{displayJsx(cases)}</div>
      </section>
    </>
  );
}

function OurTeam() {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.header}>
        <h2>فريق العمل</h2>
        <Image
          src="/assets/icons/crown.svg"
          alt="Crown"
          width={60}
          height={25}
        />
      </div>
      <p>
        تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر
        أصحاب الخبرات في تخصصات القضايا المحلية والدولية المختلفة. حيث نضم
        مجموعة من الكوادر مجموعة من الكوادر البشرية المتخصصة في مجالات القانون
        المختلفة. ولأن الجودة والسرعة هي شعارنا؛ نعمل بروح الفريق لدمج الخبرات
        والمعرفة المتراكمة في دعم عملائنا الكرام على تحقيق أهدافهم القانونية.
      </p>
      <div className={styles.cards}>{lawyersJsx}</div>
    </section>
  );
}

// function Stats() {
//   return (
//     <section className={styles.stats}>
//       <div>
//         <span>+300</span>
//         <span>العملاء</span>
//       </div>
//       <div>
//         <span>40</span>
//         <span>عدد الخبراء</span>
//       </div>
//       <div>
//         <span>+50</span>
//         <span>سنين الخبرة</span>
//       </div>
//       <div>
//         <span>7</span>
//         <span>مكاتب محاماة اقليمية</span>
//       </div>
//     </section>
//   );
// }

function OurCustomers() {
  return (
    <section className={styles.ourCustomers}>
      <div className={styles.header}>
        <h2>آراء عملائنا الكرام</h2>
        <Image
          src="/assets/icons/crown.svg"
          alt="Crown"
          width={60}
          height={25}
        />
      </div>
      <div className={styles.customers}>{customersJsx}</div>
      <div className="link">
        <span>مشاهدة كامل الأراء</span>
        <Image
          src="/assets/icons/arrow-left.svg"
          alt="Left-Arrow"
          width={20}
          height={20}
        />
      </div>
    </section>
  );
}

function Articles() {
  return (
    <article className={`${styles.scroll} ${styles.articles}`}>
      <div className={styles.right}>
        <h2>أحدث المقالات</h2>
        <p>
          تعلم أكثر من المكتبة القانونية المتكاملة وامتلك معرفة أوسع وأعمق في
          البيئة القانونية من خلال استكشاف أحدث التطورات والمستجدات، واستفد من
          مجموعة متنوعة من المصادر القانونية المتكاملة.
        </p>
        <span className="link">
          إقرا المزيد
          <Image
            src="assets/icons/arrow-left.svg"
            alt="Arrow Left Small"
            width={20}
            height={20}
          />
        </span>
      </div>
      <div className={styles.left}>{displayJsx(articles)}</div>
    </article>
  );
}

export default Home;

import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";
const data = [
  {
    title: "1- اختر الاستشارة المطلوبة",
    desc: "اختار استشارتك المطلوبة التي تناسب احتياجاتك، سواء استشارة قانونية فورية عبر الاتصال أو تحديد موعد لزيارتنا بمكتبنا بالقاهرة أو من خلال حجز استشارة قانونية أون لاين عبر تحديد موعد اجتماع مع مستشار قانوني متخصص.",
    path: "/assets/images/legalconsultations/whatsup.png",
    w: 115,
    h: 116,
  },
  {
    title: "2- احجز موعدك",
    desc: "حدد موعد استشارتك بكل مرونة باختيار اليوم المطلوب لعقد الاستشارة والتوقيت المناسب خلال ساعات عملنا بما يناسب وقتك الثمين وسيكون المستشار القانوني مستعد للتواصل معك في الوقت المُحدد.",
    path: "/assets/images/legalconsultations/Calender.png",
    w: 300,
    h: 302,

  },
  {
    title: "3- املئ استمارة الاستشارة",
    desc: "املئ استمارة الاستشارة ببياناتك الصحيحة كالأسم ورقم الموبايل والبريد الإلكتروني واكتب نبذة عن قضيتك المراد عقد الاستشارة من أجله، وأخيراً تحديد تخصص المستشار القانوني المطلوب.",
  },
  {
    title: "4- أتمم مدفوعاتك بآمان",
    desc: "كن على يقين أن مدفوعاتك ستتم بآمان، فلدينا نظام حماية وآمان صارم على المدفوعات. واطمئن فلن يتم حفظ بيانات البطاقة الإئتمانية خاصتك على الموقع، بمجرد أن يتم الدفع ستحجز استشارتك بأعلى قدر من الآمان والخصوصية.",
    path: "/assets/images/legalconsultations/card.png",
    path2: "/assets/images/legalconsultations/card2.png",
    w: 248,
    h: 178,
    w2 : 209,
    h2 : 131
  },
  {
    title: "5- احصل على الدعم القانوني",
    desc: "بعد إتمام كل الخطوات أنت الآن مستعد لعقد استشارتك مع مستشارك القانوني المتخصص والمستعد لدعمك في قضيتك وهدفك القانوني المنشود. فلن تنتهي الاستشارة حتى تصل لحلول فعالة قادرة على تحقيق مرادك.",
    path: "/assets/images/legalconsultations/user.png",
    w: 197,
    h: 197,
  },
];
const StartCompany = () => {
  return (
    <section className={styles.startcompany}>
      <div className={styles.heading}>
        <h2>اطلب استشارتك الآن بكل سهولة</h2>
        <p>5 خطوات تضع قوة المشورة القانونية بين يديك</p>
      </div>
      <div className={styles.startcompanyparent}>
        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[0].title}</h3>
            <p>{data[0].desc}</p>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.Img}>
            <div className={styles.whatupCard}>
              <Image
                src={data[0].path}
                width={data[0].w}
                height={data[0].h}
                alt="whatsup image"
              />
              <span>استشارة واتس آب</span>
            </div>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
            <Image
              src={data[1].path}
              width={data[1].w}
              height={data[1].h}
              alt={data[1].path}
            />
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.content}>
            <h3>{data[1].title}</h3>
            <p>{data[1].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[2].title}</h3>
            <p>{data[2].desc}</p>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.Img}>
            <label htmlFor="kind">نوع الاستشارة</label>
            <select name="" id="kind">
              <option value="النوع" disabled selected>
                النوع
              </option>
            </select>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.Img}>
          <div className={styles.card}>
            <Image
              src={data[3].path}
              width={data[3].w}
              height={data[3].h}
              alt={data[3].path}
            />
            <Image
              src={data[3].path2}
              width={data[3].w2}
              height={data[3].h2}
              alt={data[3].path2}
              className={styles.img2}

            />
            </div>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.content}>
            <h3>{data[3].title}</h3>
            <p>{data[3].desc}</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.content}>
            <h3>{data[4].title}</h3>
            <p>{data[4].desc}</p>
          </div>
          <div className={styles.line}>
          <Image src="/assets/symbols/about/circle.svg" className={styles.circleImg} alt='circle image' width={30} height={30} />     
          </div>
          <div className={styles.Img}>
            <Image
              src={data[4].path}
              width={data[4].w}
              height={data[4].h}
              alt={data[4].path}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCompany;

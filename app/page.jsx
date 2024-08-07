"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Carousel />
      <WhyUs />
      <Scroll />
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          المجموعة التجارية والبحرية للمحاماة اختيارك الأول لدعم قانوني قوي
        </h1>
        <p>
          خبرة متراكمة, تقنيات مبتكرة ونتائج فعّالة: مزايا يتمتع بها محامين
          ومستشارين المكتب؛ خدمةً للحق القانوني وتحقيقًا للعدالة, بمستوى متطور
          من الخدمات القانونية الشاملة وأعمال الشركات.
        </p>
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <section className={styles.carousel}>
      {useEffect(() => {
        const caroChilds = document.querySelectorAll("#caroChild");
        const caroChild = Array.from(caroChilds);
        let currentIndex = 0;
        const interval = setInterval(() => {
          const nextIndex = (currentIndex + 1) % caroChild.length;
          caroChild[currentIndex].style.display = "none";
          caroChild[nextIndex].style.display = "flex";
          currentIndex = nextIndex;
        }, 5000);
        //clean up function that gets triggered when the effect is done, wich optimizes performance and rduces memory consumtion.
        return () => clearInterval(interval);
      }, [])}
      <div className={styles.caroChild} id="caroChild">
        <h2>استشارات قانونية بمعايير عالمية المستوى</h2>
        <div>
          <p>
            بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي
            نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء  بمستوى جديد من الحلول
            القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل مع أفضل
            مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق أهدافك.
          </p>
          <Image
            src="assets/symbols/bottomL.svg"
            alt="Bottom L"
            width={130}
            height={100}
          />
        </div>
        <div>
          <span>
            اطلب الأن أستشارة فورية
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={20}
              height={20}
            />
          </span>
        </div>
      </div>
      <div className={styles.caroChild} id="caroChild">
        <h2>مكتب محاماة دولي بمعايير أداء عالمية</h2>
        <div>
          <p>
            بتعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا
            يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين
            والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات العامة
            وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره الرئيسي
            في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية لكافة
            عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.
          </p>
          <Image
            src="assets/symbols/topL.svg"
            alt="Bottom L"
            width={130}
            height={100}
          />
        </div>
        <div>
          <span>
            تواصل معنا عبر البريد الإلكتروني
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={20}
              height={20}
            />
          </span>
        </div>
      </div>
    </section>
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
          <span>
            توجه إلي صفحة الخدمات القانونية
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={20}
              height={20}
            />
          </span>
        </div>
        <div className={styles.left}>
          <div>
            <Image
              src="/assets/images/Rectangle 440.png"
              alt="Rectange 440"
              width={600}
              height={350}
            />
            <h3>تأسيس الشركات</h3>
            <p>
              هل ترغب في تأسيس شركة في مصر؟ نعمل على تقديم الدعم لأعمال الشركات
              المختلفة بمستوى مميز من الأداء. حيث نقدم الدعم في تأسيس الشركات في
              مصر والسعودية والإمارات بمختلف أنواعها، وإعداد عقود التأسيس
              واللوائح الداخلة، بالإضافة إلى مساعدة العملاء على اختيار نوع
              الشركة، وتوفير الدعم في كافة مراحل التأسيس والإعداد.
            </p>
            <span>
              الذهاب إلي الصفحة
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div>
            <Image
              src="/assets/images/Rectangle 441.png"
              alt="Rectange 440"
              width={600}
              height={350}
            />
            <h3>الاستشارات القانونية </h3>
            <p>
              نفخر بتقديم الاستشارات القانونية  من مستشار قانوني مُحنك مع دعم من
              أكبر محامين مصر المتخصصين في مجالات القانون المختلفة والمستعدين
              لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد
              والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية وهذه
              الخدمة لكل من يبحث عن رقم محامي للاستشارة.
            </p>
            <span>
              الذهاب إلي الصفحة
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div>
            <Image
              src="/assets/images/توكيل محامي 2.png"
              alt="Rectange 440"
              width={600}
              height={350}
            />
            <h3>توكيل محامي</h3>
            <p>
              هل تواجه أي صعوبة في حل مسائلك القانونية؟ نقدم من خلال مجموعة
              مكاتب TCMG خدمة توكيل محامي يتمتع بكفاءة عالية وخبرة كافية في شتى
              فروع القانون, بما يلزم لتقديم دعم قانوني قوي أو إتمام إجراءات
              قانونية نيابة عنك, سواء كنتَ فردًا أو شركةً.
            </p>
            <span>
              الذهاب إلي الصفحة
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
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
          <span>
            تصفح كامل الخدمات القانونية
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={20}
              height={20}
            />
          </span>
        </div>
        <div className={styles.left}>
          <div>
            <Image
              src="/assets/images/توكيل محامي 2.png"
              alt="Rectange 440"
              width={600}
              height={350}
            />
            <h3>توكيل محامي</h3>
            <p>
              هل تواجه أي صعوبة في حل مسائلك القانونية؟ نقدم من خلال مجموعة
              مكاتب TCMG خدمة توكيل محامي يتمتع بكفاءة عالية وخبرة كافية في شتى
              فروع القانون, بما يلزم لتقديم دعم قانوني قوي أو إتمام إجراءات
              قانونية نيابة عنك, سواء كنتَ فردًا أو شركةً.
            </p>
            <span>
              الذهاب إلي الصفحة
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div>
            <Image
              src="/assets/images/توكيل محامي 2.png"
              alt="Rectange 440"
              width={600}
              height={350}
            />
            <h3>توكيل محامي</h3>
            <p>
              هل تواجه أي صعوبة في حل مسائلك القانونية؟ نقدم من خلال مجموعة
              مكاتب TCMG خدمة توكيل محامي يتمتع بكفاءة عالية وخبرة كافية في شتى
              فروع القانون, بما يلزم لتقديم دعم قانوني قوي أو إتمام إجراءات
              قانونية نيابة عنك, سواء كنتَ فردًا أو شركةً.
            </p>
            <span>
              الذهاب إلي الصفحة
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

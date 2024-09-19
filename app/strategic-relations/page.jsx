import Links from "@/components/join-us/Links";
import OurFeatures from "@/components/strategic-relations/client/OurFeatures";
import JoinOurLegalNetwork from "@/components/strategic-relations/JoinOurLegalNetwork";
import styles from "@/components/strategic-relations/strategicrelations.module.css";
import Image from "next/image";

function StrategicRelations() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>
       <br/> انطلق نحو مستقبل واعد في مجال المحاماة 
        مع برنامج التدريب المتكامل للمحامين الجدد في المجموعة التجارية والبحرية للمحاماة
        </h1>
      </section>
      
      <Links />
<JoinOurLegalNetwork/>
      <section className={styles.about}>
          <div className={styles.top}>
            <h2>من نحن</h2>
            <Image
              src="/assets/images/strategicrelations/topL.png"
              width={135}
              height={135}
              alt="topL image"
            />
          </div>
          
          <div className={styles.body}>
            <p>
              المجموعة التجارية والبحرية للمحاماة تعد من أكبر مكاتب المحاماة في
              مصر, حيث نتميز بالتفاني في تقديم خدمات قانونية متميزة لعملائنا على
              المستوى المحلي والدولي ايضاً. نحن نجمع بين الخبرة العميقة والابتكار
              في تقديم حلول قانونية شاملة تلبي احتياجات العملاء. بفضل فريقنا
              المتخصص والملتزم، نسعى جاهدين لتحقيق أفضل النتائج لعملائنا في مختلف
              المجالات القانونية. تتمثل رؤيتنا في تقديم خدمة استثنائية لعملائنا,
              وأيضا نسعى الى بناء علاقات مستدامة مع مكاتب المحاماة الأخرى؛ مما
              يجعلنا ويجعلهم الشريك المفضل للقانون والمشورة القانونية الموثوقة.
            </p>
            <Image
              src="/assets/images/strategicrelations/bottomL.png"
              width={135}
              height={135}
              alt=" bottomL image"
            />
          </div>
      </section>
      <OurFeatures />

      <section className={styles.tcmgPartnership}>
        <div>
          <h2>حقق التميز والنجاح من خلال الشراكة مع مكاتب TCMG للمحاماة</h2>
          <p>
            نحن نسعى لبناء علاقات استراتيجية قائمة على الثقة والإحترافية مع مكاتب
            المحاماة الأخرى. من خلال خبرتنا الواسعة والمتنوعة في مجال القانون؛
            نضمن لكم تقديم خدمات متميزة وحلول قانونية مبتكرة تلبي تطلعاتكم وتحقق
            أهدافكم. انضموا إلينا اليوم واستفيدوا من شراكة قوية تسهم في نجاحكم
            المستقبلي في عالم القانون
          </p>
          <a href="mailto:Pr@tcmglaw.com">Pr@tcmglaw.com</a>
        </div>
      </section>

      
    </div>
  );
}

export default StrategicRelations;

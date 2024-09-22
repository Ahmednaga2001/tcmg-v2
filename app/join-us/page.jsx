import JoinUsSlider from "@/components/join-us/client/JoinUsSlider";
import KnowOurValues from "@/components/join-us/client/KnowOurValues";
import Divider from "@/components/join-us/Divider";
import JobOpportunities from "@/components/join-us/client/JobOpportunities";
import styles from "@/components/join-us/join-us.module.css";
import OurJourney from "@/components/join-us/OurJourney";
import StartInternship from "@/components/join-us/StartInternship";
import Image from "next/image";
import Links from "@/components/shared/linksPagination/Links";

function JoinUs() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>
          الاتحاد قوة:
          <br />
          انضم إلينا لبناء مستوى جديد من الحلول القانونية الإقليمية والدولية
        </h1>
      </section>
      <Links/>
      <section className={styles.about}>
        <div className={styles.parent}>
        <div>
          <h2>من نحن؟</h2>
          <p>
            المجموعة التجارية والبحرية للمحاماة هي مؤسسة قانونية رائدة في مصر
            والوطن العربي تتخصص في تقديم خدمات متميزة في مجال القانون. نُعد
            مركزًا موثوقًا به للإستشارات القانونية والتمثيل القانوني, حيث نجمع
            بين الخبرة العميقة والخدمة المتميزة لعملائنا. يضم مكتبنا فريق متميز
            من المحامين والمستشارين القانونيين الذين يتمتعون بخبرة واسعة في
            مختلف مجالات القانون, مما يمكِّنهم من تقديم حلول فعّالة ومبتكرة
            لقضايا عملائهم.
          </p>
        </div>
        <Image
          src="/assets/images/joinus/topL.png"
          width={135}
          height={135}
          alt="topL image"
        />
        </div>
      </section>
        <Divider/>
        <JoinUsSlider/>
        <KnowOurValues/>
        <Divider/>
        <StartInternship/>
        <Divider/>
        <JobOpportunities/>
        <OurJourney/>
    </div>
  );
}

export default JoinUs;

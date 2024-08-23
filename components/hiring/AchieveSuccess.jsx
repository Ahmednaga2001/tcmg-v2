import styles from "@/components/hiring/hiring.module.css";
import Image from "next/image";
const AchievSuccess = () => {
  return (
    <section className={styles.achieveSuccess}>
      <div className={styles.Img}>
        <Image
          src="/assets/images/hiring/imageone.png"
          className={styles.img}
          width={407}
          height={533}
          alt="/assets/images/hiring/imageone.png"
        />
      </div>
      <div className={styles.content}>
        <h2>اكتشف تميزك فى مجال القانون</h2>
       <p>في المجموعة التجارية والبحرية للمحاماة، نؤمن بشدة أن التدريب هو أساس بناء مهنة قانونية ناجحة. لذا، نوفر برنامج تدريب محامين حديثي التخرج الذين يطمحون للتقدم والتطور في مجالهم المهني. خلال تدريبك معنا، ستتاح لك الفرصة الفريدة للتدريب في مكتب محاماة كبير يساعدك في تطوير مهاراتك القانونية العملية والاستفادة من خبرات فريقنا المتميز من المحامين. ستتعلم أعلى معايير الجودة والأخلاقيات المهنية، وستشارك في معالجة القضايا القانونية التي تمثل تحديات حقيقية في عالم القانون.</p>
      
      </div>
    </section>
  );
};

export default AchievSuccess;

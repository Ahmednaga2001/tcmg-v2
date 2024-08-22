import Challenges from "@/components/internship/Challenges";
import Experience from "@/components/internship/client/Experience";
import Offer from "@/components/internship/client/Offer";
import styles from "@/components/internship/internship.module.css"
import PathToLegalExcellence from "@/components/internship/PathToLegalExcellence";
import Links from "@/components/join-us/Links";
function Internship() {
  return <div className={styles.page}>
    <section className={styles.hero}>
        <h1>
          بناء شراكات استراتيجية: اكتشف فرص التعاون والتواصل  مع مكاتب TCMG
          للمحاماة لتحقيق النجاح المشترك
        </h1>
      </section>
      <Links/>
      <PathToLegalExcellence/>
      <Challenges/>
      <Offer/>
      <Experience/>
      <section className={styles.aspirations}>
        <h2>ما نطمح إليه من فريق المتدربين الخاص بنا</h2>
        <p>نتطلع إلى انضمام أشخاص ملهمون وملتزمون بالتعلم والنمو المهني. نبحث عن من يريدون تدريب محاماة ولكن يُشتَرط أن يكونوا ممن يمتلكون شغفًا وحماسًا للعمل في مجال القانون، والذين يتمتعون بقدرة على التواصل الفعّال والعمل الجماعي. نحن نرغب في وجود أشخاص يتمتعون بالمرونة والقدرة على التكيف مع تغييرات البيئة المهنية ويسعون دائمًا لتحقيق أفضل النتائج والتميز في عملهم. إذا كنت تبحث مكتب محاماة يقدم خدمة تدريب محامين حديثي التخرج ويقدم فرص للتطور, فنحن نتطلع إلى مشاركتك في رحلتنا وتحقيق النجاح والنمو معًا.</p>

      </section>
  </div>;
}

export default Internship;

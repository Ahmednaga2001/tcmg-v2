import styles from "@/components/join-us/join-us.module.css"
import Image from "next/image"
import Link from "next/link"

const StartInternship = () => {
  return (
    <section className={styles.startInternship}>
      <div className={styles.parent}>
        <div className={styles.content}>
            <h2>ابدأ تدريبك المهني معنا</h2>
            <p>في TCMG، نحن نولي اهتمامًا كبيرًا لتدريب المحامين الشبان ذوي الشهادات العليا. نحن نعتبرهم مستقبلنا ونسعى جاهدين لتمكينهم وتطوير مهاراتهم القانونية. نحن نقدم برنامج تدريب متميز حيث نتيح لهم الفرصة للمشاركة في القضايا الحقيقية واكتساب الخبرات العملية. إذا كنت محاميًا شابًا يبحث عن فرصة للتدريب لبناء مسار مهني ناجح, فنحن هنا لنقدم لك الدعم والتوجيه اللازمين في هذه الرحلة المهنية المميزة.</p>
        </div>
        <div className={styles.imgContainer}>
            <Image src="/assets/images/joinus/topleftL.png" width={238} height={222} alt="/assets/images/joinus/topleftL.png"/>
            <Image src="/assets/images/joinus/bottomL.png" width={238} height={222} alt="/assets/images/joinus/bottomL.png"/>
        </div>

      </div>
      <Link href="#">
      اعرف التفاصيل
      <Image src="/assets/icons/joinus/arrow-left.png" width={24} height={24} alt="arrow-left.png"/>
      </Link>
    </section>
  )
}

export default StartInternship
import Image from "next/image"
import styles from "./page.module.css"
const HiringCareerJourney = () => {
  return (
    <section className={styles.careerJourney}>
    <h2>مسيرتك المهنية معنا</h2>
    <div>
      <p>في المجموعة التجارية والبحرية للمحاماة، مسيرتك المهنية تُعد جزءً أساسيًا من نجاحنا المشترك. نحن ملزمون بتقديم بيئة عمل محفزة تتيح لك تحقيق جميع طموحاتك وتطوير مهاراتك إلى أقصى حد. نقدم لك فرصًا استثنائية للنمو والتقدم, حيث نؤمن بأن كل عضو في فريقنا له دور حيوي في تحقيق رؤيتنا. لدينا سجل حافل في تعزيز طموحات موظفينا, حيث بدأ العديد منهم بالبحث على وظائف خاليه للمحامين وتقدموا ليصبحوا مستقبلًا قادة وشركاء. انضم إلينا, واستفد من ثقافة العمل التي تدعم التطور المهني وتعزز الابتكار, وكن جزءاً من قصة نجاحنا المميزة.
      </p>
      <Image src="/assets/images/hiring/GroupL.png" width={237.68} height={222} alt="/assets/images/hiring/GroupL.png"/>
    </div>
  </section>
  )
}

export default HiringCareerJourney
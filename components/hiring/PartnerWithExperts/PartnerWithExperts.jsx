import Image from "next/image"
import styles from "./page.module.css"
const PartnerWithExperts = () => {
  return (
    <section className={styles.expert}>
      <h2>تعاون مع نخبة من المحامين لتحقيق أهدافك</h2>
      <div className={styles.content}>
        <p>إذا كنت محاميًا طموحًا يبحث عن وظائف خاليه للمحامين وتريد فرصة للتعاون مع أفضل الخبراء في المجال؛ فإننا نقدم لك بيئة مثالية لتحقيق طموحاتك المهنية. في TCMG, نوفر مجموعة من الوظائف القانونية لجمع نخبة من المحامين المتميزين الذين يمتلكون الخبرة والاحترافية العالية. نحن نقدم لك فرصة الانضمام إلى فريق متكامل, حيث يمكنك الإسهام بمهاراتك القانونية والمشاركة في تحقيق أهداف العملاء بطرق مبتكرة وفعالة. انضم إلينا وكن ضمن عمل فريق احترافي, يسعى دائمًا لتقديم أفضل الحلول القانونية</p>
      <Image src="/assets/images/hiring/c1 __ 2.png" width={135} height={135} alt="L Image"/>
      </div>
    </section>
  )
}

export default PartnerWithExperts
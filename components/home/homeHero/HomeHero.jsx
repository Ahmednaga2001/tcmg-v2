import styles from "./page.module.css"
const HomeHero = () => {
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
  )
}

export default HomeHero

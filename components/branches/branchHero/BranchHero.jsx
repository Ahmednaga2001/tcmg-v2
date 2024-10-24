import Image from "next/image"
import styles from "./page.module.css"
const BranchHero = () => {
  return (
    <section className={styles.hero}>
        <h2>فروع المكتب</h2>
        <div className={styles.content}>
          <p>
            تقوم المجموعة التجارية والبحرية للمحاماة بتقديم حلولاً قانونيةً
            رائدة لكل من يبحث عن عناوين مكاتب المحامين في مصر والدول الاخرى لحل
            قضيته.
            <br className={styles.br}/> بفروعنا المتميزة والمنتشرة في مختلف المدن؛ نقوم بتوفير سهولة
            الوصول إلى خدماتنا القانونية المتكاملة. من القانون التجاري إلى
            العقارات، ومن قضايا العمل إلى الدعاوى الشخصية، فريقنا من المحامين
            المتخصصين مستعد لتقديم الدعم القانوني الذي تحتاجه بمعايير عالمية.
            كفاك بحثاً عن عناوين مكاتب المحامين في مصر، وزورنا في أي من فروعنا
            لتجدوا شريككم القانوني الذي سيقف إلى جانبكم في كل الأوقات، ويضمن لكم
            تحقيق أفضل نتائج ممكنة بكل بساطة.
          </p>
        </div>
      </section>
  )
}

export default BranchHero

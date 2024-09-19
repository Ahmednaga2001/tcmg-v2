import styles from "./page.module.css"
const Stats = () => {
  return (
    <section className={styles.stats}>
    <div>
      <span>+300</span>
      <span>العملاء</span>
    </div>
    <div>
      <span>40</span>
      <span>عدد الخبراء</span>
    </div>
    <div>
      <span>+50</span>
      <span>سنين الخبرة</span>
    </div>
    <div>
      <span>7</span>
      <span>مكاتب محاماة اقليمية</span>
    </div>
  </section>
  )
}

export default Stats

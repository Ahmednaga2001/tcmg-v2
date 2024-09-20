import styles from "./page.module.css"
const Hero = ({title}) => {
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
    </section>
  )
}

export default Hero

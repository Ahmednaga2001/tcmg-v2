import ArticleHero from "@/components/article/ArticleHero"
import styles from "./page.module.css"
import ArticleServiceOne  from "@/components/article/articleServiceOne"
import ArticleServiceTwo from "@/components/article/ArticleServiceTwo"
import ArticleServiceThree from "@/components/article/ArticleServiceThree"
 const Aertice = () => {
  return (
    <div className={styles.atriclePage}>
        <section className={styles.atricleService}>
        <ArticleHero/>
        <ArticleServiceOne/>
        <ArticleServiceTwo/>
        <ArticleServiceThree/>
        </section>
        
    </div>
  )
}
export default  Aertice
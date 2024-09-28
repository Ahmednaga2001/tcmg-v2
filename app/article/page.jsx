import ArticleHero from "@/components/article/ArticleHero"
import styles from "./page.module.css"
import ArticleServiceTwo from "@/components/article/ArticleServiceTwo"
import ArticleServiceThree from "@/components/article/ArticleServiceThree"
import ArticleServiceOne from "@/components/article/ArticleServiceOne"
import AerticleServiceFive from "@/components/article/AerticleServiceFive"
import ArticleDivider from "@/components/article/articleDivider"
import ArticleServieSix from "@/components/article/ArticleServieSix"
import ArticleContact from "@/components/article/ArticleContact"
import { ArticleConclution } from "@/components/article/ArticleConclution"
 const Aertice = () => {
  return (
    <div className={styles.atriclePage}>
        <ArticleHero/>
        <section className={styles.atricleService}>
        <ArticleServiceOne/>
        <ArticleServiceTwo/>
        <ArticleServiceThree/>
        <AerticleServiceFive/>
        <ArticleDivider/>
        <ArticleServieSix/>
        </section>
        <ArticleContact/>
        <ArticleConclution/>
    </div>
  )
}
export default  Aertice
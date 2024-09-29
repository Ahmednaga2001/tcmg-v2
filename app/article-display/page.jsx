import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
const ArticleDisplay = () => {
    return (
        <div className={styles.articleDisplayPage}>
            <section className={styles.links}>
                <Link href="#">جميع المنشورات </Link>
                <Link href="#">أخبار ومقالات </Link>
                <Link href="#">مقالات تعليمية</Link>

            </section>
            <section className={styles.articles}>
              {
                Array.from({length:8}).map((_,index)=>{
                    return (
                        <div className={styles.card} key={index}>
                        <div className={styles.cardImg} >
                            <Image src="/assets/images/article/572701_5f94cee90b53461e8ada682ae47889b1~mv2 1.png" alt="Lawyer Image" width={362} height={363} />
                        </div>
                        <div className={styles.overlay}>
                            <span>أخبار ومقالات </span>
                            <p>تسجيل العلامة التجارية دليلك لتوكيل أفضل محامي علامات تجارية لعام 2024 </p>
    
                        </div>
                    </div>
                    )
                })
              }

            </section>
        </div>
    )
}

export default ArticleDisplay;
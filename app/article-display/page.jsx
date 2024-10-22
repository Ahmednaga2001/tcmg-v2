import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
import ArticleForm from "@/components/articlDispaly/client/articleForm/articleForm";
const ArticleDisplay = () => {
    return (
       
           <div className={styles.articlDisplay}>
             <ArticleForm/>
           </div>
        
    )
}

export default ArticleDisplay;
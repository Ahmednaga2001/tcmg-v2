
import Link from "next/link"
import styles from "./page.module.css"

const Links = () => {
  return (
    <div className={styles.links}>
        <Link href="/internship">متدربين</Link>
        <Link href="/hiring">محامين</Link>
        <Link href="/strategic-relations">علاقات عامة</Link>
      
    </div>
  )
}

export default Links

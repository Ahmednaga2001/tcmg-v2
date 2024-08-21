import styles from "@/components/join-us/join-us.module.css"
import Link from "next/link"

const Links = () => {
  return (
    <div className={styles.links}>
        <Link href="/internship">متدربين</Link>
        <Link href="">محامين</Link>
        <Link href="/strategic-relations">علاقات عامة</Link>
      
    </div>
  )
}

export default Links

"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathName = usePathname();
  
  return (
    <div className={styles.links}>
      <Link
        href="/internship"
        className={pathName === "/internship" ? styles.activeLink : ""}
      >
        متدربين
      </Link>
      <Link
        href="/hiring"
        className={pathName === "/hiring" ? styles.activeLink : ""}
      >
        محامين
      </Link>
      <Link
        href="/strategic-relations"
        className={pathName === "/strategic-relations" ? styles.activeLink : ""}
      >
        علاقات عامة
      </Link>
    </div>
  );
};

export default Links;

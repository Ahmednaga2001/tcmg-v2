import React from 'react'
import styles from './page.module.css'
export default function SideBar () {
  return (
    <aside className={styles.sideBar}>
        <ul>
            <li>حسابى</li>
            <li>إستشارتي</li>
            <li>إستشارات قيد المراجعة</li>
            <li>إستشارات تم الإنتهاء منها</li>
        </ul>
    </aside>
  )
}

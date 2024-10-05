import React from 'react'
import styles from "./page.module.css"
export default function CardInfo() {
  return (
    <div className={styles.cardInfo}>
        <span className={styles.heading}>ملخص الإستشارة</span>
        <div className={styles.row}>
            <div className={styles.col}>
                <span>استشاؤة هاتفية</span>
                <span>المدة : حتى الاربعاء</span>
                <span>الجلسات : 1</span>
            </div>
            <span className={styles.price}>299.00 EGY</span>
        </div>
        <div className={styles.col}>
            <div className={styles.row}>
                <span>الاجمالى الجزئى</span>
                <span>299.00 EGY</span>
            </div>
            <div className={styles.row}>
                <span>ضريبة قيمة مضافة (10%)</span>
                <span>29.00</span>
            </div>
            <div className={`${styles.row} ${styles.totalParent}`}>
                <span className={styles.total}>الإجمالي</span>
                <span className={styles.total}>2100 EGY</span>
            </div>
        </div>
    </div>
  )
}

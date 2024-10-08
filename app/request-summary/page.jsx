import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
export default function RequestSummary() {
  return (
    <div className={styles.requestSummary}>
      <section>
        <h2 className={styles.heading}>ملخص الطلب</h2>
        <div className={styles.buttons}>
          <div >
            <button>
              العودة إلي الصفحة الرئيسية
              <Image src="/assets/icons/form/arrow-left-black.png" alt="Cupon Icon" width={14} height={14} />
            </button>
            <button>
              حسابى
              <Image src="/assets/icons/form/arrow-left-white.png" alt="Cupon Icon" width={14} height={14} />
            </button>
          </div>
          <button>
            طباعة
            <Image src="/assets/icons/form/printer.png" alt="Cupon Icon" width={24} height={24} />
          </button>
        </div>

      </section>

      <section className={styles.summary}>
      <div className={styles.parent}>
      <span>الطلب #0000818</span>
        <div>
          <table>
            <thead>
              <tr>
                <th>الخدمة</th>
                <th>السعر</th>
                <th>الاجمالى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>إستشارة هاتفية</td>
                <td>EGP 299.00</td>
                <td>EGP 299.00</td>
              </tr>
              <tr>
                <td>الإجمالي الفرعي</td>
                <td></td>
                <td>EGP 299.00</td>
              </tr>
              <tr>
                <td >تفاصيل الضريبة</td>
                <td></td>
                <td>EGP 29.90</td>
              </tr>
              <tr>
                <td>ضريبة (10%)</td>
                <td>
                </td>
                <td>EGP 299.00</td>

              </tr>
              <tr>
                <td>إجمالي الضريبة</td>
                <td></td>
                <td>EGP 299.00</td>
              </tr>

              <tr>
                <td>إجمالي الفاتورة</td>
                <td></td>
                <td>EGP 328.90</td>
              </tr>
              <tr>
                <td>المبلغ المدفوع</td>
                <td></td>
                <td>EGP 328.90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      </section>
    </div>
  )
}

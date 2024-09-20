import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

const BranchContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <div className={styles.formPage}>
        <h2>استمارة التواصل </h2>
        <form action="">
          <div className={styles.names}>
            <div className={styles.inp}>
              <label htmlFor="firstName" className={styles.hiddenLabel}>الاسم الاول</label>
              <input id="firstName" type="text" placeholder="الاسم الاول" />
              <Image
                src="/assets/icons/branches/user.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
            <div className={styles.inp}>
              <label htmlFor="lastName" className={styles.hiddenLabel}>اسم العائلة</label>
              <input id="lastName" type="text" placeholder="اسم العائلة" />
              <Image
                src="/assets/icons/branches/user.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
          </div>
          <div className={styles.inp}>
            <label htmlFor="email" className={styles.hiddenLabel}>البريد الالكتروني</label>
            <input id="email" type="text" placeholder="البريد الالكتروني" />
            <Image
              src="/assets/icons/branches/email.png"
              width={24}
              height={24}
              alt="email icon"
            />
          </div>
          <div className={styles.inp}>
            <label htmlFor="phone" className={styles.hiddenLabel}>رقم الهاتف</label>
            <input id="phone" type="text" placeholder="رقم الهاتف" />
            <Image
              src="/assets/icons/branches/phone.png"
              width={24}
              height={24}
              alt="phone icon"
            />
          </div>
          <select name="" id="clientCategory">
            <option value="فئة العميل" disabled selected>
              فئة العميل
            </option>
            <option value="أفراد">أفراد</option>
            <option value="شركات ومؤسسات">شركات ومؤسسات</option>
          </select>

          <div className={styles.inp}>
            <label htmlFor="message" className={styles.hiddenLabel}>اكتب رسالتك هنا</label>
            <textarea id="message" placeholder="اكتب رسالتك هنا"></textarea>
          </div>
          <div className={styles.checkBox}>
            أوافق على سياسة الخصوصية
            <input type="checkbox" />
          </div>
          <button type="submit">
            إرسال استمارة التواصل
            <Image
              src="/assets/icons/branches/arrow-left.png"
              alt="Arrow Left Small"
              width={26}
              height={26}
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default BranchContactForm;

"use client";
import styles from "@/components/branches/branches.module.css";
import Image from "next/image";
const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <div className={styles.formPage}>
        <h2>استمارة التواصل </h2>
        <form action="">
          <div className={styles.names}>
            <div className={styles.inp}>
              <input type="text" placeholder="الاسم الاول" />
              <Image
                src="/assets/icons/branches/user.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
            <div className={styles.inp}>
              <input type="text" placeholder="اسم العائلة" />
              <Image
                src="/assets/icons/branches/user.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="البريد الالكتروني" />
            <Image
              src="/assets/icons/branches/email.png"
              width={24}
              height={24}
              alt="email icon"
            />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="رقم الهاتف" />
            <Image
              src="/assets/icons/branches/phone.png"
              width={24}
              height={24}
              alt="phone icon"
            />
          </div>
          <select name="" id="">
            <option value="فئة العميل" disabled selected>
              فئة العميل
            </option>
            <option value="أفراد">أفراد</option>
            <option value="شركات ومؤسسات">شركات ومؤسسات</option>
          </select>

          <div className={styles.inp}>
            <textarea name="" id="" placeholder="اكتب رسالتك هنا"></textarea>
          </div>
          <div className={styles.checkBox}>
            أوافق على سياسة الخصوصية
            <input type="checkbox" />
          </div>
          <button>
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

export default ContactForm;

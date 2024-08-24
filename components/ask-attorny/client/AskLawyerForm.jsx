"use client";
import styles from "@/components/ask-attorny/ask-attrony.module.css";
import Image from "next/image";
const AskLawyerForm = () => {
  return (
    <section className={styles.askLawyerForm}>
      <div className={styles.formPage}>
        <h2>إستمارة التوظيف</h2>
        <form action="">
          <div className={styles.names}>
            <div className={styles.inp}>
              <input type="text" placeholder="الاسم الاول" />
              <Image
                src="/assets/icons/askattorny/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
            <div className={styles.inp}>
              <input type="text" placeholder="اسم العائلة" />
              <Image
                src="/assets/icons/askattorny/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="البريد الالكتروني" />
            <Image
              src="/assets/icons/askattorny/email.png"
              width={24}
              height={24}
              alt="email icon"
            />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="رقم الهاتف" />
            <Image
              src="/assets/icons/askattorny/phone.png"
              width={24}
              height={24}
              alt="phone icon"
            />
          </div>
          <select name="" id="">
            <option value="عنوان الاستفسار" selected disabled>
              عنوان الاستفسار 
            </option>
          </select>
          <select name="" id="">
            <option value="فئة العميل" selected disabled>
               فئة العميل
            </option>
          </select>
          <div className={styles.inp}>
            <input type="text" name="" id="" placeholder="كيف سمعت عنا؟"/>
            <span>?</span>
          </div>
          <div className={styles.inp}>
            <textarea name="" id="" placeholder="اكتب استفسارك القانوني هنا"></textarea>
          </div>
         
          <div className={styles.checkBox}>
            أوافق على سياسة الخصوصية
            <input type="checkbox" />
          </div>
          <button>
            إرسال
            <Image
              src="/assets/icons/askattorny/arrow-left.png"
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

export default AskLawyerForm;

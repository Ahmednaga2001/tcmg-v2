"use client"
import styles from "@/components/establish/establish.module.css";
import Image from "next/image";
const RequestLawyer = () => {
  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
    <h2>استمارة تأسيس الشركات</h2>
        <form action="">
          <div className={styles.names}>
            <div className={styles.inp}>
              <input type="text" placeholder="الاسم الاول" />
              <Image
                src="/assets/icons/establish/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
            <div className={styles.inp}>
              <input type="text" placeholder="اسم العائلة" />
              <Image
                src="/assets/icons/establish/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="البريد الالكتروني" />
            <Image
              src="/assets/icons/establish/email.png"
              width={24}
              height={24}
              alt="email icon"
            />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="رقم الهاتف" />
            <Image
              src="/assets/icons/establish/phone.png"
              width={24}
              height={24}
              alt="phone icon"
            />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="عدد الشركاء" />
          </div>
          <select name="" id="">
            <option value="نوع الشركة" disabled selected>
              نوع الشركة
            </option>
            <option value="أفراد">أفراد</option>
            <option value="شركات ومؤسسات">شركات ومؤسسات</option>
          </select>
          <div className={styles.inp}>
            <input type="text" placeholder="رأس المال" />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="المقر" />
          </div>
          <div className={styles.inp}>
            <textarea
              name=""
              id=""
              placeholder="اكتب رسالتك هنا"
            ></textarea>
          </div>
          <div className={styles.checkBox}>
          أوافق على سياسة الخصوصية
            <input type="checkbox" />
          </div>
          <span>
          إرسال           
           <Image
              src="/assets/icons/establish/arrow-left.png"
              alt="Arrow Left Small"
              width={26}
              height={26}
            />
          </span>
        </form>
      </div>
    </section>
  );
};

export default RequestLawyer;

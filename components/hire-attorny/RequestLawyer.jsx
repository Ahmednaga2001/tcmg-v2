"use client"
import styles from "@/components/hire-attorny/hireattorny.module.css";
import Image from "next/image";
const RequestLawyer = () => {
  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
        <h2>استمارة لطلب توكيل محامي متخصص</h2>
        <form action="">
          <div className={styles.names}>
            <div className={styles.inp}>
              <input type="text" placeholder="الاسم الاول" />
              <Image
                src="/assets/icons/hireattorny/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
            <div className={styles.inp}>
              <input type="text" placeholder="اسم العائلة" />
              <Image
                src="/assets/icons/hireattorny/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="البريد الالكتروني" />
            <Image
              src="/assets/icons/hireattorny/email.png"
              width={24}
              height={24}
              alt="email icon"
            />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="رقم الهاتف" />
            <Image
              src="/assets/icons/hireattorny/phone.png"
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
          <select name="" id="">
            <option value="اختر المكتب" selected disabled>
              اختر المكتب
            </option>
          </select>
          <select name="" id="">
            <option value="التخصص" selected disabled>
              التخصص
            </option>
          </select>
          <div className={styles.inp}>
            <textarea
              name=""
              id=""
              placeholder="ما هي قضيتك المراد توكيل محامي لها؟"
            ></textarea>
           <span>?</span>
          </div>
          <div className={styles.checkBox}>
          أوافق على سياسة الخصوصية
            <input type="checkbox" />
          </div>
          <span>
          إرسال           
           <Image
              src="/assets/icons/hireattorny/arrow-left.png"
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

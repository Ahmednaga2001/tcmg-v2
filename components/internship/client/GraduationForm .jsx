"use client";
import styles from "@/components/internship/internship.module.css";
import Image from "next/image";
const GraduationForm = () => {
  return (
    <section className={styles.graduationForm}>
      <div className={styles.formPage}>
        <h2>استمارة لطلب توكيل محامي متخصص</h2>
        <form action="">
          <div className={styles.names}>
            <div className={styles.inp}>
              <input type="text" placeholder="الاسم الاول" />
              <Image
                src="/assets/icons/internship/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
            <div className={styles.inp}>
              <input type="text" placeholder="اسم العائلة" />
              <Image
                src="/assets/icons/internship/person.png"
                width={24}
                height={24}
                alt="person icon"
              />
            </div>
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="البريد الالكتروني" />
            <Image
              src="/assets/icons/internship/email.png"
              width={24}
              height={24}
              alt="email icon"
            />
          </div>
          <div className={styles.inp}>
            <input type="text" placeholder="رقم الهاتف" />
            <Image
              src="/assets/icons/internship/phone.png"
              width={24}
              height={24}
              alt="phone icon"
            />
          </div>
          <select name="" id="">
            <option value="اختر المكتب" selected disabled>
              اختر المكتب
            </option>
          </select>

          <div className={styles.inp}>
            <input type="text" placeholder="منطقة السكن الحالى / المحافظة" />
            <Image
              src="/assets/icons/internship/location.png"
              width={24}
              height={24}
              alt="location icon"
            />
          </div>
          <div className={styles.inp}>
            <textarea name="" id="" placeholder="كيف سمعت عنا؟"></textarea>
            <span>?</span>
          </div>
          <div className={styles.file}>
            <div className={styles.right}>
              <span>قم برفع سيرتك الذاتية</span>
              <span>( ارفع ملف مدعوم وواضح بحد اقصي 15ميجا )</span>
            </div>
            <input type="file" id="file-upload" className={styles.fileInput} />
            <Image
              src="/assets/icons/internship/Vector.png"
              width={24}
              height={24}
              alt="location icon"
            />
          </div>
          <div className={styles.checkBox}>
            أوافق على سياسة الخصوصية
            <input type="checkbox" />
          </div>
          <button>
            إرسال
            <Image
              src="/assets/icons/internship/arrow-left.png"
              alt="Arrow Left Small"
              width={26}
              height={26}
            />
          </button>
        </form>
      </div>
      <div className={styles.emailContact}>
        <p>
          بريد التواصل للمنحة الصيفية  لطلاب السنة الثالثة والرابعة بكلية الحقوق{" "}
        </p>
        <a href="mailto:Careers@tcmglaw.com">Careers@tcmglaw.com</a>
      </div>
    </section>
  );
};

export default GraduationForm;

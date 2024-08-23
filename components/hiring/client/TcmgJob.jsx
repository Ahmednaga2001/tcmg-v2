import styles from "@/components/hiring/hiring.module.css"
import Image from "next/image"
const TcmgJob = () => {
  return (
    <section className={styles.tcmgJob}>
      <div className={styles.parent}>
       <h3>تبحث عن فرصة توظيف في
       TCMG</h3>
        <form action="">
        <div className={styles.selectParent}>
        <select name="" id="">
            <option value="المسمى الوظيفى" disabled selected>المسمى الوظيفى</option>
            <option value="خدمات الأعمال">خدمات الأعمال</option>
            <option value="معاون مستوى مبتدئ">معاون مستوى مبتدئ</option>
            <option value="معاون ذو خبرة">معاون ذو خبرة</option>
            <option value="تدريب">تدريب</option>
            <option value="محامى متدرب">محامى متدرب</option>
          </select>
          <select name="" id="">
            <option value="الموقع" disabled selected>الموقع</option>
            <option value="القاهرة">القاهرة</option>
            <option value="الرياض">الرياض</option>
            <option value="دبى">دبى</option>
            <option value="تشغندو">تشغندو</option>
          </select>
        </div>
        <button>
            عرض النتائج
            <Image
              src="/assets/icons/internship/arrow-left.png"
              alt="Arrow Left Small"
              width={26}
              height={26}
            />
          </button>
        </form>
      </div>
    </section>
  )
}

export default TcmgJob

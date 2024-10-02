import Image from "next/image";
import styles from "./page.module.css"
const LegalInstructions = () => {
  return (
    <section className={styles.legalinstructions}>
      <h2>إجراءات توكيل محامي من المجموعة</h2>
      <div className={styles.boxs}>
        <div className={styles.box}>
          <div className={styles.boxRight}>
            <h4>
              حدد ما هي مشكلتك القانونية, وفي أي فرع تندرج تحته هذه المشكلة.
            </h4>
          </div>
          <div className={styles.boxLeft}>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg1}
              alt="circle image"
              width={30}
              height={30}
            />
            <div className={styles.line}></div>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg2}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxLeft}>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg1M}
              alt="circle image"
              width={30}
              height={30}
            />
           <div className={styles.lineM}></div>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg2M}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.boxRight}>
            <h4>
              اختر تخصص المحامي الملائم لمشكلتك من المحامين خلال هذه الصفحة.
            </h4>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxRight}>
            <h4>
              اضغط على زر ملء الاستمارة آخر الصفحة؛ ليوجِّهك إلى فورم عمل توكيل
              محامي.
            </h4>
          </div>
          <div className={styles.boxLeft}>
            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg1}
              alt="circle image"
              width={30}
              height={30}
            />
            <div className={styles.line}></div>

            <Image
              src="/assets/icons/hireattorny/circle.png"
              className={styles.cirecleImg2}
              alt="circle image"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.boxM}>
          <div className={styles.boxRightM}>
            <h4>
              املأ كافة بياناتك في استمارة التوكيل وحدد نوع مشكلتك, واحجز
              الموعد.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalInstructions;

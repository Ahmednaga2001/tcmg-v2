import styles from "@/components/about/About.module.css";
import Image from "next/image";

import Link from "next/link";
import AboutSlider from "@/components/about/AboutSlider";
import Vision from "@/components/about/Vision";
import Team from "@/components/about/Team";
import Owner from "@/components/about/Owner";
import BuisnessHistory from "@/components/about/BuisnessHistory";

function AboutUs() {
  return (
    <div className={styles.about}>
      <AboutSlider />
      <section className={styles.absection}>
        <div className={styles.aboutparent}>
          <div className={styles.aboutcontent}>
            <h2>من هي المجموعة التجارية والبحرية للمحاماة ؟</h2>
            <p>
              المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية, هي أحد
              مكاتب المحاماة الكبيرة في مصر صاحبة الريادة في مجال المحاماة
              والقانون بخبرة محامين ومستشارين بما يزيد عن 30 عامٍ من التعلم
              والممارسة, وتحقيق سلسلة لا تنتهي من النجاحات المتوالية, بما يثبت
              كفائتنا في تطبيق القانون ونشر العدالة في مصر والشرق الأوسط أجمع.
            </p>
          </div>
          <div className={styles.boximg}>
            <Image
              src="/assets/symbols/about/topL.png"
              alt="Group for Commercial and Maritime Law logo"
              width={140}
              height={141}
              className={styles.img}
            />
            <Image
              src="/assets/symbols/about/bottomL.png"
              alt="Symbol representing legal excellence"
              width={140}
              height={141}
              className={styles.img2}
            />
          </div>
        </div>
      </section>

      <BuisnessHistory />

      <Vision />

      <section className={styles.teamSection}>
        <h2 className={styles.headingTeam}>
          فريقنا من المحامين والمستشارين الخبراء
        </h2>

        <div className={styles.team}>
          <p>
            فريق العمل الناجح هو الإنجاز الأكثر أهمية في أي عمل وبشكل خاص في
            مجال المحاماة, فهو يمثل فرصة مميزة لتبادل الخبرات ومشاركة المعلومات
            الحديثة, وتحقيق أكبر عدد ممكن من الإنجازات بما يحقق من هدف مكاتبنا
            وتوصيل رسالة العدالة لأكبر عدد ممكن من المواطنين المصريين والعرب
            أجمعين, يضم مكتبنا نخبة من أكبر وأشهر محامين مصر خبرة في شتى مجالات
            القانون, مستعدون لتقديم أفضل ما لديهم دعمًا لعملائنا الكرام بتقديم
            أنسب الحلول لجميع المشاكل القانونية بما فيها الأكثر تعقيدًا.
          </p>
          <Link href="#" className={styles.abLink}>
            مشاهدة كامل فريق العمل
            <Image
              src="assets/icons/about/arrow-left.svg"
              alt="Arrow Left Small"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </section>

      <Team />
      <Owner />

      <section className={styles.numbers}>
        <div>
          <span>7</span>
          <p>مكاتب محاماه اقليمية</p>
        </div>
        <div>
          <span>+50</span>
          <p>سنين الخبرة</p>
        </div>
        <div>
          <span>40</span>
          <p>عدد الخبراء</p>
        </div>
        <div>
          <span>300</span>
          <p>العملاء</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

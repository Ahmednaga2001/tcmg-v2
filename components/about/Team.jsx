import styles from "@/components/about/About.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <section className={styles.section}>
      <div className={styles.teamParent}>
        <div className={styles.teamCard}>
          <div className={styles.teamCardContainer}>
            <span className={styles.teamCardIcon}>
              <Image
                src="assets/symbols/about/hand.svg"
                width={30}
                height={30}
                alt="Symbol of a hand"
              />
            </span>
            <p>
              العدالة ليست مجرد مفهوم مجرد, بل هي هدف ومسعى أرغب بتحقيقه على
              أكبر نطاق ممكن؛ فأنا أمثل صوت المظلوم بالدفاع عنه ضد أي اعتداء
              خارجي؛ استرجاعًا لحقوقه المسلوبة, وحفاظًا عليها.
            </p>
          </div>
          <div className={styles.teamCardBottomData}>
            <div>
              <p>الاستاذ محمد أبو ضيف</p>
              <span>الرئيس التنفيذي</span>
            </div>
            <Image
              src="/assets/images/about/mohamed.png"
              width={60}
              height={60}
              alt="Profile picture of Mohamed Abu Deif"
            />
          </div>
        </div>
        <div className={styles.teamCard}>
          <div>
            <div className={styles.teamCardTopData}>
              <div>
                <p>أستاذة سهى خيري</p>
                <span>محامية بنوك</span>
              </div>
              <Image
                src="/assets/images/about/soha.png"
                width={60}
                height={60}
                alt="Profile picture of soha"
              />
            </div>
            <div className={styles.teamCardContainer}>
              <span className={styles.teamCardIcon}>
                <Image
                  src="assets/symbols/about/hand.svg"
                  width={30}
                  height={30}
                  alt="Symbol of a hand"
                />
              </span>
              <p>
                مهنة المحاماة ليست مجرد تقاضي كما يعتقد البعض؛ فأنا أسعى جاهدةً
                لتَولِّي مهمة إتمام الإجراءات القانونية مع البنوك والمصارف,
                بمساعدة جميع الكيانات من الأفراد والشركات والمؤسسات في مسائلها
                المالية وإنجازها تمامًا كما يقول القانون.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.teamCard}>
          <div className={styles.teamCardContainer}>
            <span className={styles.teamCardIcon}>
              <Image
                src="assets/symbols/about/hand.svg"
                width={30}
                height={30}
                alt="Symbol of a hand"
              />
            </span>
            <p>
              أمثل الدعم القانوني من الجانبين في التماثل دفاعًا عن حقوق الشركات
              خاصة الصغيرة, وتقديم الدعم والمتابعة الدائمة منذ بداية تأسيس
              الشركة حتى الانتهاء من إتمام الإجراءات القانونية وأمور التوثيق؛
              ساعيًا لمساعدة رجال الأعمال والمبتدئين على ممارسة عملهم بناءً على
              أساس قانوني راسخ.
            </p>
          </div>
          <div className={styles.teamCardBottomData}>
            <div>
              <p>أستاذ كرم موريس</p>
              <span>محامي شركات</span>
            </div>
            <Image
              src="/assets/images/about/Karim.png"
              width={60}
              height={60}
              alt="Profile picture of Karim Mores"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

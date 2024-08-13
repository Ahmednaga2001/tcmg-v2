import Image from "next/image";
import styles from "@/components/branches/branches.module.css";
import CardImg from "@/components/branches/CardImg";
import ContactInformation from "@/components/branches/ContactInformation";
import ContactNumbers from "@/components/branches/ContactNumbers";
import ContactForm from "@/components/branches/ContactForm";

function Branches() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h2>فروع المكتب</h2>
        <div className={styles.content}>
          <p>
            تقوم المجموعة التجارية والبحرية للمحاماة بتقديم حلولاً قانونيةً
            رائدة لكل من يبحث عن عناوين مكاتب المحامين في مصر والدول الاخرى لحل
            قضيته. بفروعنا المتميزة والمنتشرة في مختلف المدن؛ نقوم بتوفير سهولة
            الوصول إلى خدماتنا القانونية المتكاملة. من القانون التجاري إلى
            العقارات، ومن قضايا العمل إلى الدعاوى الشخصية، فريقنا من المحامين
            المتخصصين مستعد لتقديم الدعم القانوني الذي تحتاجه بمعايير عالمية.
            كفاك بحثاً عن عناوين مكاتب المحامين في مصر، وزورنا في أي من فروعنا
            لتجدوا شريككم القانوني الذي سيقف إلى جانبكم في كل الأوقات، ويضمن لكم
            تحقيق أفضل نتائج ممكنة بكل بساطة.
          </p>
          <Image
            src="/assets/icons/branches/icon1.png"
            width={192.4}
            height={86.11}
            alt="Branch Icon"
          />
        </div>
      </section>

      <section className={styles.locations}>
        <div className={styles.egyLocations}>
          <h2>جمهورية مصر العربية</h2>
          <div className={styles.parent}>
            <div className={styles.parentLocations}>
              <div className={styles.locationOne}>
                <h4>العباسية (الفرع الرئيسي)</h4>
                <p>
                  5 أبراج الملتقى - ميدان العباسية - بجانب محكمة شمال القاهرة
                  الابتدائية
                </p>
                <span>11517</span>
                <span>القاهرة - مصر</span>
              </div>
              <div className={styles.locationTwo}>
                <h4>رمسيس</h4>
                <p>83 برج مصر للتأمين - شارع رمسيس - أمام سنترال رمسيس</p>
                <span>11522</span>
                <span>القاهرة - مصر</span>
              </div>
            </div>
            <div className={styles.cardImg}>
              <div className={styles.overlay}></div>
              <CardImg
                classStyle="egyImg"
                w={436}
                h={500}
                path="/assets/images/branches/Egypt.png"
                alt="Egypt Locations"
              />
            </div>
          </div>
        </div>

        <div className={styles.saudiaLocation}>
          <h2>المملكة العربية السعودية</h2>
          <div className={styles.parent}>
            <div className={styles.cardImg}>
              <div className={styles.overlay}></div>
              <CardImg
                classStyle="egyImg"
                w={536}
                h={304}
                path="/assets/images/branches/alriyadh.png"
                alt="alriyadh Locations"
              />
            </div>
            <div className={styles.parentLocations}>
              <div className={styles.location}>
                <h4>الرياض</h4>
                <p>(بالتعاون مع الجبار و المزارقة للمحاماة)</p>
                <span>مخرج 7 - طريق عائمان بن عفان</span>
                <span>11536</span>
                <span>الرياض - المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dubaiLocation}>
          <h2>الإمارات العربية المتحدة</h2>
          <div className={styles.parent}>
            <div className={styles.cardImg}>
              <div className={styles.overlay}></div>
              <CardImg
                classStyle="egyImg"
                w={536}
                h={304}
                path="/assets/images/branches/dubai.png"
                alt="dubai Locations"
              />
            </div>
            <div className={styles.parentLocations}>
              <div className={styles.location}>
                <h4>دبى</h4>
                <p>(بالتعاون مع زايد الشحي للمحاماة)</p>
                <span>مبنى المسعود - شارع آل مكتوم - بورسعيد</span>
                <span>3669</span>
                <span>دبي – الإمارات العربية المتحدة</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chinaLocation}>
          <h2>الصين</h2>
          <div className={styles.parent}>
            <div className={styles.parentLocations}>
              <div className={styles.location}>
                <h4>دبى</h4>
                <p>(بالتعاون مع زايد الشحي للمحاماة)</p>
                <span>مبنى المسعود - شارع آل مكتوم - بورسعيد</span>
                <span>3669</span>
                <span>دبي – الإمارات العربية المتحدة</span>
              </div>
            </div>
               <div className={styles.cardImg}>
              <div className={styles.overlay}></div>
              <CardImg
                classStyle="egyImg"
                w={536}
                h={304}
                path="/assets/images/branches/china.png"
                alt="china Locations"
              />
            </div>
          </div>
        </div>

      </section>
      <ContactInformation/>
<ContactNumbers/>
<ContactForm/>
    </div>
  );
}

export default Branches;

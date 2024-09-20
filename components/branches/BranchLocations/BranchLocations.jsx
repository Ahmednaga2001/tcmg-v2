import CardImg from "../CardImg";
import styles from "@/components/branches/branches.module.css";
const BranchLocations = () => {
  return (
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
              w={551}
              h={647}
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
              w={536.32}
              h={304}
              path="/assets/images/branches/alriyadh.png"
              alt="Alriyadh Locations"
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
              w={536.32}
              h={304}
              path="/assets/images/branches/dubai.png"
              alt="Dubai Locations"
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
              w={536.32}
              h={304}
              path="/assets/images/branches/china.png"
              alt="China Locations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocations;

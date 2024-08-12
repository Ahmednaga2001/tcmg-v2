import styles from "@/components/branches/branches.module.css"
import CardImg from "./CardImg"
const ContactNumbers = () => {
  return (
    <section>
      <div className={styles.egyLocations}>
          <h2>جمهورية مصر العربية</h2>
          <div className={styles.parent}>
            <div className={styles.parentLocations}>
              <div className={styles.locationOne}>
                <h4>رقم الهاتف</h4>
                <a href="tel:+201276299998">201276299998+</a>
             
              </div>
             
            </div>
            <div className={styles.cardImg}>
              <div className={styles.overlay}></div>
              <CardImg
                classStyle="egyImg"
                w={335.33}
                h={475}
                path="/assets/images/branches/cairo.png"
                alt="Cairo Egypt Locations"
              />
            </div>
          </div>
        </div>
    </section>
  )
}
export default ContactNumbers

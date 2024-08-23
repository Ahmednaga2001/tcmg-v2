import AchieveSuccess from "@/components/hiring/AchieveSuccess";
import CareerJourney from "@/components/hiring/CareerJourney";
import CareerProgressSteps from "@/components/hiring/CareerProgressSteps";
import Accordion from "@/components/hiring/client/Accordion";
import TcmgJob from "@/components/hiring/client/TcmgJob";
import WhyChoose from "@/components/hiring/client/WhyChoose";
import styles from "@/components/hiring/hiring.module.css"
import Links from "@/components/join-us/Links";
function Hiring() {
  return (
    <div className={styles.page}>
        <section className={styles.hero}>
        <h1>
          بناء شراكات استراتيجية: اكتشف فرص التعاون والتواصل مع مكاتب TCMG
          للمحاماة لتحقيق النجاح المشترك
        </h1>
      </section> 

      <Links/>

      <AchieveSuccess/>

      <CareerJourney/>
      <CareerProgressSteps/>
      <WhyChoose/>
      <TcmgJob/>
      <Accordion/>

    </div>
  )
   
}

export default Hiring;

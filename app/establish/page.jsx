import Accordion from "@/components/establish/client/Accordion";
import EstablishHero from "@/components/establish/establishHero/EstablishHero";
import EstablishFeatures from "@/components/establish/client/establishFeatures/EstablishFeatures";
import styles from "./page.module.css"
import EstablishCompany from "@/components/establish/establishCompany/EstablishCompany";
import EstablishLegalServices from "@/components/establish/client/establishLegalService/EstablishLegalServices";
import EstablishAchievement from "@/components/establish/establishAchievement/EstablishAchievement";
import EstablishCompanyTypes from "@/components/establish/client/establishCompanyTypes/EstablishCompanyTypes";
import Slider from "@/components/shared/client/slider/Slider";
import EstablishForm from "@/components/establish/client/establishForm/EstablishForm";
export const metadata={
  title : "Establish"
}
const sliderInfo = [
  {
    title: "تأسيس تأسيس شركة أحلامك .. مسؤوليتنا",
    desc: "المجموعة التجارية والبحرية للمحاماة وجهتك الأولي لبناء شركتك علي أساس قانوني قوي",
    imgPath: "/assets/images/establish/imgsliderone.png"
  },
  {
    title: "تأسيس تأسيس شركة أحلامك .. مسؤوليتنا",
    desc: "المجموعة التجارية والبحرية للمحاماة وجهتك الأولي لبناء شركتك علي أساس قانوني قوي",
    imgPath: "/assets/images/establish/imgslidertwo.png"
  },
  {
    title: "تأسيس تأسيس شركة أحلامك .. مسؤوليتنا",
    desc: "المجموعة التجارية والبحرية للمحاماة وجهتك الأولي لبناء شركتك علي أساس قانوني قوي",
    imgPath: "/assets/images/establish/imgsliderthree.png"
  },
];
function Establish() {
  return (
    <div className={styles.establishPage}>
      <EstablishHero/>
      <EstablishFeatures/>
      <EstablishCompany/>
    <EstablishLegalServices/>
    <EstablishAchievement/>
    <EstablishCompanyTypes/>
      <Slider data = {sliderInfo} name='est'/>
      <EstablishForm/>
      <Accordion />
    </div>
  );
}

export default Establish;

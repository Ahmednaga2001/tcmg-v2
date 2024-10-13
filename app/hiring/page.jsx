import PartnerWithExperts from "@/components/hiring/PartnerWithExperts/PartnerWithExperts";
import Accordion from "@/components/hiring/client/Accordion";
import HiringGraduationForm from "@/components/hiring/client/hiringGraduationForm/HiringGraduationForm";
import HiringTcmgJob from "@/components/hiring/client/hiringTcmgJob/HiringTcmgJob";
import HiringWhyChooseUs from "@/components/hiring/client/hiringWhyChooseUse/WhyChoose";
import HireingAchieveSuccess from "@/components/hiring/hireingAchieveSuccess/HireingAchieveSuccess";
import HiringCareerJourney from "@/components/hiring/hiringCareerJourney/HiringCareerJourney";
import HiringCareerProgressSteps from "@/components/hiring/hiringCareerProgressSteps/HiringCareerProgressSteps";
import HiringHero from "@/components/hiring/hiringHero/HiringHero";
import Team from "@/components/shared/client/Team/Team";
import Links from "@/components/shared/linksPagination/Links";
import styles from "./page.module.css";
export const metadata={
  title : "Hiring"
}
const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "محامي جنائي",
    img: "/assets/images/homePage/lawyers/هشام محمود.png",
  },
  {
    id: 3,
    name: "خلف حسين",
    category: "محامي مدني",
    img: "/assets/images/homePage/lawyers/خلف حسين.png",
  },
  {
    id: 4,
    name: "سهى خيري",
    category: "محامية بنوك",
    img: "/assets/images/homePage/lawyers/سهي خيري.png",
  },
  {
    id: 5,
    name: "كرم موريس",
    category: "محامي شركات",
    img: "/assets/images/homePage/lawyers/كرم موريس.png",
  },
];
function Hiring() {
  return (
    <div className={styles.hiringPage}>
      <HiringHero />

      <Links />
      <HireingAchieveSuccess />
      <HiringCareerJourney />

      <HiringCareerProgressSteps />
      <HiringWhyChooseUs />
      <PartnerWithExperts />
      {/* <Team lawyers={lawyers} /> */}
      <HiringTcmgJob />
      <HiringGraduationForm />
      <Accordion />
    </div>
  );
}

export default Hiring;

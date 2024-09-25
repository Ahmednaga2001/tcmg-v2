import PathToLegalExcellence from "@/components/internship/InternLgalExcellence/PathToLegalExcellence";
import InternHero from "@/components/internship/internHero/InternHero";
import InternChallenges from "@/components/internship/internChallenges/InternChallenges";
import InternOffer from "@/components/internship/client/internOffer/Offer";
import InternExperience from "@/components/internship/client/internOffer/InternExperience";
import InternAspirations from "@/components/internship/InternAspirations/InternAspirations";
import InternTcmg from "@/components/internship/client/internTcmg/InternTcmg";
import InternGraduationForm from "@/components/internship/client/internGraduationForm/InternGraduationForm";
import Accordion from "@/components/internship/client/accordion/Accordion";
import styles from "./page.module.css";
import Discover from "@/components/internship/discover/Discover";
import Links from "@/components/shared/linksPagination/Links";
export const metadata={
  title : "Internship",
}
function Internship() {
  return (
    <div className={styles.internPage}>
      <InternHero />
      <Links/>
      <Discover/>
      <PathToLegalExcellence />
      <InternChallenges />
      <InternOffer />
      <InternExperience />
      <InternAspirations />
      <InternTcmg/>
      <InternGraduationForm />
      <Accordion/>
    </div>
  );
}

export default Internship;

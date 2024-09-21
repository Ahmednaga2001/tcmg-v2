import styles from "./page.module.css";

import Accordion from "@/components/legal-services/client/Accordion";
import LegalServicesHero from "@/components/legal-services/legalServicesHero/LegalServicesHero";
import LegalServicesSuccessFactor from "@/components/legal-services/legalServicesSuccessFactor/legalServicesSuccessFactor";
import LegalServiceOurOfferings from "@/components/legal-services/legalServiceOurOfferings/LegalServiceOurOfferings";
import LegalServicesSectors from "@/components/legal-services/legalServicesSectorAndPractices/LegalServicesSectors";
import LegalServicesPractices from "@/components/legal-services/legalServicesSectorAndPractices/LegalServicesPractices";
export const metadata = {
  title: 'Legal-Services',
}
function LegalServices() {
  return (
    <div className={styles.legalServicesPage}>
     <LegalServicesHero/>
     <LegalServiceOurOfferings/>
     <LegalServicesSuccessFactor/>
      <LegalServicesPractices/>
      <LegalServicesSectors/>
      <Accordion/>
    </div>
  );
}

export default LegalServices;

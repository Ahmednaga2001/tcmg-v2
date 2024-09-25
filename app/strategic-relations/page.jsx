import Links from "@/components/shared/linksPagination/Links";
import OurFeatures from "@/components/strategic-relations/client/features/OurFeatures";
import JoinOurLegalNetwork from "@/components/strategic-relations/OurLegalNetwork/JoinOurLegalNetwork";
import RelationAbout from "@/components/strategic-relations/relationAbout/RelationAbout";
import TcmgPartnership from "@/components/strategic-relations/tcmgPartnership/TcmgPartnership";
import styles from "./page.module.css"
import RelationHero from "@/components/strategic-relations/relationHero/RelationHero";
export const metadata={
  title : "Strategic Relations",
}
function StrategicRelations() {
  return (
    <div className={styles.relationPage}>
      
      <RelationHero/>
      <Links/>
<JoinOurLegalNetwork/>
   <RelationAbout/>
      <OurFeatures />

     <TcmgPartnership/>

      
    </div>
  );
}

export default StrategicRelations;

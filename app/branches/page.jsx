import styles from "./page.module.css";
import ContactInformation from "@/components/branches/ContactInformation";
import ContactNumbers from "@/components/branches/ContactNumbers";
import BranchHero from "@/components/branches/branchHero/BranchHero";
import BranchLocations from "@/components/branches/BranchLocations/BranchLocations";
import BranchContactForm from "@/components/branches/client/branchContactForm/BranchContactForm";
export const metadata = {
  title: "Branches",
};

function Branches() {
  return (
    <div className={styles.branchPage}>
      <BranchHero />

     <BranchLocations/>
      <ContactInformation />
      <ContactNumbers />
      <BranchContactForm />
    </div>
  );
}

export default Branches;

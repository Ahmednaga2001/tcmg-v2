import Accordion from "@/components/establish/client/Accordion";
import Countries from "@/components/establish/Countries";
import DreamCompany from "@/components/establish/client/DreamCompany";
import LegalServices from "@/components/establish/LegalServices";
import StartCompany from "@/components/establish/StartCompany";
import TypesofCompanies from "@/components/establish/client/TypesofCompanies";
import UniqueServiceFeatures from "@/components/establish/client/UniqueServiceFeatures";
import CompanyEstablishForm from "@/components/establish/client/CompanyEstablishForm";
import Link from "next/link";
import Image from "next/image";
import EstablishHero from "@/components/establish/establishHero/EstablishHero";
import EstablishFeatures from "@/components/establish/client/establishFeatures/EstablishFeatures";
import styles from "./page.module.css"
import EstablishCompany from "@/components/establish/establishCompany/EstablishCompany";
export const metadata={
  title : "Establish"
}
function Establish() {
  return (
    <div className={styles.establishPage}>
      <EstablishHero/>
      <EstablishFeatures/>
      <EstablishCompany/>
      <LegalServices />
      <Countries />
      <TypesofCompanies />
      <DreamCompany />
      <CompanyEstablishForm/>
      <Accordion />
    </div>
  );
}

export default Establish;

"use client";
import styles from "@/components/legal-consultations/legalconsultations.module.css";
import CompaniesServices from "../CompaniesServices";
import IndividualServices from "../IndividualServices";
import { useState } from "react";

const ReserveConsultation = () => {
  const [view, setView] = useState("companies");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <section className={styles.reserveConsultation}>
      <h2>بادر بحجز استشارتك الآن مع أفضل المتخصصين في مصر!</h2>
      <div className={styles.parentButtons}>
        <div className={styles.buttons}>
          <button
            onClick={() => handleViewChange("individual")}
            className={view === "individual" ? styles.active : ""}
          >
            أفراد
          </button>
          <button
            onClick={() => handleViewChange("companies")}
            className={view === "companies" ? styles.active : ""}
          >
            شركات
          </button>
        </div>
      </div>

      {view === "individual" ? <IndividualServices /> : null}
      {view === "companies" ? <CompaniesServices /> : null}
    </section>
  );
};

export default ReserveConsultation;
// import styles from "@/components/about/About.module.css";
import styles from "./page.module.css";

import Image from "next/image";

import Link from "next/link";
import AboutSection from "@/components/about/aboutSection/AboutSection";
import AboutMilestones from "@/components/about/aboutMilestonesSection/AboutMilestonesSection";
import AboutVision from "@/components/about/AboutVision/AboutVision";
import AboutOurExperts from "@/components/about/aboutOurExperts/AboutOurExperts";
import AboutTeam from "@/components/about/aboutTeam/AboutTeam";
import AboutOwner from "@/components/about/aboutOwner/AboutOwner";
import AboutMetrics from "@/components/about/KeyMetrics/AboutMetrics";
import AboutSlider from "@/components/about/client/aboutSlider/AboutSlider";
export const metadata = {
  title: "About",
};
function AboutUs() {
  return (
    <div className={styles.aboutPage}>
      <AboutSlider />
      <AboutSection />

      <AboutMilestones />

      <AboutVision />

      <AboutOurExperts />

      <AboutTeam />
      <AboutOwner />
      <AboutMetrics />
    </div>
  );
}

export default AboutUs;

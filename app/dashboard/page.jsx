import React from 'react';
import styles from "./page.module.css";
import AccountInfo from '@/components/dashboard/accountInfo/AccountInfo';
import RecentConsultations from '@/components/dashboard/recentConsultations/RecentConsultations';
import SideBar from '@/components/dashboard/sideBar/SideBar';

export default function Page() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <SideBar />
        <section>
      <AccountInfo />
      <RecentConsultations />

        </section>
      </div>
    </div>
  );
}

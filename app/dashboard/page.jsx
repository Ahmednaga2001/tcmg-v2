import React from 'react';
import styles from "./page.module.css";
import AccountInfo from '@/components/dashboard/accountInfo/AccountInfo';
import RecentConsultations from '@/components/dashboard/recentConsultations/RecentConsultations';

export default function Page() {
  return (
    <div className={styles.dashboard}>
        <AccountInfo />
        <RecentConsultations />
    </div>
  );
}

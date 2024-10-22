import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
export default function ChooseLawyer({onNextStep}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNextStep(); // Trigger next step on form submission
      };
    return (
        <div className={styles.chooseLawyer}>
            <div className={styles.lawyerCard}>
                <div className={styles.cardContent}>
                    <div className={styles.heading}>
                        <span className={styles.bullet}></span>
                        <span className={styles.lawyerName}>هشام محمود</span>

                    </div>
                    <p className={styles.desc}>هشام محمود محامي جنايات متمرس ومرخص من وزارة العدل لديه خبرة في القانون الجنائي وقضايا الأموال العامة وقانون الأحوال الشخصية في مصر والترافع أمام المحاكم المصرية بخبرة تتجاوز ال ١٢ سنة، كما عُرف بكونه محامي جنائي محنك تمكن من حل العديد من القضايا المعقدة.</p>
                </div>
                <div className={styles.cardImg}>
                    <Image
                        src={"/assets/images/payment/أحمد السعيج 1.png"}
                        alt="title"
                        width={183}
                        height={203}
                        quality={100}
                    />
                </div>
            </div>
            <button className={styles.btn} onClick={handleSubmit}>
                المتابعة
                <Image  src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />

            </button>
        </div>
    )
}


"use client";
import { useState, useEffect } from 'react';
import styles from "@/components/ask-attorny/ask-attrony.module.css";
import AskLawyer from "@/components/ask-attorny/AskLawyer";
import ConnectwithLegalExpert from "@/components/ask-attorny/ConnectwithLegalExpert";
import About from "@/components/ask-attorny/About";
import AskLawyerForm from "@/components/ask-attorny/client/AskLawyerForm";
import Image from "next/image";

function AskAttorny() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling when popup is visible
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupVisible]);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>
          بناء شراكات استراتيجية: اكتشف فرص التعاون والتواصل مع مكاتب TCMG
          للمحاماة لتحقيق النجاح المشترك
        </h1>
      </section>
      
      {isPopupVisible && (
        <section className={styles.popup}>
          <div className={styles.popupContent}>
            <Image
              src="/assets/icons/askattorny/Questio.png"
              width={151}
              height={198}
              alt="question icon"
            />
            <p>
              اطرح علي أحد مستشاري المجموعة التجارية والبحرية استفسارك القانوني
              وسيتم الرد عليك في أقرب وقت ممكن.
            </p>
            <p>
              لا تكون او تنشيء هذه الخدمة اي علاقة قانونية بين المحامي و العميل أو
              موقعنا الإلكتروني
            </p>
            <p>
              يتم توفير هذه الخدمة "اسأل محامي" في هذا الموقع فقط لأولئك الذين قد
              يرغبون في معرفة معلومات قانونية عامة وهي ليست بديلاً عن الحصول على
              استشارة قانونية حول سؤال محدد من محامٍ مرخص.
            </p>
            <p>
              ​لا يؤدي إلى إنشاء أي علاقة قانونية رسمية بين المحامي والعميل أو بين
              موقعنا الإلكتروني أو انشاء أي علاقة أخرى مميزة أو سرية. وفقًا لذلك، لا
              تفصح لنا عن أي معلومات ترغب في أن تظل سرية أو خاصة. إذا كنت تنوي إرسال
              أي معلومات سرية عبر البريد الإلكتروني الخاص بتلك الخدمة الموضح اعلاه
              أو عن طريق نشر أي من المحتوى الخاص بك في هذه الصفحة او على موقعنا
              الإلكتروني، يجب عليك ان تفهم انك تفعل ذلك علي مسؤوليتك الخاصة ونحن
              "المجموعة التجارية والبحرية" غير مسؤولين عن اغفالك الكلي او الجزئي
              لذلك.
            </p>
            <button onClick={handleClosePopup}>
              تابع
              <Image
                src="/assets/icons/askattorny/arrow-left(1).png"
                alt="Arrow Left Small"
                width={26}
                height={26}
              />
            </button>
          </div>
        </section>
      )}

      <ConnectwithLegalExpert />
      <About />
      <AskLawyer />
      <AskLawyerForm />
    </div>
  );
}

export default AskAttorny;

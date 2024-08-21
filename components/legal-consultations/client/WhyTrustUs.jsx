"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";

const data = [
  {
    path: "/assets/images/legalconsultations/clients.png",
    title: "عدد العملاء السعداء",
    targetNumber: 3224,
  },
  {
    path: "/assets/images/legalconsultations/users.png",
    title: "عدد مستشارين المكتب",
    targetNumber: 3224,
  },
  {
    path: "/assets/images/legalconsultations/experiences.png",
    title: "سنوات الخبرة",
    targetNumber: 3224,
  },
];

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, targetNumber));
      }, 0.2); // Adjust interval duration as needed

      return () => clearInterval(interval);
    }
  }, [isVisible, count, targetNumber]);

  return <p ref={ref}>{count}+</p>;
};

const WhyTrustUs = () => {
  return (
    <section className={styles.whyUs}>
      <h2>لماذا تضع ثقتك بنا؟</h2>
      <p>
        توجد العديد من المكاتب القانونية الاستشارية بمصر ولكن TCMG تأتي على رأس القائمة بفضل جهود مستشاريها المتخصصين وعملائها السعداء بخدمة الاستشارات القانونية. وهذه بعض الإحصاءات المميزة حول المكتب:
      </p>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.path}
              width={169}
              height={170}
              alt={item.path}
            />
            <Counter targetNumber={item.targetNumber} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTrustUs;

"use client";
import styles from "./page.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
const data = [
  {
    path: "/assets/images/joinus/cairo.png",
    alt: "Cairo",
    title: "مصر - القاهرة",
  },
  {
    path: "/assets/images/joinus/saudia.png",
    alt: "Saudia",
    title: "السعودية - الرياض",
  },
  {
    path: "/assets/images/joinus/dubai.png",
    alt: "Dubai",
    title: "الامارات - دبي",
  },
  {
    path: "/assets/images/joinus/china.png",
    alt: "China",
    title: "الصين - تشنغدو",
  },
];
const JoinJobOpportunities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <section className={styles.jobOpportunities}>
      <div className={styles.right}>
        <h2>فرص وظيفية مميزة بانتظارك</h2>
        <p>
          اذا كنت تبحث عن وظائف خاليه للمحامين فبإمكانك الانضمام إلينا؛ فنحن
          نبحث عن محامين ومستشارين متحمسين يتطلعون إلى تحديات جديدة وفرص للنمو
          المهني. نحن لسنا مجرد مكتب قانوني، بل عائلة تضم أفراداً يسعون لبناء
          شبكة قانونية عالمية تتجاوز كل الحدود وتقدم خدمات مميزة. نحن هنا لتوفير
          بيئة داعمة ومحفزة تمكنك من تحقيق طموحاتك المهنية وتطوير مهاراتك. إذا
          كنت ترغب في الانضمام إلى مجتمعنا القانوني المميز، فأهلاً وسهلاً بك
          بيننا.
        </p>
      </div>
      <div className={styles.left}>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 2.8,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          
          modules={[EffectCoverflow,Autoplay]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {data.map((el, index) => (
            <SwiperSlide
              key={index}
              style={{
                // opacity: activeIndex === index ? 1 : .2,
                transition: "0.3s",
              }}
              className={styles.swiperSlide}
            >
              <div className={styles.content}>
                <Image src={el.path} width={364} height={295} alt={el.alt} />
                <p className={styles.jobTitle}>{el.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default JoinJobOpportunities;
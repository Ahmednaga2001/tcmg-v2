"use client"
import styles from "@/components/join-us/join-us.module.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from "next/image";
const data = [
    {
        path : "/assets/images/joinus/cairo.png",
        alt : "Cairo",
        title : "مصر - القاهرة"
    },
    {
        path : "/assets/images/joinus/saudia.png",
        alt : "Saudia",
        title : "السعودية - الرياض"
    },
    {
        path : "/assets/images/joinus/dubai.png",
        alt : "Dubai",
        title : "الامارات - دبي"
    },
    {
        path : "/assets/images/joinus/china.png",
        alt : "China",
        title : "الصين - تشنغدو"
    }
]
const JobOpportunities = () => {
  return (
    <section className={styles.jobOpportunities}>
      <div className={styles.right}>
        <h2>فرص وظيفية مميزة بانتظارك</h2>
       <p>اذا كنت تبحث عن وظائف خاليه للمحامين فبإمكانك الانضمام إلينا؛ فنحن نبحث عن محامين ومستشارين متحمسين يتطلعون إلى تحديات جديدة وفرص للنمو المهني. نحن لسنا مجرد مكتب قانوني، بل عائلة تضم أفراداً يسعون لبناء شبكة قانونية عالمية تتجاوز كل الحدود وتقدم خدمات مميزة. نحن هنا لتوفير بيئة داعمة ومحفزة تمكنك من تحقيق طموحاتك المهنية وتطوير مهاراتك. إذا كنت ترغب في الانضمام إلى مجتمعنا القانوني المميز، فأهلاً وسهلاً بك بيننا.</p>
      </div>
      <div className={styles.left}>
      <Swiper
    //   breakpoints={{
    //     768: {
    //       slidesPerView: 1, // 1 slide per view at 768px or less
    //       centeredSlides: true, // Centered slides at this breakpoint
    //     },
    //     1024: {
    //       slidesPerView: 2, // 2 slides per view at 1024px or less
    //       centeredSlides: false, // Optionally adjust centeredSlides
    //     },
    //   }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate:0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={true}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper"
      >
       {
        data.map((el,index)=>(
            <SwiperSlide key={index}>
                <div className={styles.content}>
                <Image src={el.path} width={364} height={295} alt={el.alt}/>
                <p>{el.title}</p>
                </div>
       
            </SwiperSlide>
        ))
       }
     
       
        
      </Swiper>

      </div>
    </section>
  )
}

export default JobOpportunities

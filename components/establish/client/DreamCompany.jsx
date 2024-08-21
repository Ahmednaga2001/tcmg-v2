"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import styles from "@/components/establish/establish.module.css"
import Image from 'next/image';
const info = [
  {
    title: "تأسيس تأسيس شركة أحلامك .. مسؤوليتنا",
    desc: "المجموعة التجارية والبحرية للمحاماة وجهتك الأولي لبناء شركتك علي أساس قانوني قوي",
    path: "/assets/images/establish/imgsliderone.png"
  },
  {
    title: "تأسيس تأسيس شركة أحلامك .. مسؤوليتنا",
    desc: "المجموعة التجارية والبحرية للمحاماة وجهتك الأولي لبناء شركتك علي أساس قانوني قوي",
    path: "/assets/images/establish/imgslidertwo.png"
  },
  {
    title: "تأسيس تأسيس شركة أحلامك .. مسؤوليتنا",
    desc: "المجموعة التجارية والبحرية للمحاماة وجهتك الأولي لبناء شركتك علي أساس قانوني قوي",
    path: "/assets/images/establish/imgsliderthree.png"
  },
];
const DreamCompany = () => {
  return (
    <section className={styles.dreamCompany}>
      <div className={styles.swiperContainer} id='dreamCompany'>

        <Swiper
          spaceBetween={30}
          effect="fade"
          pagination={{ clickable: true }}
            navigation={{
              nextEl: '.dream-next',  // Unique class for next button
              prevEl: '.dream-prev',  // Unique class for previous button
            }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-width": "12px",
            "--swiper-pagination-bullet-height": "12px"
          }}
        >
          {info.map((el) => (
            <SwiperSlide key={el.id} >
              <div className={styles.swiperSlide}>
                <Image src={el.path} width={1440} height={458} alt={el.path}/>

                <div className={styles.content}>
                  <span>{el.title}</span>
                  <span>{el.desc}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev dream-prev"/>
        <div className="swiper-button-next dream-next"/>
      </div>

    </section>
  )
}

export default DreamCompany

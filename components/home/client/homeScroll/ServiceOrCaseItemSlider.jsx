"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
export const ServiceOrCaseItemSlider = ({services}) => {
  return (
    <Swiper
      spaceBetween={30}
      // effect="fade"
      pagination={{
        clickable: true,
        horizontalClass: "--swiper-pagination-horizontal",
        type: "bullets",
      }}
      // loop={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      // modules={[EffectFade, Pagination, Autoplay]}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-width": "12px",
        "--swiper-pagination-bullet-height": "12px",
      }}>
        {
            services.map((service, index) => (
                <SwiperSlide key={index} className={styles.SwiperSlide}>
                     <div>
                     <Image
                            src={service.img}
                            alt={service.img}
                            width={600}
                            height={350}
                            className={styles.image}
                          />
                          <h3>{service.header}</h3>
                          {service.date && <span className={styles.date}>{service.date}</span>}
                          <p>{service.body}</p>
                         <span className="link" >
                            الذهاب إلي الصفحة
                            <Image
                              src="assets/icons/arrow-left.svg"
                              alt="Arrow Left Small"
                              width={20}
                              height={20}
                            />
                          </span>
                     </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
        
  )
}

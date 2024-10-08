"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";



const Team = ({lawyers}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section>
      <div className={styles.swiperContainerWrapper} id="featureSlide">
        <Swiper
        effect="coverflow"
          spaceBetween={10}
          centeredSlides={true} // Center the active slide
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
        >
          {lawyers?.map((lawyer, index) => (
            <SwiperSlide
              className={styles.swiperSlide}
              key={lawyer.id}
              style={{
                // border: activeIndex === index ? "1px solid #ffffff74" : "none",
                opacity: activeIndex === index ? 1 : 0.7,
                transition: "border 0.3s , opacity 0.2s",
                transform: activeIndex === index ? "scale(1.1)" : "scale(1)",

              }}
            >
              <div className={styles.card}>
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  width={279}
                  height={300}
                />
                <p>{lawyer.name}</p>
                <p>{lawyer.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;

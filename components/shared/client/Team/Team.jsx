"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
  },
  {
    id: 2,
    name: "هشام محمود",
    category: "محامي جنائي",
    img: "/assets/images/homePage/lawyers/هشام محمود.png",
  },
  {
    id: 3,
    name: "خلف حسين",
    category: "محامي مدني",
    img: "/assets/images/homePage/lawyers/خلف حسين.png",
  },
  {
    id: 4,
    name: "سهى خيري",
    category: "محامية بنوك",
    img: "/assets/images/homePage/lawyers/سهي خيري.png",
  },
  {
    id: 5,
    name: "كرم موريس",
    category: "محامي شركات",
    img: "/assets/images/homePage/lawyers/كرم موريس.png",
  },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section>
      <div className={styles.swiperContainerWrapper} id="featureSlide">
        <Swiper
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
          {data.map((lawyer, index) => (
            <SwiperSlide
              className={styles.swiperSlide}
              key={lawyer.id}
              style={{
                // border: activeIndex === index ? "1px solid #ffffff74" : "none",
                opacity: activeIndex === index ? 1 : 0.7,
                transition: "border 0.3s , opacity 0.2s",
                // transform: activeIndex === index ? "scale(1.1)" : "scale(1)",

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

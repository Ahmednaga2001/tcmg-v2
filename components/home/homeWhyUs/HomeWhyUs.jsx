"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./page.module.css";

const lawyers = [
  {
    id: 1,
    name: "النزاهة والسرعة في تقديم الخدمات",
    img: "/assets/images/homePage/Frame 48010.svg",
    w: 164,
    h: 182,
  },
  {
    id: 2,
    name: "فعالية الحلول القانونية",
    img: "/assets/images/homePage/Frame 48003.svg",
    w: 182,
    h: 182,
  },
  {
    id: 3,
    name: "حفظ أسرار العملاء",
    img: "/assets/images/homePage/Frame 48005.svg",
    w: 182,
    h: 164,
  },
  {
    id: 4,
    name: "جمع الخبرات المختلفة",
    img: "/assets/images/homePage/Vector.svg",
    w: 221,
    h: 150,
  },
  {
    id: 5, // Changed duplicate id to unique id
    name: "إتمام المعاملات القانونية",
    img: "/assets/images/homePage/Frame 48008.svg",
    w: 182,
    h: 182,
  },
  {
    id: 6,
    name: "بناء علاقات استراتيجية دائمة",
    img: "/assets/images/homePage/Vectorx.svg",
    w: 182,
    h: 166,
  },
  {
    id: 7,
    name: "التخصص في كافة فروع القانون",
    img: "/assets/images/homePage/Frame 48011.svg",
    w: 182,
    h: 165,
  },
];

const HomeWhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <div className={styles.heading}>
        <h2>لماذا تختارنا وبكل ثقة؟</h2>
        <p>
          يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات
          التي تسيّر آلية العمل داخل مكتبنا، بالإضافة إلى مبادئ المحامين والشركاء
          العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي
          والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد
          عملاؤنا بقوة مكتبنا وثقة التعامل معنا، والمبادئ التالية ما ستجدها عند
          التعامل معنا:
        </p>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          effect="coverflow"
          spaceBetween={100}
          centeredSlides={true} // Center the active slide
          slidesPerView={'auto'}
          grabCursor={true}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
          }
        }
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination , EffectCoverflow]} // Added modules back
        >
          {lawyers.map((lawyer) => (
            <SwiperSlide key={lawyer.id} className={styles.SwiperSlide}>
              <div className={styles.card}>
                <Image src={lawyer.img} alt={lawyer.name} width={lawyer.w} height={lawyer.h} />
                <p>{lawyer.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeWhyUs;

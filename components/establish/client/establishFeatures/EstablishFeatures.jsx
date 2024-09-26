"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./page.module.css"
const data = [
  {
    id: 1,
    title: "المتابعة",
    desc: "يلتزم محامونا في المجموعة التجارية والبحرية للمحاماة بمتابعة الموكل خلال فترة القضية والاستئناف, وإبقاؤهم على علم بمتغيرات القضية وقرارات القضاة.",
    path: "/assets/icons/establish/المتابعة1.png",
    w : 80,
    h : 80
  },
  {
    id: 2,
    title: "الجودة",
    desc: "يراعي فريق العمل لدينا الجودة والمهارة في أداء واجبهم القانوني والاستجابة بإتقان لكافة متطلبات الموكلين والتأكيد على ضمان نجاح القضية بشكل احترافي.",
    path: "/assets/icons/establish/الجودة.png",
    w : 80,
    h : 80
  },
  {
    id: 3,
    title: "التخصص",
    desc: "محامونا ومحاسبونا متخصصون في تأسيس الشركات. مع فرق متنوعة متخصصة في الشركات الفردية والشركات ذات المسؤوليات المحدودة في مصر والإمارات ما يضمن نجاحك كرائد أعمال.​",
    path: "/assets/icons/establish/specialization.png",
    w : 80,
    h : 80
  },
  {
    id: 4,
    title: "المشاورة",
    desc: "من خلال موقعنا، يمكنك ملء استمارة الاستشارات القانونية ، والذي يمكن أن يساعدك في الحصول على استشارات مجانية من خلال مكالمة هاتفية أو مقابلة مكتبية. نقدم هذه الخدمة مجانًا للعملاء الراغبون في تأسيس شركة أو طلب خدمات الشؤون القانونية للتحدث مع خبير الشركات قبل بدأ العمل.",
    path: "/assets/icons/establish/Consultation.png",
    w : 80,
    h : 80
  },
  {
    id: 5,
    title: "النتائج",
    desc: "نحن نلتزم مع كل عملائنا الكرام بنتائج معينة يهدف إليها العملاء، لذا نبذل قصارى جهدنا لتكون النتائج النهائية لتأسيس شركة إلكترونية فردية أو شركات الأشخاص والشركات مرضية للعميل؛ والذي يبث روح التفائل به للإنطلاق في عالم الأعمال.",
    path: "/assets/icons/establish/Resuts.png",
    w : 80,
    h : 80
  },
  {
    id: 6,
    title: "السرعة",
    desc: "  يمكنك معرفة الفترة الزمنية لتأسيس شركتك من خلال نطاق العمل المخصص لك. كن مطمئنًا ، ستنتهي جميع عمليات الإجراءات والشؤون القانونية في غضون أيام قليلة ، وبعد ذلك يمكنك الإعلان عن",
    path: "/assets/icons/establish/Quickly.png",
    w : 90,
    h : 81
  },
];
const EstablishFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className={styles.uniqueServiceFeatures}>
      <h2>ما يميز خدمتنا في تأسيس الشركات عن باقي مكاتب المحاماة</h2>
      <div className={styles.swiperContainerWrapper} id="featureSlide">
        <Swiper
          spaceBetween={10}
          navigation={{
               nextEl: '.slideprev',
              prevEl: '.slidenext'
          }}
          centeredSlides={true} // Center the active slide
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Small screens (tablets)
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // Medium screens (small laptops)
            1000: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // Large screens (desktops)
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation , Autoplay]}
          onSlideChange={handleSlideChange}
          
        >
          {data.map((item, index) => (
            <SwiperSlide
              className={styles.swiperSlide}
              key={index}
              style={{
                border: activeIndex === index ? "1px solid #ffffff74" : "none",
                opacity: activeIndex === index ? 1 : 0.4,
                transition: "border 0.3s ease, opacity 0.3s ease",
              }}
            >
              <div className={styles.Content}>
                <Image
                  src={item.path}
                  width={item.w}
                  height={item.h}
                  alt="Service Icon"
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span>{item.id}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev slidenext"/>
        <div className="swiper-button-next slideprev"/>
      </div>
    </section>
  );
};

export default EstablishFeatures;

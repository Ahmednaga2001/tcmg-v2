"use client";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import styles from "./page.module.css";
import Image from "next/image";



function Slider({ data }) {
  const flickityOptions = {
    initialIndex: 0,
    draggable: true,
    fullscreen: true,
    lazyLoad: 1,
    fade: true,
    contain: true,
    pageDots: true,
    cellAlign: "center",
    wrapAround: true,
  };

  return (
    <section className={styles.branches}>
      <Flickity
        options={flickityOptions}
        disableImagesLoaded={true}
        reloadOnUpdate={true}
        static
      >
        {data.map((item, index) => (
          <div className={styles.branche} key={index}>
            <Image
              src={item.imgPath}
              alt={item.title}
              width={1440}
              height={460}
            />
            <div className={styles.content}>
              <span>{item.title}</span>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Slider;
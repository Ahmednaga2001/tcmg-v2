import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";

const Step = ({
  title,
  desc,
  imgPath,
  imgWidth,
  imgHeight,
  imgPath2,
  imgWidth2,
  imgHeight2,
  isSelect,
}) => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.line}>
        <Image
          src="/assets/symbols/about/circle.svg"
          className={styles.circleImg}
          alt="circle image"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.Img}>
        {isSelect ? (
          <>
            <label htmlFor="consultation-type">نوع الاستشارة</label>
            <select id="consultation-type">
              <option value="النوع" disabled selected>
                النوع
              </option>
            </select>
          </>
        ) : (
          <>
            {imgPath && (
              <Image
                src={imgPath}
                width={imgWidth}
                height={imgHeight}
                alt="step image"
              />
            )}
            {imgPath2 && (
              <Image
                src={imgPath2}
                width={imgWidth2}
                height={imgHeight2}
                alt="additional step image"
                className={styles.img2}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Step;

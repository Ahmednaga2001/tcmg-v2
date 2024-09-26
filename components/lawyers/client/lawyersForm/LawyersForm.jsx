import SelectComponentThree from "@/components/ui/selectComponentThree/SelectComponentThree";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import LawyersCard from "../lawersCard/LawyersCard";
const practices = [
  { value: "الأندماج والاستحواذ" },
  { value: "قضايا أسواق المال" },
  { value: "قضايا التمويل والأوراق المالية" },
  { value: "التحكيم التجاري الدولي" },
  { value: "التجارة الدولية" },
  { value: "قضايا الاتصالات" },
  { value: "قضايا المعاملات المصرفية" },
  { value: "أعمال الشركات" },
  { value: "قضايا الأموال العامة" },
  { value: "قضايا الإنشاءات والمقاولات" },
  { value: "القضايا العقارية" },
  { value: "الملكية الفكرية" },
  { value: "قضايا التنفيذ والإفلاس" },
  { value: "قضايا الضرائب" },
  { value: "قضايا التأمين" },
  { value: "القضايا الإدارية" },
  { value: "القضايا الجنائية" },
  { value: "القضايا المدنية" },
  { value: "إستشارة قانونية" },
  { value: "استشارة قانونية مميزة VIP" },
];
const sectors = [
  { value: "العقارات" },
  { value: "الخدمات المالية" },
  { value: "الرعاية الصحية" },
  { value: "الفنادق والترفيه" },
  { value: "التجزئة والمستهلك" },
  { value: "التصنيع" },
  { value: "النقل والشحن البحري" },
  { value: "النقل" },
  { value: "السيارات" },
  { value: "التأمين" },
  { value: "التعليم" },
  { value: "وسائل الإعلام" },
  { value: "الطاقة" },
  { value: "الاتصالات" },
];
const locations = [
  { value: "مصر" },
  { value: "الإمارات" },
  { value: "السعودية" },
  { value: "الصين" },
  { value: "فلسطين" },
];
const cities = [
  { value: "الجيزة" },
  { value: "الإسكندرية" },
  { value: "القاهرة" },
  { value: "العاشر من رمضان" },
];

const lawyersInfo = [
  {
    id: 1,
    title: "محمد أبو ضيف ",
    category: "المؤسس والرئيس التنفيذي",
    imgPath:
      "/assets/images/lawyers/المحامي خلف حسين محامي مدني في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 2,
    title: "هشام محمود",
    category: "التطوير العقاري والتقاضي",
    imgPath:
      "/assets/images/lawyers/المحامي هشام محمود محامي جنائي في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 3,
    title: "خلف حسين",
    category: "التقاضى",
    imgPath:
      "/assets/images/lawyers/المحامي خلف حسين محامي مدني في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 4,
    title: "سهى خيري",
    category: "التمويل والبنوك",
    imgPath: "/assets/images/lawyers/المحامية سهي خيري.png",
  },
  {
    id: 5,
    title: "فوزية يحيي",
    category: "صياغة العقود",
    imgPath:
      "/assets/images/lawyers/المحامية فوزية يحيي محامية صياغة عقود في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 6,
    title: "كرم موريس",
    category: "أعمال الشركات",
    imgPath:
      "/assets/images/lawyers/المحامي كرم موريس محامي شركات في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 7,
    title: "ميادة محمود",
    category: "صياغة العقود",
    imgPath: "/assets/images/lawyers/photo frame.png",
  },
  {
    id: 8,
    title: "آية محمد",
    category: "النقل والشحن البحري",
    imgPath: "/assets/images/lawyers/photo frame (1).png",
  },
  {
    id: 9,
    title: "رمضان رزق",
    category: "التجزئة والمستهلك والتقاضي",
    imgPath:
      "/assets/images/lawyers/المحامي رمضان رزق محامي إحوال شخصية المج.png",
  },
  {
    id: 10,
    title: "دعاء قنديل",
    category: "الدمج والاستحواذ وصياغة العقود",
    imgPath: "/assets/images/lawyers/photo frame (2).png",
  },
  {
    id: 11,
    title: "أحمد السعيد",
    category: "التحكيم التجاري وأسوق المال",
    imgPath: "/assets/images/lawyers/photo frame (3).png",
  },
  {
    id: 12,
    title: "محمد سعيد",
    category: "الملكية الفكرية وتأسيس الشركات",
    imgPath:
      "/assets/images/lawyers/المحامي محمد السعيد محامي زواج اجانب في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
  {
    id: 13,
    title: "أحمد عمارة",
    category: "التأمين",
    imgPath: "/assets/images/lawyers/photo frame (4).png",
  },
  {
    id: 14,
    title: "حسام نور",
    category: "العلامات التجارية",
    imgPath:
      "/assets/images/lawyers/المحامي حسام نور محامي عقاري في المجموعة التجارية والبحرية للمحاماة_edited.png",
  },
];

const LawyersForm = () => {
  const [name, setName] = useState("");
  const [practice, setPractice] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedLoction, setSelectedLoction] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <section className={styles.l}>
      <form action="">
        <div className={styles.inputsSearchContainer}>
          <div className={styles.customInput}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="الاسم"
            />
          </div>
          <div className={styles.jobDesc}>
            <SelectComponentThree
              // selectedOption={""}
              // setSelectedOption={""}
              head={"المسمى "}
            />
          </div>
          <div className={styles.practices}>
            <SelectComponentThree
              options={practices}
              selectedOption={practice}
              setSelectedOption={setPractice}
              head={"الممارسات"}
            />
          </div>
          <div className={styles.sectors}>
            <SelectComponentThree
              options={sectors}
              selectedOption={selectedSector}
              setSelectedOption={setSelectedSector}
              head={"القطعات"}
            />
          </div>
          <div className={styles.locations}>
            <SelectComponentThree
              options={locations}
              selectedOption={selectedLoction}
              setSelectedOption={setSelectedLoction}
              head={"الموقع"}
            />
          </div>
          <div className={styles.cities}>
            <SelectComponentThree
              options={cities}
              selectedOption={selectedCity}
              setSelectedOption={setSelectedCity}
              head={"المدينة"}
            />
          </div>

          <div className={styles.search}>
            <button type="submit">
              بحث
              <Image
                src={"/assets/icons/form/arrow-left-black.png"}
                width={24}
                height={24}
                alt="arrow left icon"
              />
            </button>
          </div>
        </div>
      </form>

      <div className={styles.display}>
        {lawyersInfo &&
          lawyersInfo.map((lawyer) => (
            <LawyersCard
              key={lawyer.id}
              title={lawyer.title}
              category={lawyer.category}
              imgPath={lawyer.imgPath}
            />
          ))}
      </div>
    </section>
  );
};

export default LawyersForm;

import React from 'react'
import styles from "./page.module.css"
import BusinessHero from '@/components/business/businessHero/BusinessHero'
import BusinessAchieveSuccess from '@/components/business/hireingAchieveSuccess/BusinessAchieveSuccess'
import BusinessRoadToExcellence from '@/components/business/businessRoadToExcellence/BusinessRoadToExcellence'
import BusinessExperience from '@/components/business/client/internOffer/BusinessExperience'
import BusinessAbout from '@/components/business/businessAbout/BusinessAbout'
import Team from '@/components/shared/client/Team/Team'
import Slider from '@/components/shared/client/slider/Slider'
const data = [
  {
    imgPath : "/assets/images/business/slideimg1.png",
    title : "إزدهار شركتك ونجاحها .. مسؤوليتنا",
    desc : "المجموعة التجارية والبحرية للمحاماة شريكك الأول لتحقيق أهدافك وتطوير أعمالك على أسس متينة."
  },
  {
    imgPath : "/assets/images/business/slideimg2.png",
    title : "إزدهار شركتك ونجاحها .. مسؤوليتنا,",
    desc : "المجموعة التجارية والبحرية للمحاماة شريكك الأول لتحقيق أهدافك وتطوير أعمالك على أسس متينة."
  },
  {
    imgPath : "/assets/images/business/slideimg3.png",
    title : "إزدهار شركتك ونجاحها .. مسؤوليتنا,",
    desc : "المجموعة التجارية والبحرية للمحاماة شريكك الأول لتحقيق أهدافك وتطوير أعمالك على أسس متينة."
  }
]
const lawyers = [
  {
    id: 1,
    name: "محمد أبو ضيف",
    category: "الرئيس التنفيذي",
    img: "/assets/images/homePage/lawyers/محمد ابوضيف.png",
  },
  {
    id : 2,
    name : "آية محمد",
    category : "النقل والشحن",
    img : "/assets/images/homePage/lawyers/آية محمد.png"
  },
  {
    id : 3,
    name : "دعاء قنديل",
    category : "صياغة العقود وقانون الشركات",
    img : "/assets/images/homePage/lawyers/دعاء قنديل.png"
  },{
    id : 4,
    name : "أحمد سعيد",
    category : "التحكيم التجاري وقانون الشركات",
    img : "/assets/images/homePage/lawyers/أحمد سعيد.png"
  },
  {
    id : 5,
    name : "سهى خيري",
    category : "التمويل والبنوك",
    img : "/assets/images/homePage/lawyers/سهي خيري.png"
  }

];
const page = () => {
  return (
    <div className={styles.buisnessPage}>
      <BusinessHero/>
      <BusinessAchieveSuccess/>
      <BusinessRoadToExcellence/>
      <BusinessExperience/>
      <BusinessAbout/>
      <Team lawyers={lawyers}/>
      <Slider data = {data}/>
    </div>
  )
}

export default page

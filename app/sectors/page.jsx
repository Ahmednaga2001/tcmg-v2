import Hero from '@/components/shared/hero/Hero'
import Services from '@/components/shared/services/Services'
const data = [
  "العقارات", "الخدمات المالية","الرعاية الصحية"," الفنادق والترفيه","التجزئة والمستهلك","التصنيع","النقل والشحن البحري",
  "النقل","السيارات","التأمين","التعليم","وسائل الإعلام","الطاقة","الاتصالات"
]
const Sectors = () => {
  return (
    <section >
      <Hero/>
      <Services data = {data}/>
          </section>
  )
}

export default Sectors

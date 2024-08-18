import styles from "@/components/legal-consultations/legalconsultations.module.css";
import Image from "next/image";

const customers = [
  {
    id: 1,
    img: "/assets/images/legalconsultations/حسام نصار.png",
    name: "المهندس حسام نصار",
    category: "مهندس إماراتي خبير",
    body: "جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات",
  },
  {
    id: 2,
    img: "/assets/images/legalconsultations/هيثم الشيمي.png",
    name: "أستاذ هيثم الشيمي",
    category: "مدير ماليات",
    body: "دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم",
  },
  {
    id: 3,
    img: "/assets/images/legalconsultations/فاطمة عيسى.png",
    name: "أستاذة فاطمة عيسى",
    category: "رائدة أعمال",
    body: "خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة",
  },
  {
    id: 4,
    img: "/assets/images/legalconsultations/أحمد سليم.png",
    name: "أستاذ أحمد سليم",
    category: "مستثمر ورجل أعمال",
    body: "تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك",
  },
];

function OurCustomers() {
  return (
    <section className={styles.ourCustomers}>
      <div className={styles.header}>
        <h2>ماذا قال عملائنا عنّا؟</h2>
        <Image
          src="/assets/icons/legalconsultations/crown.png"
          alt="Crown"
          width={60}
          height={25}
        />
      </div>
      <div className={styles.customers}>
        {customers.map((customer) => (
          <div className={styles.customer} key={customer.id}>
            <div className={styles.top}>
              <div className={styles.left}>
                <span>{customer.name}</span>
                <span>{customer.category}</span>
              </div>
              <div className={styles.right}>
                <Image src={customer.img} alt={customer.name} width={80} height={80} />
              </div>
            </div>
            <div className={styles.bottom}>
              <Image src="/assets/icons/legalconsultations/quote.png" alt="Quote" width={28} height={23} />
              <p>{customer.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCustomers;

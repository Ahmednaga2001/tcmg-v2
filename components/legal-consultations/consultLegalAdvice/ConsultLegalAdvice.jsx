import Image from "next/image";
import styles from "./page.module.css";
const consultationsData = [
    {
      title: "استشارة شركات",
      description: `تلعب الاستشارات القانونية دورًا هامًا في نجاح أي شركة، حيث 
        تُساعدها على تجنب المخاطر القانونية واتخاذ القرارات السليمة وتعزيز 
        مكانتها في السوق. فيما يلي بعض أهم فوائد الاستشارات القانونية للشركات، 
        حيث تخضع الشركات لعدد كبير من القوانين واللوائح التي تتغير باستمرار. 
        يمكن للمستشار القانوني مساعدة الشركة على فهم هذه القوانين والامتثال لها، 
        مما يجنبها التعرض للغرامات والعقوبات القانونية.`,
      image: {
        src: "/assets/images/legalconsultations/استشارة شركات.png",
        width: 142,
        height: 137,
        alt: "Company Consultation Image",
      },
    },
    {
      title: "استشارة مكتبية",
      description: `تعد أفضل الطرق لتقديم الاستشارة من خلال مكتب استشارات قانونية؛ 
        فإن طرح التساؤلات في قضية ما وجهًا لوجه بين المستشار القانوني والموكل 
        هي طريقة فعالة تتضمن الفهم العميق لجميع نواحي المسائل والإجراءات اللازمة 
        لتجنب مخالفة القانون سواء في مكتب المحامي أو طلب استشارات قانونية 
        أونلاين. فكل ما عليك فعله هو حجز موعد مع أحد خبراء المجموعة التجارية 
        والبحرية للمحاماة، وسيكون خبيرنا القانوني بانتظارك لإمدادك بكافة السبل 
        الممكنة للنصر في قضيتك أو تحقيق هدفك القانوني، في مكتبنا بالقاهرة أو 
        عبر اجتماع أون لاين.`,
      image: {
        src: "/assets/images/legalconsultations/استشارة مكتبية.png",
        width: 142,
        height: 139,
        alt: "Office Consultation Image",
      },
    },
    {
      title: "استشارة هاتفية",
      description: `في ظل التعدّدية في وسائل تقديم الاستشارات، يعد طلب استشارة قانونية 
        بالتليفون الأسرع من تقديم الطلب في أحد المكاتب الاستشارية. فهذا النوع 
        من الوسائل الاستشارية الهاتفية يعد الحل المثالي في حالة وجود ظروف تحول 
        بين العميل والذهاب إلى مكتب محامي للاستشارة. ولهذا السبب ترحب المجموعة 
        التجارية والبحرية للمحاماة باتصالات عملائنا الكرام ممن يبحثون عن رقم 
        محامي للاستشارة من أي مكان في مصر والشرق الأوسط. وسيتواصل معكم أحد 
        خبرائنا ليشاركك بالمعرفة والخبرة القانونية التي تحتاجها.`,
      image: {
        src: "/assets/images/legalconsultations/استشارة هاتفية.png",
        width: 127,
        height: 129,
        alt: "Phone Consultation Image",
      },
    },
    {
      title: "استشارة واتس آب",
      description: `أتاح تطبيق الواتس أب سهولة التواصل بين الأفراد، و بأخص الحديث عن 
        المستشارين القانونيين في توفير امكانية التواصل مع الموكلين وطلب استشارات 
        قانونية واتس أب. والذي يتيح التواصل عبر الرسائل النصية أو الصوتية وأيضا 
        المجموعات الاستشارية، مع الحفاظ على سرية الاستشارة من رسائل العميل إلى 
        تفاصيل قضيته المُستشار فيها. كل ما عليك هو مراسلة المجموعة التجارية 
        والبحرية للمحاماة عبر حساب الواتس اب الرسمي لها، ثم توضيح موضوع استشارتك 
        ليقوم بالرد عليك مستشار قانوني متخصص مستعد لدعمك.`,
      image: {
        src: "/assets/images/legalconsultations/استشارة واتس اب.png",
        width: 134,
        height: 135,
        alt: "WhatsApp Consultation Image",
      },
    },
  ];
const ConsultLegalAdvice = () => {
  return (
    <section className={styles.legalAdvice}>
      <div className={styles.heading}>
        <h2>استشارات قانونية فورية ومميزة لجميع الأفراد والشركات</h2>
        <p>
        نقدم لك في مجموعة TCMG فريق من المستشارين المتخصصين في كافة مجالات القانون, مستعدون لتلبية كافة احتياجاتك, عبر الحصول على خدمة استشارات قانونية فورية أو بعد الحجز؛ لحل أي مسألة قانونية تواجهها مهما بلغ مستوى التعقيد بها. نظرًا لاهتمامنا التام بخدمة عملائنا وتقديم يد العون للمواطنين من مصر والوطن العربي, وفرنا لكم جميع الوسائل الممكن للتواصل والحصول على الاستشارات القانونية الإلكترونية. يمكنك الحصول على استشارات قانونية اون لاين (عبر الواتساب) واستشارات قانونية هاتفية, كذلك يمكنك حجز الاستشارة المكتبية وتشرفنا بزيارة مكاتبنا في القاهرة والاسكندرية. وإن ما يميزنا عن غيرنا من مكاتب المحاماة, فإننا نقدم وبشكل خاص استشارة في مجال تأسيس الشركات والتجارة, بالإجابة عن كل التساؤلات حول إنشاء الشركات والمساعدة في تطبيق القانون بشكل صحيح.
        </p>
      </div>

      <div className={styles.cards}>
      {consultationsData.map(({ image: { src, width, height, alt }, title, description }, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.top}>
              <Image
                src={src}         
                width={width}     
                height={height}   
                alt={alt}         
              />
              <span>{title}</span>
            </div>
            <div className={styles.left}>
              <span>{title}</span>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultLegalAdvice;
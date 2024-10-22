

"use client";  
import React, { useState } from 'react';  
import { useSearchParams } from 'next/navigation';  
import styles from "./page.module.css";  
import { Register } from '@/components/payment/register/Register';  
import { Category } from '@/components/payment/category/Category';  
import ChooseLawyer from '@/components/payment/chooseLawyer/ChooseLawyer';  
import AdditionalInfo from '@/components/payment/additionalInfo/AdditionalInfo';  
import FollowPayment from '@/components/payment/followPayment/FollowPayment';  

const heshamMahmod = {
    name: "هشام محمود",
    desc: "هشام محمود محامي جنايات متمرس ومرخص من وزارة العدل لديه خبرة في القانون الجنائي وقضايا الأموال العامة وقانون الأحوال الشخصية في مصر والترافع أمام المحاكم المصرية بخبرة تتجاوز ال ١٢ سنة، كما عُرف بكونه محامي جنائي محنك تمكن من حل العديد من القضايا المعقدة.",
    imgPath: "/assets/images/payment/hesham.png"
};

const ahmedSaid = {
    name: "أحمد السعيد",
    desc: "محامٍ بارز في القانون التجاري يتمتع بـ 19 عامًا من الخبرة في قانون الشركات، والتحكيم التجاري الدولي، والرعاية الصحية، وقانون التكنولوجيا والاتصالات. يجيد صياغة العقود الدولية المعقدة والتفاوض على الصفقات الكبيرة. ويمتلك القدرة على التعامل مع العملاء من مختلف القطاعات، وحماية مصالحهم بكفاءة ومهنية عالية.",
    imgPath: "/assets/images/payment/ahmedSaid.png"
};

function Page() {     
    const searchParams = useSearchParams();
    const fromBusinessPackage = searchParams.get('fromBusinessPackage') === 'true'; 
    const [currentStep, setCurrentStep] = useState(1); 

    const handleNextStep = () => {         
        setCurrentStep(currentStep + 1);     
    }; 

    const handleStepClick = (step) => {
        if (step < currentStep) {
            setCurrentStep(step);
        }
    };

    const stepContent = (step) => {         
        if (step < currentStep) {             
            return (                 
                <img                     
                    src={`/assets/icons/payment/correct.svg`}                     
                    alt={`Step ${step}`}                  
                />             
            );         
        }         
        return step;     
    }; 

    return (         
        <div className={styles.paymentPage}>             
            <section>                 
                <h2>                     
                    {currentStep === 1 && "تسجيل الدخول"}                     
                    {currentStep === 2 && !fromBusinessPackage && "إختيار التخصص"}                     
                    {currentStep === 2 && fromBusinessPackage && "إختيار المحامي"}                     
                    {currentStep === 3 && "إختيار المحامي"}                     
                    {currentStep === 4 && "معلومات إضافية"}                     
                    {currentStep === 5 && "متابعة الدفع"}             
                </h2>                 
                <ul className={styles.steps}>                     
                    {Array.from({ length:5 }, (_, index) => index + 1)
                        .map((step) => { 
                            if (step === 2 && fromBusinessPackage) {
                                return null; // تخطي الخطوة 2 في حالة باقة الأعمال
                            } 

                            const adjustedStep = step > 2 && fromBusinessPackage ? step - 1 : step; // ضبط الرقم للتوافق مع الخطوات

                            return (
                                <li                              
                                    key={adjustedStep}                             
                                    className={                                  
                                        adjustedStep < currentStep ? styles.completed :                                  
                                        adjustedStep === currentStep ? styles.active :                                  
                                        styles.inactive                             
                                    } 
                                    onClick={() => handleStepClick(adjustedStep)} 
                                >                             
                                    {stepContent(adjustedStep)}                            
                                </li>                     
                            );
                        })}                  
                </ul>           
            </section>              

            {currentStep === 1 && <Register onNextStep={handleNextStep} />}
            {currentStep === 2 && !fromBusinessPackage && <Category onNextStep={handleNextStep} />}
            {currentStep === 2 && fromBusinessPackage && <ChooseLawyer info={ahmedSaid} onNextStep={handleNextStep} />}
            {currentStep === 3 && !fromBusinessPackage && <ChooseLawyer info={heshamMahmod} onNextStep={handleNextStep} />} 
            
            {currentStep === 3 && fromBusinessPackage && <AdditionalInfo onNextStep={handleNextStep} />}
            {currentStep === 4 && !fromBusinessPackage && <AdditionalInfo onNextStep={handleNextStep} />}
            {currentStep === 4 && fromBusinessPackage && <FollowPayment onNextStep={handleNextStep} />}
            {currentStep === 5 && !fromBusinessPackage && <FollowPayment onNextStep={handleNextStep} />}  
        </div>     
    ); 
}  

export default Page; 


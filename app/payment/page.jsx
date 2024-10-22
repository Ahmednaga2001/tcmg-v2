"use client";  
import React, { Suspense, useState, useEffect } from 'react';  
import { useSearchParams, useRouter } from 'next/navigation';  
import styles from "./page.module.css";  
import { Register } from '@/components/payment/register/Register';  
import { Category } from '@/components/payment/category/Category';  
import ChooseLawyer from '@/components/payment/chooseLawyer/ChooseLawyer';  
import AdditionalInfo from '@/components/payment/additionalInfo/AdditionalInfo';  
import FollowPayment from '@/components/payment/followPayment/FollowPayment';  

const heshamMahmod = {
    name: "هشام محمود",
    desc: "محامي جنايات متمرس ومرخص من وزارة العدل.",
    imgPath: "/assets/images/payment/hesham.png"
};

const ahmedSaid = {
    name: "أحمد السعيد",
    desc: "محامٍ بارز في القانون التجاري.",
    imgPath: "/assets/images/payment/ahmedSaid.png"
};

function Page() {     
    const searchParams = useSearchParams();
    const fromBusinessPackage = searchParams.get('fromBusinessPackage') === 'true'; 
    const [currentStep, setCurrentStep] = useState(1); 
    const router = useRouter();

    const handleNextStep = () => {         
        setCurrentStep(prevStep => prevStep + 1);
        window.history.pushState({ step: currentStep + 1 }, '', `?step=${currentStep + 1}`);
    }; 

    const handleStepClick = (step) => {
        if (step < currentStep) {
            setCurrentStep(step);
            window.history.pushState({ step }, '', `?step=${step}`);
        }
    };

    const stepContent = (step) => {         
        if (step < currentStep) {             
            return <img src={`/assets/icons/payment/correct.svg`} alt={`Step ${step}`} />;         
        }         
        return step;     
    }; 

    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.step) {
                setCurrentStep(event.state.step);
            } else {
                router.back(); // Navigate back if there's no state
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [router]);

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
                    {Array.from({ length: 5 }, (_, index) => index + 1)
                        .map((step) => { 
                            if (step === 2 && fromBusinessPackage) return null; 

                            const adjustedStep = step > 2 && fromBusinessPackage ? step - 1 : step; 

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

export default function Wrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
}

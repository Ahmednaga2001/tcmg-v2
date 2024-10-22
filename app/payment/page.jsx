"use client";  
import React, { useState } from 'react';  
import { useSearchParams } from 'next/navigation';  
import styles from "./page.module.css";  
import { Register } from '@/components/payment/register/Register';  
import { Category } from '@/components/payment/category/Category';  
import ChooseLawyer from '@/components/payment/chooseLawyer/ChooseLawyer';  
import AdditionalInfo from '@/components/payment/additionalInfo/AdditionalInfo';  
import FollowPayment from '@/components/payment/followPayment/FollowPayment';  

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
                    {currentStep === 3 && !fromBusinessPackage && "إختيار المحامي"}                     
                    {currentStep === 3 && fromBusinessPackage && "معلومات إضافية"}                     
                    {currentStep === 4 && "معلومات إضافية"}                     
                    {currentStep === 5 && "متابعة الدفع"}                 
                </h2>                 
                <ul className={styles.steps}>                     
    {Array.from({ length: 5 }, (_, index) => index + 1) 
        .map((step) => { 
            if (step === 2 && fromBusinessPackage){
                return null
            } ; // Skip step 2 for business package
            
            const adjustedStep = step < 3 ? step : step - 1; 
            return (
                <li                              
                    key={step}                             
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
            {currentStep === 2 && fromBusinessPackage && <ChooseLawyer onNextStep={handleNextStep} />}
            {currentStep === 3 && !fromBusinessPackage && <ChooseLawyer onNextStep={handleNextStep} />} 
            {currentStep === 3 && fromBusinessPackage && <AdditionalInfo onNextStep={handleNextStep} />}
            {currentStep === 4 && !fromBusinessPackage && <AdditionalInfo onNextStep={handleNextStep} />}
            {currentStep === 4 && fromBusinessPackage && <FollowPayment onNextStep={handleNextStep} />}
            {currentStep === 5 && !fromBusinessPackage && <FollowPayment onNextStep={handleNextStep} />} 
        </div>     
    ); 
}  

export default Page; 

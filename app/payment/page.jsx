"use client";  
import React, { useState } from 'react';  
import styles from "./page.module.css";  
import { Register } from '@/components/payment/register/Register';  
import { Category } from '@/components/payment/category/Category';  
import ChooseLawyer from '@/components/payment/chooseLawyer/ChooseLawyer';  
import AdditionalInfo from '@/components/payment/additionalInfo/AdditionalInfo';  
import FollowPayment from '@/components/payment/followPayment/FollowPayment';  

function Page() {     
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
                    {currentStep === 2 && "إختيار التخصص"}                     
                    {currentStep === 3 && "إختيار المحامي"}                     
                    {currentStep === 4 && "معلومات اضافية"}                     
                    {currentStep === 5 && "متابعة الدفع"}                 
                </h2>                 
                <ul className={styles.steps}>                     
                    {Array.from({ length: 5 }, (_, index) => index + 1).map(step => (                         
                        <li                              
                            key={step}                             
                            className={                                  
                                step < currentStep ? styles.completed :                                  
                                step === currentStep ? styles.active :                                  
                                styles.inactive                             
                            } 
                            onClick={() => handleStepClick(step)} // Handle step click
                        >                             
                            {stepContent(step)}                         
                        </li>                     
                    ))}                 
                </ul>             
            </section>              

            {currentStep === 1 && <Register onNextStep={handleNextStep} />}             
            {currentStep === 2 && <Category onNextStep={handleNextStep} />}             
            {currentStep === 3 && <ChooseLawyer onNextStep={handleNextStep} />}             
            {currentStep === 4 && <AdditionalInfo onNextStep={handleNextStep} />}             
            {currentStep === 5 && <FollowPayment onNextStep={handleNextStep} />}         
        </div>     
    ); 
}  

export default Page;

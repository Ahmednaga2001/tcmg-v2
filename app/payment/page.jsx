"use client";

import React, { useState } from 'react';
import styles from "./page.module.css";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Register } from '@/components/payment/register/Register';
import { Category } from '@/components/payment/category/Category';
import ChooseLawyer from '@/components/payment/chooseLawyer/ChooseLawyer';
import AdditionalInfo from '@/components/payment/additionalInfo/AdditionalInfo';
import ModalPrivacy from '@/components/payment/modalPrivacy/ModalPrivacy';
import FollowPayment from '@/components/payment/followPayment/FollowPayment';

function Page() {
    const [currentStep, setCurrentStep] = useState(1); 

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1); 
    };

 

    const stepContent = (step) => {
        if (currentStep === step) {
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
                    {currentStep==1 && "تسجيل الدخول"}
                    {currentStep==2 && "إختيار التخصص"}
                    {currentStep==3 && "إختيار المحامي"}
                    {currentStep==4 && "معلومات اضافية"}
                    {currentStep==5 && "متابعة الدفع"}
                </h2>
                <ul className={styles.steps}>
                    <li  className={currentStep === 1 ? styles.active : ''}>{stepContent(1)}</li>
                    <li  className={currentStep === 2 ? styles.active : ''}>{stepContent(2)}</li>
                    <li  className={currentStep === 3 ? styles.active : ''}>{stepContent(3)}</li>
                    <li  className={currentStep === 4 ? styles.active : ''}>{stepContent(4)}</li>
                    <li  className={currentStep === 5 ? styles.active : ''}>{stepContent(5)}</li>
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

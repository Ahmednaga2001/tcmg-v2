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
    const [currentStep, setCurrentStep] = useState(1); // Track the current step
    console.log(currentStep);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1); // Move to the next step
    };

    return (
        <div className={styles.paymentPage}>
            <section>
                <h2>تسجيل الدخول</h2>
                <ul className={styles.steps}>
                    <li style={{ backgroundColor: currentStep === 1 ? '#845F38' : '' }}>1</li>
                    <li style={{ backgroundColor: currentStep === 2 ? '#845F38' : '' }}>2</li>
                    <li style={{ backgroundColor: currentStep === 3 ? '#845F38' : '' }}>3</li>
                    <li style={{ backgroundColor: currentStep === 4 ? '#845F38' : '' }}>4</li>
                    <li style={{ backgroundColor: currentStep === 5 ? '#845F38' : '' }}>5</li>
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

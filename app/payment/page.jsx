"use client";

import React, { useState } from 'react';
import styles from "./page.module.css";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Register } from '@/components/payment/register/Register';
import { Category } from '@/components/payment/category/Category';

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
                <ul>
                    <li style={{ backgroundColor: currentStep === 1 ? 'red' : '' }}>1</li>
                    <li style={{ backgroundColor: currentStep === 2 ? 'red' : '' }}>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </section>
            {/* <Register onNextStep={handleNextStep} /> */}
            <Category/>
        </div>
    );
}

export default Page;

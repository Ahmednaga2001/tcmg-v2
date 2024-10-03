import React from 'react'
import styles from "./page.module.css"
import Input from '@/components/ui/Input'
import Image from 'next/image'
export const Register = ({onNextStep}) => {
    console.log(onNextStep);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onNextStep(); // Trigger next step on form submission
      };
  return (
    <section>
                <div className={styles.registerCard}>
                        <span className={styles.header}>التسجيل باستخدام حسابك</span>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.registerWay}>
                            <span>                            تسجيل الدخول بـــ Google
                            </span>
                            <Image src="/assets/icons/payment/google.svg" width={32} height={32} alt="Google Icon" />
                        </div>
                        <div className={styles.registerWay}>
                            <span>                            تسجيل الدخول بـــ Facebook
                            </span>
                            <Image src="/assets/icons/payment/facebook.svg" width={32} height={32} alt="Google Icon" />
                        </div>
                        <div className={styles.registerWay}>
                            <span>                            تسجيل الدخول بـــ Apple
                            </span>
                            <Image src="/assets/icons/payment/apple.svg" width={32} height={32} alt="Apple Icon" />
                        </div>
                        <div className={styles.registerWay}>
                            <span>                            تسجيل الدخول بـــ Email
                            </span>
                            <Image src="/assets/icons/payment/email.svg" width={32} height={32} alt="Email Icon" />
                        </div>
                        <div className={styles.or}>
                            <span></span>
                            <span>أو تابع كضيف </span>
                            <span></span>
                        </div>
                        <Input
                            style={{ background: "linear-gradient(var(--main), #d8d8d811)", color: "#fff" }}
                            label="البريد الالكتروني"
                            imgPath="/assets/icons/form/ic_round-email.svg"
                            placeholder="البريد الالكتروني"
                            alt="email icon"
                        />
                        <button type="submit" className={styles.registerWay}>
                            المتابعة
                            <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />

                        </button>
                    </form>
                </div>
            </section>
  )
}

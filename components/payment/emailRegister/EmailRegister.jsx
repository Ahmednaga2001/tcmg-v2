import React, { useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/Input';
import Image from 'next/image';

export const EmailRegister = ({ onNextStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  // Handlers for social logins (can be integrated with OAuth logic later)
  const [openRegister, setOpenRegister] = useState(false)
  const handleOpenRegister = () => {
    setOpenRegister(true)
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <div className={styles.registerCard}>
      <span className={styles.header}>مرحبًا بك في المجموعة التجارية والبحرية للمحاماة</span>
      <form onSubmit={handleSubmit}>
        <Input
          style={{
            background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
            color: '#fff'
          }}
          label="اسم بالكامل"
          imgPath="/assets/icons/form/solar_user-bold.png"
          placeholder="اسم بالكامل"
          alt="person icon"
        />
        <Input
          style={{
            background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
            color: '#fff'
          }}
          label="رقم الهاتف"
          imgPath="/assets/icons/form/ic_round-phone.png"
          placeholder="رقم الهاتف"
          alt="phone icon"
        />

        <Input
          style={{
            background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
            color: '#fff'
          }}
          label="البريد الالكتروني"
          imgPath="/assets/icons/form/ic_round-email.svg"
          placeholder="البريد الالكتروني"
          alt="email icon"
          type="email"
          color={"#fff"}
        />
        <Input
          style={{
            background: "linear-gradient(rgba(255, 255, 255,.03) 0%, rgba(216, 216, 216, .03))",
            color: '#fff'
          }}
          label="كلمة السر"
          imgPath="/assets/icons/form/eye-slash.svg"
          placeholder="كلمة السر"
          alt="eye-slash icon"
          type="password"
          color={"#fff"}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <button type="submit" className={styles.registerWay}>
          المتابعة
          <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />
        </button>
      </form>
      {/* <p className={styles.footer}>
          <span>أول مرة لك هنا ؟</span>
          <span onclick={handleOpenRegister}> إنضم إلينا </span>
        </p> */}
    </div>
  );
};

import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import TextArea from '@/components/ui/TextArea';
import CheckBox from '@/components/ui/CheckBox';
import Button from '@/components/ui/Button';

const BranchContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <div className={styles.formPage}>
        <h2>استمارة التواصل </h2>
        <form action="">
          <div className={styles.names}>
       
            <Input label="الاسم الاول" imgPath="/assets/icons/form/user.png" placeholder="الاسم الاول" alt="person icon"/>
            <Input label="اسم العائلة" imgPath="/assets/icons/form/user.png" placeholder="اسم العائلة" alt="person icon"/>
       
          </div>
         
          <Input label="البريد الالكتروني" imgPath="/assets/icons/form/email.png" placeholder="البريد الالكتروني" alt="email icon"/>
          <Input label="رقم الهاتف" imgPath="/assets/icons/form/phone.png" placeholder="رقم الهاتف" alt="phone icon"/>
     
          <Select label="فئة العميل" options={["أفراد", "شركات ومؤسسات"]}/>
          <TextArea label="الرسالة" placeholder="اكتب رسالتك هنا" />
         
          <CheckBox label="أوافق على سياسة الخصوصية" />
          <Button text="إرسال استمارة التواصل" />
        </form>
      </div>
    </section>
  );
};

export default BranchContactForm;

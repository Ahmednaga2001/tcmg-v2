"use client";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import styles from "./page.module.css"
const RequestLawyer = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
        <h2>استمارة لطلب توكيل محامي متخصص</h2>
        <form action="">
          <div className={styles.names}>
            <Input label="الاسم الاول" imgPath="/assets/icons/hireattorny/person.png" placeholder="الاسم الاول" alt="person icon"/>
            <Input label="اسم العائلة" imgPath="/assets/icons/hireattorny/person.png" placeholder="اسم العائلة" alt="person icon"/>
          </div>
          <Input label="البريد الالكتروني" imgPath="/assets/icons/hireattorny/email.png" placeholder="البريد الالكتروني" alt="email icon"/>
         
          <Input label="رقم الهاتف" imgPath="/assets/icons/hireattorny/phone.png" placeholder="رقم الهاتف" alt="phone icon"/>
       
          <SelectComponent 
                        options={[{value:"أفراد"}, {value:"شركات ومؤسسات"}]} 
                        head="فئة العميل" 
                        selectedOption={selectedClient} 
                        setSelectedOption={setSelectedClient} 
                     />    
       
          <SelectComponent head={"اختر المكتب"}/>
        <SelectComponent head={"اختر التخصص"}/>
          <div className={styles.inp}>
            <textarea
              name=""
              id=""
              placeholder="ما هي قضيتك المراد توكيل محامي لها؟"
            ></textarea>
            <span>?</span>
          </div>
         <CheckBox label="أوافق على سياسة الخصوصية"/>
          <Button text="ارسال"/>
        </form>
      </div>
    </section>
  );
};

export default RequestLawyer;

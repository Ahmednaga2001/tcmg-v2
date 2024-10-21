"use client";
import Button from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Input from "@/components/ui/Input";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import { useState } from "react";
import styles from "./page.module.css"
const officeOptions = [
  {
    value : 'a'
  }
]
const majorOptions = [
  {
    value : 'a'
  }
]
const officeOption = [
  {
    value : 'a'
  }
]
const RequestLawyer = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedOffice,setSelectedOffice] = useState(null)
  const [selectedMajor , setSelectedMajor] = useState(null)
  return (
    <section className={styles.RequestLawyer}>
      <div className={styles.formPage}>
        <h2>استمارة لطلب توكيل محامي متخصص</h2>
        <form action="">
          <div className={styles.names}>
          <Input
              label="الاسم الاول"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="الاسم الاول"
              alt={"person icon"}
            />

            <Input
              label="اسم العائلة"
              imgPath="/assets/icons/form/solar_user-bold.svg"
              placeholder="اسم العائلة"
              alt={"person icon"}
            />
          </div>

          <Input
            label="البريد الالكتروني"
            imgPath="/assets/icons/form/ic_round-email.svg"
            placeholder="البريد الالكتروني"
            alt={"email icon"}
          />

          <Input
            label="رقم الهاتف"
            imgPath="/assets/icons/form/ic_round-phone.svg"
            placeholder="رقم الهاتف"
            alt={"phone icon"}
          />
          <SelectComponent 
                        options={[{value:"أفراد"}, {value:"شركات ومؤسسات"}]} 
                        head="فئة العميل" 
                        selectedOption={selectedClient} 
                        setSelectedOption={setSelectedClient} 
                        imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
                        w={24}
                        h={24}
                     />    
       
          <SelectComponent head={"اختر المكتب"}
           options={officeOptions} selectedOption={selectedOffice} setSelectedOption={setSelectedOffice}
           imgPath="/assets/icons/form/mdi_arrow-down-drop.svg"
           w={24}
           h={24}
           />
          <Input 
                    label="التخصص" 
                    placeholder="التخصص"
                    imgPath={"/assets/icons/form/category.png"}
                    
                    />
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

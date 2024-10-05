import React from 'react'
import styles from "./page.module.css"
import Input from '@/components/ui/Input'
import SelectComponent from '@/components/ui/selectComponent/SelectComponent'
import { useState } from 'react'
import CheckBox from '@/components/ui/CheckBox'
import Image from 'next/image'
import CardInfo from '../cardInfo.jsx/CardInfo'
const options = [
    {
        value: 'أفراد',
    },
    {
        value: 'مؤسسات وشركات',
    },
]
export default function AdditionalInfo() {
    const [selectedOption, setSelectedOption] = useState(null)
    return (
        <section className={styles.additionalInfo}>
            <div className={styles.formPage}>
                <form action="">
                    <Input
                        label="الاسم بالكامل"
                        placeholder="الاسم بالكامل"
                        imgPath="/assets/icons/form/solar_user-bold.png"
                        style={{
                            background: "linear-gradient(var(--main))",
                            border: "1px solid #fff",
                        }}
                        color="#fff"
                    />
                    <Input label="رقم الهاتف" imgPath={"/assets/icons/form/ic_round-phone.png"} style={{
                        background: "linear-gradient(var(--main))",
                        border: "1px solid #fff",
                    }}
                        color="#fff" />

                    <SelectComponent options={options} head={"فئة العميل"} selectedOption={selectedOption} setSelectedOption={setSelectedOption}
                        label={"فئة العميل ( إختر النوع)"}
                        imgPath={'/assets/icons/form/mdi_arrow-down-drop.png'}
                        w={24}
                        h={24}
                        style={{
                            background: "linear-gradient(var(--main))",
                            border: "1px solid #fff",
                            color: "#fff"
                        }}
                    />
                    <div className={styles.message}>
                        <label htmlFor="message">موضوع الإستشارة</label>
                        <div className={styles.inp} >
                            <textarea name="" id="message" placeholder="كيف سمعت عنا؟"></textarea>
                            <span>؟</span>
                        </div>
                    </div>

                    <div className={styles.terms} >
                        <input type="checkbox" name="" id="" />
                        أوافق على سياسة الخصوصية و سياسة الإستخدام

                    </div>
                    <button type="submit" className={styles.registerWay}>
                        المتابعة
                        <Image src="/assets/icons/form/arrow-left-black.png" width={24} height={24} alt="arrow-left icon" />

                    </button>

                </form>
            </div>
            <CardInfo/>
        </section>
    )
}

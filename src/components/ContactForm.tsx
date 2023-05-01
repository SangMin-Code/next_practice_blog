'use client';

import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";
import { EmailData } from "@/service/email";

const DEFAULT_DATA =  {from:'',subject:'',message:''}


const ContactForm =()=>{
    const [form, setForm] = useState<EmailData>(DEFAULT_DATA);
    const [banner, setBanner] = useState<BannerData | null>(null);


    const onChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const {name, value} = e.target;
        setForm(prev=> ({...prev,[name]:value}))
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        sendContactEmail(form).then(()=>{
            setBanner({message:'메일을 성공적으로 보냈습니다.', 'state':'success'})
            setForm(DEFAULT_DATA);
        }).catch(()=>{
            setBanner({message:'메일전송에 실패했습니다.', 'state':'error'})
        }).finally(()=>{
            setTimeout(()=>{setBanner(null)},3000)
        });
    }

    return(
        <section className="w-full max-w-md">
            {banner && <Banner banner={banner}/> }
            <form onSubmit={onSubmit}
                className="flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl text-white">
                <label htmlFor="from" className="font-semibold">Your Email</label>
                <input 
                    type="email"  
                    id="from" 
                    name="from" 
                    required 
                    autoFocus 
                    value={form.from} 
                    onChange={onChange}
                    className="text-black"/>
                <label htmlFor="title" className="font-semibold">Subject</label>
                <input 
                    type="text"  
                    id="subject" 
                    name="subject" 
                    required 
                    value={form.subject} 
                    onChange={onChange}
                    className="text-black"/>
                <label htmlFor="message" className="font-semibold">Message</label>
                <textarea 
                    rows={10}  
                    id="message" 
                    name="message" 
                    required 
                    value={form.message} 
                    onChange={onChange}
                    className="text-black"/>
                <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
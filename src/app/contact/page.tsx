import ContactForm from "@/components/ContactForm"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"

const LINKS = [
    {icon: <AiFillGithub/>, url:''},
    {icon: <AiFillLinkedin/>, url:''},
    {icon: <AiFillYoutube/>, url:''}
]

export default function Contact(){
    return(
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold my-2">Contact me</h2>
            <p>test@test.com</p>
            <ul className="flex gap-4 my-2">
                {LINKS.map((link,idx)=>
                 <a key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-5xl hover:text-red-400">{link.icon}</a>)}
            </ul>
            <h2 className="text-3xl font-bold my-8">Send me an email</h2>
            <ContactForm/>
        </section>
    )
}
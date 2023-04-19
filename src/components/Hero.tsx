import Image from "next/image"
import Link from "next/link"
import profile from '../../public/images/cat.jpg'

export default function Hero(){
    return(
        <section className="flex flex-col justify-center items-center">
            <Image  
                className='rounded-full'
                width={250} 
                height={250} 
                src={profile} 
                alt="profile"
                priority
                />
            <h1 className='text-4xl font-bold'>Hi Blog</h1>
            <h2 className='text-xl font-semibold'>Front-end Engineer</h2>
            <h3 className='text-lg text-gray-400 mb-2'>넥스트 사용한 블로그 연습</h3>
            <Link href='/contact'>
              <button className='bg-orange-500 font-bold rounded-full px-4 py-2 '>Contact me</button>
            </Link>
      </section>
    )
}
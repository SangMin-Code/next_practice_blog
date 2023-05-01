import Link from 'next/link'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata = {
  title: {default:'blog', template:'blog | %s'},
  description: 'blog',
  icons: {icon:'/favicon.ico'}
}
const sans = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col m-auto max-w-screen-xl h-screen">
        <Header/>
        <main className='grow'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

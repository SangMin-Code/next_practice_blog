import Link from "next/link";

export default function Header(){
    return(
        <header className="flex justify-between items-center p-4">
        <nav className="text-2xl font-bold">
          <Link href={'/'}>My Blog</Link>
        </nav>
        <nav className='flex gap-x-4 text-sm font-bold'>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/posts'}>Posts</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
    </header>
    )
}
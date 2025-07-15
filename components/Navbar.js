import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  
  return (
    <nav className='h-16 bg-slate-900 flex justify-between px-3 items-center text-white'>
        <div className='logo font-bold text-lg'>
            SwiftLinks
        </div>
        <ul className='flex justify-between gap-4 items-center'>

            <li><Link href="/">Home </Link></li>
            <li><Link href="/about">About </Link></li>
            <li><Link href="/shorten">shorten </Link></li>
            <li><Link href="/#Footer" >Contact Us </Link></li>
            <div className='flex gap-4'>
                <Link href="/shorten"><button className='bg-cyan-400 rounded-lg shadow-lg px-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-emerald-600 rounded-lg shadow-lg px-3 py-1 font-bold'>GitHub</button></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar

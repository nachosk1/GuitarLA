import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-black p-8 py-36 mt-32 md:mt-36'>
            <div className='container mx-auto flex flex-col md:flex-row items-center gap-4 md:justify-between text-white'>
                <nav className='flex flex-col p-4 items-center md:flex-row text-[2.2rem] font-semibold gap-x-8'>
                    <Link href='/' className='p-1 rounded hover:bg-amber-500 transition duration-300'>
                        Inicio
                    </Link>
                    <Link href='/us' className='p-1 rounded hover:bg-amber-500 transition duration-300'>
                        Nosotros
                    </Link>
                    <Link href='/blog' className='p-1 rounded hover:bg-amber-500 transition duration-300'>
                        Blog
                    </Link>
                    <Link href='/store' className='p-1 rounded hover:bg-amber-500 transition duration-300'>
                        Tienda
                    </Link>
                </nav>
                <p className='text-center font-light'>@Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    return (
        <header className='header w-full py-28 px-8 bg-cover bg-center mx-auto'>
            <div className='container flex md:flex-row md:justify-between flex-col items-center mx-auto'>
                <Link href={'/'}>
                    <Image src='/img/logo.svg' alt='imagen logotipo' width={300} height={40} priority={true} /> 
                </Link>
                
                <nav className='mt-10 md:mt-0 text-white flex gap-8 text-3xl font-semibold items-center'>
                    <Link href='/' className={`p-1 rounded hover:bg-amber-500 transition duration-300 ${router.pathname === '/' ? 'bg-amber-500' : ''}`}>
                        Inicio
                    </Link>
                    <Link href='/us' className={`p-1 rounded hover:bg-amber-500 transition duration-300 ${router.pathname === '/us' ? 'bg-amber-500' : ''}`}>
                        Nosotros
                    </Link>
                    <Link href='/store' className={`p-1 rounded hover:bg-amber-500 transition duration-300 ${router.pathname === '/store' ? 'bg-amber-500' : ''}`}>
                        Tienda
                    </Link>
                    <Link href='/blog' className={`p-1 rounded hover:bg-amber-500 transition duration-300 ${router.pathname === '/blog' ? 'bg-amber-500' : ''}`}>
                        Blog
                    </Link>      
                    <Link href='/shop' className={`p-1 rounded hover:bg-amber-500 transition duration-300 ${router.pathname === '/blog' ? 'bg-amber-500' : ''}`}>
                        <Image src='/img/carrito.png' width={30} height={20} alt='image shop'/>
                    </Link>      
                </nav>
            </div>
        </header>
    )
}

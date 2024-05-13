import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Guitar({ guitar }) {
    const { description, image, name, price, url } = guitar
    return (
        <div className='grid lg:grid-cols-2 gap-4 place-items-center items-center max-w-[70rem] m-auto'>
            <Image src={image} width={100} height={100} alt={`Imagen guitarra ${name}`} className='w-64 '/>
            <div className='p-4 lg:w-64 xl:w-full overflow-hidden'>
                <h3 className='text-5xl uppercase text-primary mb-8 font-semibold'>{name}</h3>
                <p className='description'>{description}</p>
                <p className='text-primary text-[4rem] m-0 font-black'>${price}</p>
                <Link href={`/guitars/${url}`} className='mt-8 block bg-black text-white p-4 text-center uppercase text-[1.6rem] font-bold hover:bg-primary transition duration-300'>Ver producto</Link>
            </div>
        </div>
    )
}



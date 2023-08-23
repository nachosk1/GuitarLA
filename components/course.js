import Image from 'next/image'
import React from 'react'

export default function Course({ course }) {
    const { title, content, image } = course?.attributes
    return (
        <section className='py-36'>
            <div className='relative w-full h-[70rem] md:h-[60rem]'>
                <Image
                    src={image?.data?.attributes?.url}
                    alt={title}
                    width={400}
                    height={200}
                    className='w-full h-full object-center object-cover'
                />
                <div className='bg-black bg-opacity-50 w-full h-[70rem] md:h-[60rem] absolute top-0'></div>
                <div className='absolute top-0 grid gri md:grid-cols-2 container mx-auto right-0 left-0 h-full'>
                    <div className='hidden md:flex'></div>
                    <div className='grid place-content-center -mt-16 px-8'>
                        <h3 className='heading text-primary '>{title}</h3>
                        <p className='text-center text-white text-[2.4rem]'>{content}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

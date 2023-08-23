import { formatDate } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'

export default function Post({post}) {
    const {title, content, image, url, publishedAt} = post

    return (
        <article>
            <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${title}`} className='bg-cover'/>
            <div className='my-6'>
                <h3 className='font-black text-[2.8rem] m-0 blog_h3'>{title}</h3>
                <p className='text-[1.6rem] text-primary'>{formatDate(publishedAt)}</p>
                <p className='summary'>{content}</p>
                <Link href={`/blog/${url}`} className='mt-8 block bg-black text-white p-4 text-center uppercase text-[2rem] font-bold hover:bg-primary transition duration-300'>
                    Leer Post
                </Link>
            </div>
        </article>
    )
}

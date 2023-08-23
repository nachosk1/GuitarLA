import Layout from "@/components/Layout"
import { formatDate } from "@/utils/helpers"
import Image from "next/image"

export default function Post({ post }) {
    const { title, content, image, publishedAt } = post[0].attributes
    return (
        <Layout
            title={title}
        >
            <article className="max-w-[80rem] mx-auto mt-20 px-8">
                <h3 className='font-black text-[2.8rem] m-0 blog_h3'>{title}</h3>
                <Image src={image.data.attributes.url} width={800} height={400} alt={`imagen blog ${title}`} className='bg-cover mt-8' />
                <div className='my-6'>
                    <p className='text-[1.6rem] text-primary'>{formatDate(publishedAt)}</p>
                    <p className='whitespace-pre-wrap'>{content}</p>
                </div>
            </article>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const { data: post } = await response.json()

    return {
        props: {
            post
        }
    }
}
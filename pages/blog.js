import Layout from '@/components/Layout'
import Post from '@/components/post'
import React from 'react'

export default function Blog({posts}) {
    
    return (
        <Layout
            title={'Blog'}
            description={'Blog de música, venta de guitarras, consejos, GuitaLA'}
        >
            <main className=''>
                <h1 className='heading text-primary'>Blog</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8'>
                    {posts.map(post => (
                        <Post 
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const {data: posts} = await response.json()
    return {
        props: {
            posts
        }
    }
}

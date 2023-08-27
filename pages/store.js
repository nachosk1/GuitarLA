import Layout from '@/components/Layout'
import Guitar from '@/components/guitar'
import React from 'react'

export default function Store({ guitars }) {

    return (
        <Layout
            title={'Tienda'}
            description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
        >
            <main className='container mx-auto px-4'>
                <h1 className='heading text-primary'>Tienda</h1>
                <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
                    {guitars?.map(guitar => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar.attributes}
                        />
                    ))}
                </div>

            </main>
        </Layout>
    )
}

//export async function getStaticProps() {
//    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
//    const {data: guitars} = await response.json()
//    return {
//        props: {
//            guitars
//        }
//    }
//}

export async function getServerSideProps() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
    const { data: guitars } = await response.json()
    return {
        props: {
            guitars
        }
    }
}

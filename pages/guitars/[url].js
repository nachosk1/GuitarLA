import Layout from "@/components/Layout"
import Image from "next/image"

export default function Product({ guitar }) {

    const { name, description, image, price } = guitar[0].attributes
    return (
        <Layout 
            title={`Guitarra ${name}`}
        >
            <div className='grid lg:grid-cols-2 gap-4 place-items-center items-center max-w-[70rem] m-auto'>
                <Image src={image.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${name}`} />
                <div className='p-4 lg:w-64 xl:w-full overflow-hidden'>
                    <h3 className='text-5xl uppercase text-primary mb-8 font-semibold'>{name}</h3>
                    <p className='description'>{description}</p>
                    <p className='text-primary text-[4rem] m-0 font-black'>${price}</p>
                </div>
            </div>
        </Layout>

    )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.API_URL}/guitars`)
    const { data } = await response.json()

    const paths = data.map(guitar => ({
        params: {
            url: guitar.attributes.url
        }
    }))

    return {
        paths,
        fallback: false  //en caso de la url no encuentre un producto y da error 404 es por el fallback
    }
}

export async function getStaticProps({ params: { url } }) {

    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const { data: guitar } = await response.json()

    return {
        props: {
            guitar
        }
    }
}

//export async function getServerSideProps({ query: { url } }) {
//    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
//    const { data: guitar } = await response.json()
//
//    return {
//        props: {
//            guitar
//        }
//    }
//}
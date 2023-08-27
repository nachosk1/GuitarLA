import { useState } from "react"
import Layout from "@/components/Layout"
import Image from "next/image"



export default function Product({ guitar, addShop }) {
    const { name, description, image, price } = guitar[0].attributes
    const [amount, setAmount] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        if(amount < 1){
            alert("cantidad no válida")
            return
        }

        // Construir un objeto 
        const guitarSelected = {
            id: guitar[0].id,
            image: image.data.attributes.url,
            name,
            price,
            amount
        }

        // Pasando la información 
        addShop(guitarSelected)
    }
    return (
        <Layout 
            title={`Guitarra ${name}`}
        >
            <div className='grid lg:grid-cols-2 gap-4 place-items-center items-center max-w-[70rem] mt-20 m-auto'>
                <Image src={image.data.attributes.url} width={200} height={200} alt={`Imagen guitarra ${name}`} />
                <div className='p-4 lg:w-64 xl:w-full overflow-hidden'>
                    <h3 className='text-5xl uppercase text-primary mb-8 font-semibold'>{name}</h3>
                    <p className='description'>{description}</p>
                    <p className='text-primary text-[4rem] m-0 font-black'>${price}</p>
                    <form 
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-4"
                    >
                        <label htmlFor="amount" className="text-[2.2rem]">Cantidad:</label>
                        <select 
                            id="amount" 
                            className="border p-4 text-center cursor-pointer"
                            onChange={ e => setAmount(Number(e.target.value)) }
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value={"agregar al carrito"} className="mt-4 block bg-black text-white p-5 text-center cursor-pointer uppercase text-[1.6rem] font-bold hover:bg-primary transition duration-300"/>
                    </form>
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
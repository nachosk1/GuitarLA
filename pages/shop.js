import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";


export default function Shop({ shop, updateAmount, deleteProduct }) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const calculationTotal = shop.reduce((total, product) => total + (product.amount * product.price), 0)
        setTotal(calculationTotal)
    }, [shop])

    return (
        <Layout
            title="Carrito de compra"
        >
            <main className="container mx-auto">
                <h1 className="heading text-primary">Carrito</h1>
                <div className="grid items-start gap-20 md:grid-cols-2">
                    <div className="py-12">
                        <h2>Articulos</h2>
                        {shop.length === 0 ? 'Carrito vacio' : (
                            shop.map(product => (
                                <div key={product.id} className="grid grid-cols-2 gap-16 items-center py-12 border-b-2 last-of-type:border-none relative">
                                    <div>
                                        <Image src={product.image} width={250} height={480} alt={`producto ${product.name}`} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[4.2rem]">{product.name}</p>
                                        <div className="">
                                            <p>Cantidad:</p>
                                            <select
                                                className="border p-4 text-center cursor-pointer w-full mb-8"
                                                onChange={e => updateAmount({
                                                    id: product.id,
                                                    amount: e.target.value
                                                })}
                                                value={product.amount}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <p>$<span className="font-black text-[3.2rem] mt-8 text-primary">{product.price}</span></p>
                                        <p>Subtotal: $<span className="font-black text-[3.2rem]">{product.amount * product.price}</span></p>
                                    </div>
                                    <button 
                                        type="button" 
                                        className="cursor-pointer absolute top-12 right-0"
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <aside className="bg-[#F9FAFB] rounded-lg p-12" >
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

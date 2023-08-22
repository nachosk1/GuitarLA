import Layout from "@/components/Layout"
import Link from "next/link"

export default function Pagina404() {
    return (
        <Layout
            title="Página no encontrada"
        >
            <div className="">
                <p className="text-[2.4rem] text-center mt-20">Página no encontrada</p>
                <Link href={'/'} className="text-[1.8rem] block text-primary text-center">
                    Ir a Inicio
                </Link>
            </div>
        </Layout>
    )
}

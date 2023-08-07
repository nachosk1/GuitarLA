import Layout from "@/components/Layout"
import Image from "next/image"

const Us = () => {
    return (
        <>
            <Layout
                title={'Nosotros'}
                description={'Sobre nosotros, guitarLA, tienda de música'}
            >
                <main className="container mx-auto">
                    <h1 className="heading text-primary">Nosotros</h1>

                    <div className="grid gap-8  md:grid-cols-2">
                        <Image src='/img/nosotros.jpg' alt="imagen nosotros" width={1000} height={800} priority={'true'} className="px-4 md:px-0"/>
                        <div className="mx-8 md:mx-0">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a venenatis magna. Nam neque urna, fringilla eu felis et, varius faucibus lectus. Pellentesque convallis mauris ut nisi euismod, ut congue enim ullamcorper. Suspendisse rhoncus ipsum nisi, eu sollicitudin orci fringilla non. Fusce mattis, lorem non sodales viverra, nisl tortor blandit odio, sed sollicitudin metus metus id nisl. Donec turpis eros, sodales a luctus nec, semper posuere urna. Aenean lobortis sem enim, a ultricies ligula porta at. Aliquam sagittis, sapien vitae auctor lobortis, lorem erat pellentesque diam, nec luctus nisl tellus a nulla. Donec semper turpis id massa venenatis, ut rhoncus neque vestibulum. 
                            </p>
                            <p>
                                Vestibulum rhoncus laoreet tellus, quis tristique turpis interdum sed. Aliquam erat volutpat. Aenean non ante ac arcu porta ultricies. Aenean feugiat eros nec sem rutrum, vitae eleifend purus ullamcorper. Curabitur sodales facilisis eleifend. Morbi feugiat felis vulputate scelerisque hendrerit. Maecenas tempus, enim non lobortis bibendum, tortor elit pretium nulla, ut vulputate orci nunc a dui. Maecenas arcu tortor, congue porta tellus a, mattis volutpat dui.
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Us

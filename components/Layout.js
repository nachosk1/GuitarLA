import Head from "next/head"
import Header from "./header"
import Footer from "./footer"


export default function Layout({ children, title = '', description = '' }) {
    return (
        <>
            <Head>
                <title>{`GuitarLa - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>
            <div className="min-h-screen flex flex-col w-full justify-between">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

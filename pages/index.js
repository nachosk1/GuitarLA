import Layout from "@/components/Layout"
import Course from "@/components/course"
import Guitar from "@/components/guitar"
import Post from "@/components/post"
import { guitars } from "@/constants"

export default function Home() {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitars , {data: posts}y más'}
      >
        <main className="max-w-7xl mx-auto">
          <h1 className="heading text-primary">Nuestra Colección</h1>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
            {guitars?.map(guitar => (
              <Guitar
                key={guitar.id}
                guitar={guitar}
              />
            ))}
          </div>
        </main>
        
      </Layout>
    </>
  )
}



import Layout from "@/components/Layout"
import Course from "@/components/course"
import Guitar from "@/components/guitar"
import Post from "@/components/post"

export default function Home({ guitars, posts, course }) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitars , {data: posts}y más'}
      >
        <main className="container mx-auto">
          <h1 className="heading text-primary">Nuestra Colección</h1>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
            {guitars?.map(guitar => (
              <Guitar
                key={guitar.id}
                guitar={guitar.attributes}
              />
            ))}
          </div>
        </main>
        <Course 
          course={course}
        />
        <section className="container mx-auto -mt-16">
          <h2 className="heading text-primary">Blog</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8'>
            {posts.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`
  const urlPosts = `${process.env.API_URL}/posts?populate=image`
  const urlCourses = `${process.env.API_URL}/course?populate=image`

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourses)
  ])
  const [{ data: guitars }, { data: posts }, { data: course}] = await Promise.all([
    resGuitars.json(),
    resPosts.json(),
    resCourse.json()
  ])

  return {
    props: {
      guitars,
      posts,
      course
    }
  }
}

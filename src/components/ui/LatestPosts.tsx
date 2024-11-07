import Link from 'next/link'

async function getPosts() {
  // En una aplicación real, esto sería una llamada a una API o base de datos
  return [
    { id: 1, title: "Introducción a Next.js 13", slug: "intro-nextjs-13" },
    { id: 2, title: "Optimización de Rendimiento en React", slug: "optimizacion-rendimiento-react" },
    { id: 3, title: "Diseño de APIs RESTful", slug: "diseno-apis-restful" },
  ]
}

export default async function LatestPosts() {
  const posts = await getPosts()

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="border-b pb-2">
          <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
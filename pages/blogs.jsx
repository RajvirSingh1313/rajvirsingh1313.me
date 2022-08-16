import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link"
import Image from "next/image"

export default function blogs({ posts }) {
  return (
    <main className="overflow-hidden scroll-none px-10 xl:px-24 sm:py-10 text-2xl h-full min-h-screen w-full flex flex-col space-y-2 items-center">
      {posts.length > 0 ? posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          <div className="link py-4 bg-lightBlue flex flex-col justify-between items-center rounded-xl shadow-lg hover:shadow-2xl hover:bg-midBlue/30 border-2 border-lightBlue hover:border-activeBlue w-1/2">
            <h3 className="text-white/50 text-lg">{post.frontMatter.date}</h3>
            <p className="text-activeBlue text-3xl font-bold break-words">{post.frontMatter.title}</p>
            <h1 className="text-white italic text-xl">{post.frontMatter.subHeading}</h1>
          </div>
        </Link>
      )):<h3>Just being lazy....</h3>}
    </main>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}


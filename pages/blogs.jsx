import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link"
import Head from "next/head"

export default function blogs({ posts }) {
  return (
    <>
      <Head>
        <title>Blogs - Rajvir Singh</title>
        <meta name="author" content="Rajvir Singh" />
        <meta name="keywords" content="blogs, articles, how, about, tech stacks, react, vue, electron, freelancing, freelancer developer, software developer" />
      </Head>
      <main className="overflow-hidden scroll-none px-10 xl:px-24 sm:py-10 text-2xl w-full grid lg:grid-cols-3 gap-2">
        {posts.length > 0 ? posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <div className="link py-4 px-8 text-center bg-lightBlue flex flex-col justify-between items-center rounded-xl shadow-lg hover:shadow-2xl hover:bg-midBlue/30 border-2 border-lightBlue hover:border-activeBlue w-full h-full">
              <h3 className="text-white/50 text-lg">{post.frontMatter.date}</h3>
              <p className="text-activeBlue text-3xl font-bold break-words">{post.frontMatter.title}</p>

              <div className="flex text-base font-medium space-x-1 w-full justify-center my-2">
                {
                  post.frontMatter.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-midBlue/50 rounded-full">{tag}</span>
                  ))
                }
              </div>

            </div>
          </Link>
        )) : <h3></h3>}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0].replaceAll(' ', '-').replaceAll('?', '!')
    }
  })
  return {
    props: {
      posts
    }
  }
}


import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import Head from "next/head";
import mdxPrism from "mdx-prism";

export default function Article({ mdxSource }) {
    return (
        <>
            <Head>
                <title>{mdxSource.frontmatter.title} - Rajvir Singh</title>

                <title>Rajvir Singh</title>
                <meta
                    name="description"
                    content="My name is Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic"
                />
                <meta
                    property="og:title"
                    content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic"
                />
                <meta property="og:description" content="Available for work" />
                <meta
                    property="og:image"
                    content="/OG Image.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta
                    property="twitter:og:title"
                    content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic"
                />
                <meta property="twitter:og:description" content="Available for work" />
                <meta
                    property="twitter:og:image"
                    content="/OG Image.png"
                />
                <meta property="twitter:og:image:width" content="1200" />
                <meta property="twitter:og:image:height" content="630" />

                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main className="px-10 xl:px-24 sm:py-10 text-2xl h-full w-full flex flex-col items-center">
                <h3 className="text-white/50">{mdxSource.frontmatter.date}</h3>
                <h1 className="text-activeBlue text-5xl font-bold my-2">{mdxSource.frontmatter.title}</h1>
                <h1 className="text-white italic text-3xl my-2 mb-4">{mdxSource.frontmatter.subHeading}</h1>
                <hr className="w-1/2 border-2 border-white/20 my-4" />
                <div className="prose text-white text-xl prose-code">
                    <MDXRemote {...mdxSource} />
                </div>
            </main>
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
        slug + '.mdx'), 'utf-8');
    const mdxSource = await serialize(markdownWithMeta, {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [mdxPrism]
        }
    })
    return {
        props: {
            slug,
            mdxSource
        }
    }
}

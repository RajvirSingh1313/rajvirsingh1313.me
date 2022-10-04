import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import Head from "next/head";
import mdxPrism from "mdx-prism";
import CustomLink from '../../components/CustomLink';
import IconsRow from '../../components/IconsRow';

export default function Article({ mdxSource }) {
    return (
        <>
            <Head>
                <title>{mdxSource.frontmatter.title} - Rajvir Singh</title>
                <meta name="author" content="Rajvir Singh"/>
                <meta name="keywords" content={"blog, article" + ", " + mdxSource.frontmatter.tags.join(', ')} />
            </Head>
            <main className="px-10 xl:px-24 sm:py-10 text-2xl h-full w-full flex flex-col items-center">
                <h3 className="text-white/50">{mdxSource.frontmatter.date}</h3>
                <h1 className="text-activeBlue text-5xl font-bold my-2">{mdxSource.frontmatter.title}</h1>
                <div className="flex text-base font-medium space-x-1 w-full justify-center my-2">
                    {
                        mdxSource.frontmatter.tags.map((tag,index) => (
                            <span key={index} className="px-2 py-1 bg-midBlue/50 rounded-full">{tag}</span>
                        ))
                    }
                </div>

                <hr className="w-1/2 border-2 border-white/20 my-4" />
                <div className="prose text-white text-xl prose-code">
                    <MDXRemote {...mdxSource}
                        components={{
                            a: CustomLink,
                        }} />
                </div>

                <hr className="w-1/2 border-2 border-white/20 my-4" />
                <h5 className="text-xl font-medium w-1/2 text-justify">
                    I hope you enjoyed the article, if you really liked 💖 it then please share with others as it helps me alot and also
                    follow me on :-
                </h5>
                <IconsRow className="my-4"/>
            </main>

        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '').replaceAll(' ', '-').replaceAll('?', '!')
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
        slug.replaceAll('-', ' ').replaceAll('!', '?') + '.mdx'), 'utf-8');
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

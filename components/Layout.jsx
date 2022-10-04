import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className="h-full min-h-screen bg-gradient-to-bl from-[#091D45] to-[#070332] text-white outline-none">
            <link
                href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;900&display=swap"
                rel="stylesheet"
            />
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Rajvir Singh</title>
                <meta name="title" content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic" />
                <meta name="description" content="Available for work" />
                <meta name="keywords" content="tech, startups, thoughts, agriculture, Iot, blogs, articles, how, about, tech stacks, react, vue, electron, freelancing, freelancer developer, software developer" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rajvirsingh1313-me.vercel.app/" />
                <meta property="og:title" content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic" />
                <meta property="og:description" content="Available for work" />
                <meta property="og:image" content="/OG Image.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://rajvirsingh1313-me.vercel.app/" />
                <meta property="twitter:title" content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic" />
                <meta property="twitter:description" content="Available for work" />
                <meta property="twitter:image" content="/OG Image.png" />


                <link rel="icon" href="/favicon.ico" />

                <meta name="google-site-verification" content="1EN81TY1VlquZEMlgq-vWfto5P6x6csAdy74509u8W8" />
            </Head>

            <Navbar />
            {children}
        </div>)
}

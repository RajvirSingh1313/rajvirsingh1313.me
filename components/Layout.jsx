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

            <Navbar />
            {children}
        </div>)
}

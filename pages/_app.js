import 'tailwindcss/tailwind.css'
import './index.css';
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }} >
        <meta http-equiv="Content-Security-Policy" content="script-src 'none'" />
        <meta name="description" content="My name is Rajvir Singh, And I am from Punjab, India. I am currently a developer, a freelancer, a blogger. yeah I also want to become a material scientist but sure, I will be. I don’t know what to say here but yeah just check out some of my work on github" />
        <meta name="keywords" content="Programmer, Freelancer, Programming, Portfolio" />
      </Helmet>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

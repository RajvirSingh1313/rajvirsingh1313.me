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
          <meta http-equiv="Content-Security-Policy" content="script-src 'none'"/>
        </Helmet>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

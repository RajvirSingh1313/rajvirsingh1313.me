import "../styles/globals.css";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatedCursor
        color="255,255,255"
        innerSize={10}
        outerSize={40}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        trailingSpeed={8}
        outerStyle={{
          border: "3px solid #25C8FF"
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

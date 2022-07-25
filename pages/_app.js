import "../styles/globals.css";
import Fixed from "../components/Layout/Fixed";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F87171" showOnShallow={false} />
      <Fixed>
        <Component {...pageProps} />
      </Fixed>
    </>
  );
}

export default MyApp;

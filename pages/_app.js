import "../styles/globals.css";
import Fixed from "../components/Layout/Fixed";

function MyApp({ Component, pageProps }) {
  return (
    <Fixed>
      <Component {...pageProps} />
    </Fixed>
  );
}

export default MyApp;

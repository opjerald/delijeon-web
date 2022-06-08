import Head from "next/head";
import "../../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Delijeon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

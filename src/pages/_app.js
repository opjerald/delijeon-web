import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Navigation from "../components/Navigation";

import "../assets/css/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Delijeon</title>
      </Head>
      <MantineProvider
        emotionOptions={{ key: "mantine", prepend: false }}
        theme={{
          primaryColor: "yellow",
        }}
      >
        <Navigation />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;

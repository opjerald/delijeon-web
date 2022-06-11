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
        <div className="relative h-screen">
          <Navigation />
          <Component {...pageProps} />
        </div>
      </MantineProvider>
    </>
  );
};

export default App;

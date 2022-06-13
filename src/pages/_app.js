import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Drawer from "../components/Drawer";

import "../assets/css/index.css";

const App = ({ Component, pageProps }) => {
  const [open, setOpen] = useState(false);
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
        <Drawer setOpen={setOpen} open={open} />
        <Navigation setOpen={setOpen} />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;

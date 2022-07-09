import "../styles/globals.css";
import type { AppProps } from "next/app";
import Drawer from "../components/navbar";

import createEmotionCache from "../lib/createEmotionCache";
import "../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import theme from "../styles/theme/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MS2DBProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MS2DB(props: MS2DBProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Drawer headerTitle={pageProps.headerText}>
          <Component {...pageProps} />
        </Drawer>
      </ThemeProvider>
    </CacheProvider>
  );
}

export async function getStaticProps() {
  console.log('_app');
  return { props: {} };
}

export default MS2DB;

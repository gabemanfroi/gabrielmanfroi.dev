'use client';
import '../styles/globals.css';

// import the Head component for appending elements to the head of the page
import Script from 'next/script';
import Head from 'next/head';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RefsProvider } from '@/providers/refsProvider';
import { theme } from '@/core/theme/theme';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Y1N1EGM62B"
      ></Script>
      <Script id="ga" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y1N1EGM62B');`}
      </Script>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{'<GabrielManfroi />'}</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RefsProvider>
            <Component {...pageProps} />{' '}
            <ReactQueryDevtools initialIsOpen={false} />
          </RefsProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

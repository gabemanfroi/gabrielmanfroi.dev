'use client';
import '../styles/globals.css';

// import the Head component for appending elements to the head of the page
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
      {/* Add the favicon */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Gabriel&apos;s Portfolio</title>
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}
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

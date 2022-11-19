import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import '../styles/styles.scss';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        <Toaster position="top-center" reverseOrder={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;

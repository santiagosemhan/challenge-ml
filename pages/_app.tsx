/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import NextNProgress from 'nextjs-progressbar';

import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress
        color="#2c3479"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

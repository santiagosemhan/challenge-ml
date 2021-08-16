/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';

import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

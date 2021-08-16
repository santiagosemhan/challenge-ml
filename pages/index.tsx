import Head from 'next/head';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Mercado Libre Argentina</title>
      <meta
        name="description"
        content="La comunidad de compra y venta online más grande de América Latina."
      />
    </Head>
  </div>
);

export default Home;

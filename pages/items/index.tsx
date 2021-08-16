import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import ProductRow from '@/components/ProductRow/ProductRow';

type Props = {
  search: string;
  items: any[];
};

export const IndexPage: NextPage<Props> = ({
  search,
  items,
}: Props): JSX.Element => (
  <div className="container mx-auto px-24 py-8">
    <Head>
      <title>Mercado Libre Argentina</title>
    </Head>
    {items.length > 0 ? (
      <div className="bg-white p-4">
        {items.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div className="flex justify-center py-12">{`No se han encontrado resultados para su búsqueda "${search}"`}</div>
    )}
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query } = context;

  if (!query.search) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await fetch(
    `http://${req.headers.host}/api/items?q=${query.search}`
  );
  const results = await response.json();

  return {
    props: {
      search: query.search || null,
      items: results.items,
    },
  };
};

export default IndexPage;

import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import ProductRow from '@/components/ProductRow/ProductRow';
import { parseSearchCriteria } from '../../utils/';

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
      <title>{`${search} | ` || ''}Mercado Libre Argentina</title>
    </Head>
    <div className="bg-white p-4">
      {search &&
        (items.length > 0 ? (
          items.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))
        ) : (
          <div className="flex justify-center py-12">{`No se han encontrado resultados para su búsqueda "${search}"`}</div>
        ))}
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query } = context;
  const criteria = parseSearchCriteria(query.search);
  if (!criteria || (criteria && criteria.length === 0)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await fetch(
    `http://${req.headers.host}/api/items?q=${criteria}`
  );
  const results = await response.json();

  return {
    props: {
      search: criteria || null,
      items: results.items || [],
    },
  };
};

export default IndexPage;

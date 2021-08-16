import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import ProductRow from '@/components/ProductRow/ProductRow';
import { parseSearchCriteria } from '../../utils/';
import Breadcrum from '@/components/Breadcrum/Breadcrum';

type Props = {
  search: string;
  items: any[];
};

export const IndexPage: NextPage<Props> = ({
  search,
  items,
}: Props): JSX.Element => (
  <div className="container mx-auto w-10/12">
    <Head>
      <title>{`${search} | ` || ''}Mercado Libre Argentina</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <Breadcrum />
    <div className="bg-white">
      {search &&
        (items.length > 0 ? (
          <div className="px-4 divide-y divide-ml-light-gray">
            {items.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
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

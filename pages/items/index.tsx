import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import ProductRow from '@/components/ProductRow/ProductRow';
import { parseSearchCriteria } from '../../utils/';
import Breadcrums from '@/components/Breadcrums/Breadcrums';

type Props = {
  search: string;
  categories: string[];
  items: any[];
};

export const IndexPage: NextPage<Props> = ({
  search,
  categories,
  items,
}: Props): JSX.Element => (
  <div className="container mx-auto w-10/12">
    <Head>
      <title>{`${search} | ` || ''}Mercado Libre Argentina</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <Breadcrums categories={categories} />
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
  const { query } = context;
  const criteria = parseSearchCriteria(query.search);
  if (!criteria || (criteria && criteria.length === 0)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const internalApi = process.env.INTERNAL_API || 'http://localhost:3000';
  const response = await fetch(`${internalApi}/api/items?q=${criteria}`);
  const results = await response.json();

  return {
    props: {
      search: criteria || null,
      categories: results.categories || [],
      items: results.items || [],
    },
  };
};

export default IndexPage;

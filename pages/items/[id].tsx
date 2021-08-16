import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import ProductDetail from '@/components/ProductDetail/ProductDetail';

type Props = {
  product: any;
};

export const ProductPage: NextPage<Props> = ({
  product,
}: Props): JSX.Element => (
  <div className="container mx-auto px-24 py-8">
    <Head>
      <title>{product.title} | Mercado Libre Argentina</title>
    </Head>
    <div className="bg-white py-8">
      <ProductDetail product={product} />
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req } = context;
  const { id } = params;

  const response = await fetch(`http://${req.headers.host}/api/items/${id}`);

  if (response.status === 404) {
    return {
      notFound: true,
    };
  }

  const product = await response.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;

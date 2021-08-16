import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import { displayCurrency } from '../../utils/';
import Breadcrums from '@/components/Breadcrums/Breadcrums';

type Props = {
  categories: string[];
  product: any;
};

export const ProductPage: NextPage<Props> = ({
  categories,
  product,
}: Props): JSX.Element => (
  <div className="container mx-auto w-10/12">
    <Head>
      <title>{product.title} | Mercado Libre Argentina</title>
      <meta
        name="description"
        content={`Compralo en Mercado Libre a ${displayCurrency(
          product.price.currency
        )} ${
          product.price.amount
        } - Pagá en cuotas - Envío gratis a todo el país. Encontrá más ${categories.join(
          ', '
        )}.`}
      />
    </Head>
    <Breadcrums categories={categories} />
    <div className="bg-white  mb-8">
      <ProductDetail product={product} />
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const internalApi = process.env.INTERNAL_API || 'http://localhost:3000';
  const response = await fetch(`${internalApi}/api/items/${id}`);

  if (response.status === 404) {
    return {
      notFound: true,
    };
  }

  const product = await response.json();

  return {
    props: {
      categories: product.categories,
      product: product.item,
    },
  };
};

export default ProductPage;

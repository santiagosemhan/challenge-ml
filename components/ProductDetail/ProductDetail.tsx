import Image from 'next/image';
import { displayCurrency, pad } from '../../utils/';

type Props = {
  product: any;
};

const ProductDetail: React.FC<Props> = ({ product }: Props) => {
  return (
    <div>
      <div className="flex w-full">
        <div className="w-8/12">
          <div className="mx-auto w-[680px]">
            <Image
              src={product.picture}
              alt={product.title}
              width="90"
              height="90"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="ml-4 w-3/12 flex flex-col">
          <span className="text-sm text-ml-gray mt-8">
            {product.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
            {product.sold_quantity} vendidos
          </span>
          <h1 className="font-semibold text-2xl text-black mt-4 leading-6">
            {product.title}
          </h1>
          <div className="flex my-8 text-5xl font-light text-black">
            <span>{displayCurrency(product.price.currency)}</span>
            <span>{product.price.amount}</span>
            <span className="text-xl ml-1">{pad(product.price.decimals)}</span>
          </div>
          <div className="mr-8">
            <button className="bg-ml-blue text-white rounded px-6 py-2 text-sm font-light w-full">
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 mt-24">
        <h2 className="text-2xl font-light text-gray-800">
          Descripción del producto
        </h2>
        <p className="text-base text-ml-gray font-light leading-5 w-4/6 py-8">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;

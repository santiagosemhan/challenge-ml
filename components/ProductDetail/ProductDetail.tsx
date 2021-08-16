import Image from 'next/image';
import { displayCurrency, pad } from '../../utils/';

type Props = {
  product: any;
};

const ProductDetail: React.FC<Props> = ({ product }: Props) => {
  return (
    <div className="bg-white py-8">
      <div className="flex w-full">
        <div className="w-4/6 px-20">
          <Image
            src={product.picture}
            alt={product.title}
            width="90"
            height="90"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="w-2/6 flex flex-col pr-8 pl-16 py-4">
          <span className="text-xs text-gray-500">
            {product.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
            {product.sold_quantity} vendidos
          </span>
          <h1 className="font-semibold text-lg text-gray-900 mt-2 leading-6">
            {product.title}
          </h1>
          <div className="flex my-5 text-4xl font-light">
            <span>{displayCurrency(product.price.currency)}</span>
            <span>{product.price.amount}</span>
            <span className="text-xl ml-1">{pad(product.price.decimals)}</span>
          </div>
          <div className="mt-4">
            <button className="bg-ml-blue text-white rounded px-6 py-2 text-sm font-light w-full">
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 mt-24">
        <h2 className="text-2xl my-6 font-light text-gray-800">
          Descripción del producto
        </h2>
        <p className="text-sm text-gray-500 font-light leading-5 w-4/6">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;

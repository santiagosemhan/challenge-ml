import Image from 'next/image';
import React from 'react';
import { displayPrice } from '../../utils/';
import shippingLogo from '../../public/static/img/free_shipping.png';
import Link from 'next/link';

type Props = {
  product: {
    id: string;
    title: string;
    price: {
      amount: number;
      currency: string;
      decimals: number;
    };
    picture: string;
    location: string;
    free_shipping: boolean;
    state_name: string;
  };
};

const ProductRow: React.FC<Props> = ({ product }: Props) => {
  return (
    <div className="flex">
      <div className="w-48 cursor-pointer">
        <Link href={`/items/${product.id}`} passHref>
          <a>
            <Image
              src={product.picture}
              width={170}
              height={170}
              layout="intrinsic"
              objectFit="contain"
              quality={99}
              alt={product.title}
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col flex-grow space-y-2 py-4">
        <div className="flex items-center space-x-2">
          <Link href={`/items/${product.id}`} passHref>
            <span className="text-2xl font-light cursor-pointer">
              $ {displayPrice(product.price)}
            </span>
          </Link>
          {product.free_shipping && (
            <span className="text-xs w-5 h-5">
              <Image src={shippingLogo} quality={90} alt="Free shipping" />
            </span>
          )}
        </div>
        <span className="text-lg text-gray-900 w-5/6 font-light">
          {product.title}
        </span>
      </div>
      <div className="w-36">
        <span className="text-sm text-gray-500">{product.state_name}</span>
      </div>
    </div>
  );
};

export default ProductRow;

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
    <div className="flex py-4">
      <Link href={`/items/${product.id}`} passHref>
        <a>
          <div className="px-4 w-[180px] rounded-[4px] overflow-hidden cursor-pointer">
            <Image
              src={product.picture}
              width={170}
              height={170}
              layout="intrinsic"
              objectFit="contain"
              quality={99}
              alt={product.title}
              priority
            />
          </div>
        </a>
      </Link>
      <div className="flex flex-col flex-grow py-4">
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
        <span className="mt-8 text-lg text-gray-900 w-5/6 font-light">
          {product.title}
        </span>
      </div>
      <div className="w-36">
        <span className="text-xs text-ml-gray">{product.state_name}</span>
      </div>
    </div>
  );
};

export default ProductRow;

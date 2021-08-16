import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/static/img/logo.png';
import SearchBox from '../SearchBox/SearchBox';
import { useRouter } from 'next/dist/client/router';

const Header: React.FC = () => {
  const { query } = useRouter();
  return (
    <header className="w-full bg-ml-yellow">
      <div className="container mx-auto w-10/12 py-3 flex items-center space-x-12">
        <div className="w-16 cursor-pointer">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src={logo}
                layout="intrinsic"
                alt="Mercado Libre"
                priority
              />
            </a>
          </Link>
        </div>
        <SearchBox query={query.search} />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/static/img/logo.png';
import SearchBox from '../SearchBox/SearchBox';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  const { query } = useRouter();
  return (
    <header className="w-full bg-ml-yellow">
      <div className="container mx-auto px-24 py-3 flex items-center space-x-12">
        <div className="w-36 flex items-center cursor-pointer">
          <Link href="/">
            <a>
              <Image src={logo} layout="intrinsic" />
            </a>
          </Link>
        </div>
        <SearchBox query={query.search} />
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import Image from 'next/image';
import searchIcon from '../../public/static/img/search.png';
import { useRouter } from 'next/dist/client/router';

type Props = {
  query?: string | string[];
};

const SearchBox: React.FC<Props> = ({ query }: Props) => {
  const router = useRouter();
  const [criteria, setCriteria] = useState(query || '');
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      router.push(`/items?search=${criteria}`);
    },
    [router, criteria]
  );

  React.useEffect(() => {
    if (!query) {
      setCriteria('');
    }
  }, [query]);

  return (
    <div className="flex flex-grow w-full">
      <form
        method="GET"
        role="search"
        className="bg-white flex w-full shadow"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full px-4 py-2 text-lg placeholder-ml-gray text-black"
          type="text"
          value={criteria}
          onChange={(e) => setCriteria(e.currentTarget.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button
          type="submit"
          tabIndex={0}
          className="flex items-center w-10 px-2 bg-gray-100"
        >
          <Image src={searchIcon} priority alt="Buscar" layout="intrinsic" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

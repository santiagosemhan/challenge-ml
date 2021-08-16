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

  return (
    <div className="flex flex-grow w-full">
      <form
        method="GET"
        role="search"
        className="bg-white flex w-full shadow"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full px-4 py-2"
          type="text"
          value={criteria}
          onChange={(e) => setCriteria(e.currentTarget.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button
          type="submit"
          tabIndex={0}
          className="flex items-center w-7 pr-2"
        >
          <Image src={searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

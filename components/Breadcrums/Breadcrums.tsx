import Link from 'next/link';
import React from 'react';

const RightArrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

type Props = {
  categories: string[];
};

const Breadcrums: React.FC<Props> = ({ categories }: Props) => {
  if (categories.length === 0) {
    return null;
  }
  return (
    <div className="py-4 text-sm text-ml-strong-gray font-light">
      <ul className="flex space-x-1">
        {categories.map((cat, index) => (
          <li key={cat} className="flex items-center">
            <Link href="#" passHref>
              <a>
                <span>{cat}</span>
              </a>
            </Link>
            {index !== categories.length - 1 && (
              <RightArrow className="w-4 h-4 mt-[1px]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrums;

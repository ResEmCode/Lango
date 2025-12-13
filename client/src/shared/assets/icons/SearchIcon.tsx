import type { ComponentPropsWithRef } from 'react';

export const SearchIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' {...props}>
      <path
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6'
      ></path>
    </svg>
  );
};

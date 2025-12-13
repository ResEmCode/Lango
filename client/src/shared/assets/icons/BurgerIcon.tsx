import type { ComponentPropsWithRef } from 'react';

export const BurgerIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 6.001h18m-18 6h18m-18 6h18'
      ></path>
    </svg>
  );
};

import type { ComponentPropsWithRef } from 'react';

export const ShareIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' {...props}>
      <path
        fill='currentColor'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={4}
        d='m26 4l18 18l-18 17V28C12 28 6 43 6 43c0-17 5-28 20-28z'
      ></path>
    </svg>
  );
};

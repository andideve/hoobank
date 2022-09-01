import Link from 'next/link';
import React from 'react';
import { BaseBrandProps } from './types';

function Brand(props: BaseBrandProps) {
  return (
    <div className="relative inline-flex items-center">
      <props.logo role="img" aria-label="brand logo" className="w-8 h-8" />
      <Link href="/" passHref>
        <a href="/" className="ml-1 after:absolute after:inset-0 after:z-[1]">
          <props.name role="img" aria-label="brand name" className="w-[5.125rem] h-auto" />
        </a>
      </Link>
    </div>
  );
}

export { Brand };
export * from './types';

export default Brand;

import React from 'react';
import { BaseBrandProps } from './types';

function Brand(props: BaseBrandProps) {
  return (
    <div className="inline-flex items-center lg:-ml-7 space-x-[0.625rem]">
      <props.logo className="w-[4.5rem] h-[4.5rem]" />
      <props.name className="w-[11.5rem] h-auto" />
    </div>
  );
}

export { Brand };
export * from './types';

export default Brand;

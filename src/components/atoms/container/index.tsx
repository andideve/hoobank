import React from 'react';
import clsx from 'clsx';

import defaults from './defaults';
import { ContainerProps } from './types';

function Container({ children, className, centered = defaults.centered, ...rest }: ContainerProps) {
  return (
    <div className={clsx('container', { 'mx-auto': centered }, className)} {...rest}>
      {children}
    </div>
  );
}

export { Container };
export * from './types';

export default Container;

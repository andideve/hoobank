import React from 'react';
import clsx from 'clsx';

import defaults from './defaults';
import { ButtonProps } from './types';

function Button({ children, className, as = defaults.as, ...rest }: ButtonProps) {
  const FC = as as unknown as React.FC<ButtonProps>;
  return (
    <FC
      type={as === 'button' ? 'button' : undefined}
      className={clsx(
        'inline-flex items-center justify-center py-[1.125rem] px-8 whitespace-nowrap text-lg font-medium rounded-[0.625rem] text-black bg-gradient',
        className,
      )}
      {...rest}
    >
      {children}
    </FC>
  );
}

export { Button };
export * from './types';

export default Button;

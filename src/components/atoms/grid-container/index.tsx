import React from 'react';
import clsx from 'clsx';

export default function GridContainer({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('grid lg:grid-cols-12 lg:gap-x-6', className)} {...rest}>
      {children}
    </div>
  );
}

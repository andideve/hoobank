import React from 'react';
import clsx from 'clsx';

function IconButtonList({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <ul className={clsx('list-none flex items-center space-x-8', className)}>{children}</ul>;
}

IconButtonList.defaultProps = { children: undefined, className: undefined };

export { IconButtonList };
export default IconButtonList;

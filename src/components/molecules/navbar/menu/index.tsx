import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

import { Menu } from '../../../../types/defaults';

function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-none hidden lg:flex space-x-14">{children}</ul>;
}

function Item({ label, to }: Menu) {
  const active = to === '/#'; // TODO
  return (
    <li className="relative leading-10">
      <Link href={to} passHref>
        <a
          href={to}
          className={clsx(
            !active && 'opacity-70 lg:hover:opacity-100',
            'after:absolute after:inset-0 after:z-[1]',
          )}
        >
          {label}
        </a>
      </Link>
    </li>
  );
}

function NavigationMenu({ items }: { items: Menu[] }) {
  return (
    <List>
      {items.map((menu) => (
        <Item key={menu.to} {...menu} />
      ))}
    </List>
  );
}

export { NavigationMenu };
export default NavigationMenu;

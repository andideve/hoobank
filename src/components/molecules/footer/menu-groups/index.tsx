import Link from 'next/link';
import React from 'react';

import { Menu, MenuGroup } from '../../../../types/defaults';

function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col space-y-3">{children}</ul>;
}

function Item({ label, to }: Menu) {
  return (
    <li>
      <Link href={to} passHref>
        <a href={to} className="opacity-70 lg:hover:opacity-100">
          {label}
        </a>
      </Link>
    </li>
  );
}

function MenuGroups({ items }: { items: MenuGroup[] }) {
  return (
    <ul className="list-none grid lg:flex grid-cols-2">
      {items.map((menuGroup) => (
        <li key={menuGroup.category} className="grow">
          <h3 className="mb-6 text-lg font-medium">{menuGroup.category}</h3>
          <List>
            {menuGroup.items.map((menu) => (
              <Item key={menu.to} {...menu} />
            ))}
          </List>
        </li>
      ))}
    </ul>
  );
}

export { MenuGroups };
export default MenuGroups;

import React from 'react';

import { Brand, BaseBrandProps, NavigationMenu } from '../../../components/molecules/navbar';
import { Menu } from '../../../types/defaults';

export default function Navbar({ brand, menuItems }: { brand: BaseBrandProps; menuItems: Menu[] }) {
  return (
    <nav className="flex items-center justify-between frame-x navbar-height">
      <Brand {...brand} />
      <NavigationMenu items={menuItems} />
    </nav>
  );
}

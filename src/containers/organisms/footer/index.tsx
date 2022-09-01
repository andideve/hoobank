import React from 'react';

import {
  Brand,
  BaseBrandProps,
  MenuGroups,
  IconButtonList,
} from '../../../components/molecules/footer';
import { MenuGroup } from '../../../types/defaults';

import SVGInstagram from '../../../components/atoms/icons/iconly/Instagram';
import SVGTwitter from '../../../components/atoms/icons/Twitter';
import SVGFacebook from '../../../components/atoms/icons/Facebook';
import SVGLinkedIn from '../../../components/atoms/icons/LinkedIn';

const iconButtons = (
  <>
    <li>
      <a aria-label="Instagram" href="#Instagram">
        <SVGInstagram />
      </a>
    </li>
    <li>
      <a aria-label="Twitter" href="#Twitter">
        <SVGTwitter />
      </a>
    </li>
    <li>
      <a aria-label="Facebook" href="#Facebook">
        <SVGFacebook />
      </a>
    </li>
    <li>
      <a aria-label="LinkedIn" href="#LinkedIn">
        <SVGLinkedIn />
      </a>
    </li>
  </>
);

export default function Footer({
  brand,
  links,
  copy,
}: {
  brand: BaseBrandProps & { description?: string };
  links: MenuGroup[];
  copy: React.ReactNode;
}) {
  return (
    <footer className="section-space-y frame-x pb-[0!important] bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <section className="mr-36">
            <header className="sr-only">
              <h2>brand</h2>
            </header>
            <Brand {...brand} />
            {brand.description && (
              <p className="opacity-70 mt-8 max-w-xs text-lg leading-8">{brand.description}</p>
            )}
          </section>
          <section className="grow">
            <header className="sr-only">
              <h2>link groups</h2>
            </header>
            <MenuGroups items={links} />
          </section>
        </div>
        <hr className="mt-10 border-t-[1px] border-separator" />
        <div className="flex justify-between py-[1.875rem]">
          <p className="opacity-60 text-lg">{copy}</p>
          <IconButtonList className="ml-6">{iconButtons}</IconButtonList>
        </div>
      </div>
    </footer>
  );
}

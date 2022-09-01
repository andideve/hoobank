import React from 'react';
import clsx from 'clsx';

import Head from './Head';

import Navbar from '../../organisms/navbar';
import Footer from '../../organisms/footer';

import Container from '../../../components/atoms/container';
import Brand from '../../../components/atoms/brand';

import { siteMetadata } from '../../../_data/app/site-metadata';
import { siteMenu } from '../../../_data/app/site-menu';
import { footerLinks } from '../../../_data/app/footer-links';

export const Section: React.FC<{ children?: React.ReactNode; containerClass?: string }> & {
  Header: React.FC<{ children?: React.ReactNode; className?: string }>;
  Heading: React.FC<{ children?: React.ReactNode }>;
  Description: React.FC<{ children?: React.ReactNode; className?: string }>;
  Footer: React.FC<{ children?: React.ReactNode; className?: string }>;
} = ({ children, containerClass }) => (
  <section className="section-space-y">
    <Container className={containerClass}>{children}</Container>
  </section>
);

Section.Header = ({ children, className }) => (
  <header className={clsx('mb-6', className)}>{children}</header>
);

Section.Heading = ({ children }) => (
  <h2 className="text-5xl leading-[4.75rem] font-semibold">{children}</h2>
);

Section.Description = ({ children, className }) => (
  <p className={clsx('opacity-70 text-lg leading-[1.875rem]', className)}>{children}</p>
);

Section.Footer = ({ children, className }) => (
  <footer className={clsx('mt-12', className)}>{children}</footer>
);

export default function Page({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Head title={siteMetadata.title} description={siteMetadata.description} />
      <header>
        <h1 className="sr-only">hello world</h1>
        <Navbar brand={{ logo: Brand.Logo, name: Brand.Name }} menuItems={siteMenu} />
      </header>
      <main className="frame-x">{children}</main>
      <Footer
        brand={{
          logo: Brand.Logo,
          name: Brand.Name,
          description: 'A new way to make the payments easy, reliable and secure.',
        }}
        links={footerLinks}
        copy="Copyright &copy; 2021 HooBank. All Rights Reserved."
      />
    </>
  );
}

Page.defaultProps = { children: undefined };

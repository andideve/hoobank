import type { NextPage } from 'next';
import React from 'react';

import Page, { Section } from '../containers/templates/page';

import GridContainer from '../components/atoms/grid-container';
import Button from '../components/atoms/button';

import SVGGradientRobot from '../components/atoms/svg-gradients/GradientRobot';

import SVGDiscount from '../components/atoms/icons/iconly/bulk/Discount';
import SVGArrowUp from '../components/atoms/icons/iconly/light-outline/ArrowUp';
import SVGStar from '../components/atoms/icons/iconly/bold/Star';
import SVGShieldDone from '../components/atoms/icons/iconly/bold/ShieldDone';
import SVGSend from '../components/atoms/icons/iconly/bold/Send';

import SVGAirbnb from '../components/atoms/company-logos/Airbnb';
import SVGBinance from '../components/atoms/company-logos/Binance';
import SVGCoinbase from '../components/atoms/company-logos/Coinbase';
import SVGDropbox from '../components/atoms/company-logos/Dropbox';

const Home: NextPage = () => (
  <Page>
    <Section containerClass="relative">
      {/* Background-left */}
      <div
        className="absolute top-[18.5%] -left-1 remove-frame-x--left w-48 h-80 bg-white z-[-1]"
        style={{ filter: 'blur(28.125rem)' }}
      />
      {/* Background-right */}
      <div
        className="absolute -top-[38rem] -right-[8rem] z-[-1]"
        style={{
          width: '21.5625rem',
          height: '32.125rem',
          filter: 'blur(56.25rem)',
          transform: 'rotate(-20.01deg)',
          background: 'linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)',
        }}
      />
      <GridContainer className="items-center">
        {/* Column-1 */}
        <div className="col-span-6">
          <span
            className="inline-flex items-center py-[0.375rem] px-[1.125rem] uppercase text-lg rounded-[0.625rem]"
            style={{ background: 'linear-gradient(125.17deg, #272727 0%, #11101d 100%)' }}
          >
            <SVGDiscount className="mr-3 w-8 h-8" />
            20%&nbsp;<span className="opacity-60">discount for</span>&nbsp;1 month&nbsp;
            <span className="opacity-60">account</span>
          </span>
          <div className="relative">
            <h2 className="mt-4 text-7xl leading-[6.25rem] font-semibold">
              The Next
              <br />
              <span className="text-gradient">Generation</span>
              <br />
              Payment Method.
            </h2>
            <p className="opacity-70 mt-10 max-w-[483px] text-lg leading-[1.875rem]">
              Our team of experts uses a methodology to identify the credit cards most likely to fit
              your needs. We examine annual percentage rates, annual fees.
            </p>
            <Section.Footer className="lg:mt-0">
              <div className="lg:absolute lg:top-3 lg:right-0">
                <div className="relative inline-block p-[2px] w-[8.75rem] h-[8.75rem] rounded-full bg-gradient">
                  <span className="inline-flex items-center justify-center w-full h-full rounded-full bg-primary">
                    <a
                      className="text-lg font-medium text-gradient after:absolute after:inset-0 after:z-[1] after:rounded-full"
                      href="#get-started"
                      style={
                        {
                          '--text-gradient':
                            'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
                        } as React.CSSProperties
                      }
                    >
                      <span className="inline-flex">
                        Get&nbsp;
                        <SVGArrowUp
                          aria-hidden
                          className="relative -bottom-1 w-6 h-6"
                          style={{ transform: 'rotate(50deg)' }}
                        />
                      </span>
                      <br />
                      Started
                    </a>
                  </span>
                </div>
              </div>
            </Section.Footer>
          </div>
        </div>
        {/* End of Column-1 */}
        {/* Column-2 */}
        <div className="relative col-start-8 col-span-5 hidden lg:block remove-frame-x--right">
          <div className="absolute inset-0 z-[-1]">
            <SVGGradientRobot style={{ width: '90%', height: 'auto' }} />
          </div>
          <img alt="robot" width={669} src="/assets/images/robot.webp" className="w-full" />
        </div>
        {/* End of Column-2 */}
      </GridContainer>
    </Section>
    <Section>
      <ul className="list-none flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        {[
          { label: 'User Active', count: '3800+' },
          { label: 'Trusted by Company', count: '230+' },
          { label: 'Transaction', count: '$230M+' },
        ].map((stat) => (
          <li key={stat.label} className="flex items-center space-x-6">
            <span className="stat-count text-[2.5rem] font-semibold">{stat.count}</span>
            <span className="stat-label text-xl text-gradient">{stat.label}</span>
          </li>
        ))}
      </ul>
    </Section>
    <Section>
      <GridContainer className="items-center">
        {/* Column-1 */}
        <div className="col-span-full lg:col-span-5">
          <Section.Header>
            <Section.Heading>You do the business, we&apos;ll handle the money.</Section.Heading>
          </Section.Header>
          <Section.Description>
            With the right credit card, you can improve your financial life by building credit,
            earning rewards and saving money. But with hundreds of credit cards on the market.
          </Section.Description>
          <Section.Footer>
            <Button as="a" href="#get-started">
              Get Started
            </Button>
          </Section.Footer>
        </div>
        {/* End of Column-1 */}
        {/* Column-2 */}
        <div className="col-span-full lg:col-start-8 lg:col-span-5">
          <ul className="list-none flex flex-col space-y-4">
            {[
              {
                icon: SVGStar,
                title: 'Rewards',
                description:
                  'The best credit cards offer some tantalizing combinations of promotions and prizes.',
              },
              {
                icon: SVGShieldDone,
                title: '100% Secured',
                description:
                  'We take proactive steps make sure your information and transactions are secure.',
              },
              {
                icon: SVGSend,
                title: 'Balance Transfer',
                description:
                  'A balance transfer credit card can save you a lot of money in interest charges.',
              },
            ].map((e, i) => (
              <li
                key={i}
                className="grid grid-cols-[4rem_auto] items-center p-5 rounded-[1.25rem] hover:bg-gradient-card"
              >
                <span className="overflow-hidden relative inline-flex items-center justify-center w-16 h-16 rounded-full">
                  <span className="absolute inset-0 opacity-10 bg-accent" />
                  <e.icon className="w-[2.375rem] h-[2.375rem] text-accent" />
                </span>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="opacity-70 mt-2">{e.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End of Column-2 */}
      </GridContainer>
    </Section>
    <Section containerClass="relative">
      <div
        className="opacity-60 absolute -top-[20%] -left-[34%] w-[25.3125rem] h-[29.4375rem] bg-white z-[-1]"
        style={{ filter: 'blur(46.875rem)', transform: 'rotate(176.62deg)' }}
      />
      <div
        className="absolute -bottom-[33%] -left-[25%] remove-frame-x--left rounded-[12.5rem] z-[-1]"
        style={{
          width: '21.5625rem',
          height: '32.125rem',
          filter: 'blur(900px)',
          transform: 'rotate(156.61deg)',
          background: 'linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)',
        }}
      />
      <GridContainer className="items-center">
        {/* Column-1 */}
        <div className="col-span-full lg:col-span-5">
          <img
            alt="card last transaction"
            width={530}
            src="/assets/images/card-last-transaction.svg"
            className="w-full"
          />
        </div>
        {/* End of Column-1 */}
        {/* Column-2 */}
        <div className="col-span-full lg:col-start-8 lg:col-span-5">
          <Section.Header>
            <Section.Heading>Easily control your billing & invoicing.</Section.Heading>
          </Section.Header>
          <Section.Description>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
            ipsum orci rhoncus aliporttitor integer platea placerat.
          </Section.Description>
          <Section.Footer className="flex space-x-8">
            <a aria-label="download on app store" href="/#app-store">
              <img alt="app store" width={129} src="/assets/images/download-app-store.svg" />
            </a>
            <a aria-label="download on google play" href="/#google-play">
              <img alt="google play" width={144} src="/assets/images/download-google-play.svg" />
            </a>
          </Section.Footer>
        </div>
        {/* End of Column-2 */}
      </GridContainer>
    </Section>
    <Section>
      <GridContainer className="items-center">
        {/* Column-1 */}
        <div className="col-span-full lg:col-span-5">
          <Section.Header>
            <Section.Heading>Find a better card deal in few easy steps.</Section.Heading>
          </Section.Header>
          <Section.Description>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
            tortor.ç Aliquet ultrices ac, ametau.
          </Section.Description>
          <Section.Footer>
            <Button as="a" href="#get-started">
              Get Started
            </Button>
          </Section.Footer>
        </div>
        {/* End of Column-1 */}
        {/* Column-2 */}
        <div className="col-span-full lg:col-start-8 lg:col-span-5">
          <img
            alt="card online analysis"
            width={513}
            src="/assets/images/card-online-analysis.svg"
            className="ml-auto w-full"
          />
        </div>
        {/* End of Column-2 */}
      </GridContainer>
    </Section>
    <Section containerClass="relative">
      <div
        className="absolute top-[20%] -right-[18%] remove-frame-x--right rounded-full z-[-1]"
        style={{
          width: '27.25rem',
          height: '34rem',
          filter: 'blur(40.625rem)',
          transform: 'rotate(47.46deg)',
          background: 'linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)',
        }}
      />
      <div className="flex flex-col lg:flex-row items-center mb-20">
        <Section.Header className="lg:mb-0 max-w-[470px]">
          <Section.Heading>What people are saying about us</Section.Heading>
        </Section.Header>
        <Section.Description className="lg:ml-32">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </Section.Description>
      </div>
      <ul className="list-none grid lg:grid-cols-12 lg:gap-x-6">
        {[
          {
            review: [
              'Money is only a tool.',
              'It will take you wherever you wish, but it will not replace you as the driver.',
            ].join(' '),
            user: {
              name: 'Herman Jensen',
              description: 'Founder & Leader',
              images: [{ width: 48, url: '/assets/images/people-01.png' }],
            },
          },
          {
            review: [
              'Money makes your life easier.',
              "If you're lucky to have it, you're lucky.",
            ].join(' '),
            user: {
              name: 'Steve Mark',
              description: 'Founder & Leader',
              images: [{ width: 48, url: '/assets/images/people-02.png' }],
            },
          },
          {
            review:
              'It is usually people in the money business, finance, and international trade that are really rich.',
            user: {
              name: 'Kenn Gallagher',
              description: 'Founder & Leader',
              images: [{ width: 48, url: '/assets/images/people-03.png' }],
            },
          },
        ].map((uReview, i) => (
          <li
            key={i}
            className="col-start-auto col-span-4 flex flex-col py-[3.75rem] px-10 rounded-[1.25rem] hover:bg-gradient-card"
          >
            <div className="mb-10">
              <img alt="quote" width={42} src="/assets/images/quote.svg" />
            </div>
            <p className="grow text-lg leading-8">{uReview.review}</p>
            <div className="grid grid-cols-[3rem_auto] items-center mt-6">
              <img
                alt=""
                width={uReview.user.images[0]?.width}
                src={uReview.user.images[0]?.url}
                srcSet={String(uReview.user.images.map((img) => `${img.url} ${img.width}w`))}
              />
              <div className="ml-4">
                <p className="text-xl leading-8">{uReview.user.name}</p>
                <p className="opacity-50">{uReview.user.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
    <Section>
      <ul className="list-none flex flex-wrap items-center justify-between gap-[6.25rem]">
        {[
          { label: 'airbnb', logo: SVGAirbnb },
          { label: 'binance', logo: SVGBinance },
          { label: 'coinbase', logo: SVGCoinbase },
          { label: 'dropbox', logo: SVGDropbox },
        ].map((company) => (
          <li key={company.label}>
            <company.logo aria-label={company.label} className="opacity-20" />
          </li>
        ))}
      </ul>
    </Section>
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-[4.5rem] px-24 rounded-[1.25rem] bg-gradient-card">
        <div>
          <Section.Header>
            <Section.Heading>Let&apos;s try our service now!</Section.Heading>
          </Section.Header>
          <Section.Description className="max-w-md">
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </Section.Description>
        </div>
        <Section.Footer className="lg:mt-0">
          <Button as="a" href="#get-started">
            Get Started
          </Button>
        </Section.Footer>
      </div>
    </Section>
  </Page>
);

export default Home;

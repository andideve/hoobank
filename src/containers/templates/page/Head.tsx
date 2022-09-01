import NextHead from 'next/head';
import React from 'react';

export default function Head({ title, description }: { title: string; description: string }) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="prefetch" href="/assets/fonts/Poppins-Regular.woff" />
      <link rel="prefetch" href="/assets/fonts/Poppins-Medium.woff" />
      <link rel="prefetch" href="/assets/fonts/Poppins-SemiBold.woff" />
    </NextHead>
  );
}

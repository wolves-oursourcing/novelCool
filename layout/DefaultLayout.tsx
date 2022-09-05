import Head from 'next/head';
import React, { FC } from 'react';

const DefaultLayout: FC<{ children?: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Sirrista</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export const LayoutProvider: FC<{ children?: any }> = ({ children }) => {
  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
};

export default DefaultLayout;

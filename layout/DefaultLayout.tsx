import Head from 'next/head';
import React, { FC } from 'react';

const DefaultLayout: FC<{ children?: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
          {/*<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />*/}
        <title>All Free Novel</title>
        <meta name="description" content="For reading novel" />
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

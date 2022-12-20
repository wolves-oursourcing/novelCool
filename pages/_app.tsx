import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LayoutProvider } from '../layout/DefaultLayout';
import '../styles/global.scss';
import {useEffect, useState} from "react";
import googleServices from '../services/google.services';
import Script from 'next/script'
import {analyticsId} from "../api/configs";

function App({ Component, pageProps }: AppProps) {

  return (<>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}/>
    <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${analyticsId}, {
                page_path: window.location.pathname,
                });`,
        }}
    />
    <LayoutProvider>{<Component {...pageProps} className="container" />}</LayoutProvider>);
  </>)
}

export default App;

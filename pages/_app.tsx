import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LayoutProvider } from '../layout/DefaultLayout';
import '../styles/global.scss';
import {useEffect, useState} from "react";
import googleServices from "../services/google.services";

function App({ Component, pageProps }: AppProps) {
  const [analyticsId, setAnalyticsId] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const host = window.location.hostname;
    const res = await googleServices.getAllGoogleData({domain: host});
    if(res[0]) {
      setAnalyticsId(res[0].codeAnalytics);
    }
    console.log(res, 'data');
  }

  return (<>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}/>
    <LayoutProvider>{<Component {...pageProps} className="container" />}</LayoutProvider>);
  </>)
}

export default App;

import '../styles/global.scss';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LayoutProvider } from '../layout/DefaultLayout';

function SiristaApp({ Component, pageProps }: AppProps) {
  return <LayoutProvider>{<Component {...pageProps} />}</LayoutProvider>;
}

export default SiristaApp;

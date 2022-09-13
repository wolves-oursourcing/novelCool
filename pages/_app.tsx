import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LayoutProvider } from '../layout/DefaultLayout';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return <LayoutProvider>{<Component {...pageProps} className="container" />}</LayoutProvider>;
}

export default App;

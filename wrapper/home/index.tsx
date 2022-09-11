import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Novel } from '../../services/novel.service';
import BannerSection from './components/BannerSection';
import NovelsSection from './components/NovelsSection';

interface IPropsHomeWrapper {
  novels?: Novel[];
}
const HomeWrapper = (props: IPropsHomeWrapper) => {
  const { novels } = props;
  const scrollRef = useRef();
  const router = useRouter();
  const query = router.query;
  const scrollToContact = () => {
    const element = window.document.getElementById('contact');
    if (element !== null) {
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    if (query?.contact === 'true') {
      scrollToContact();
    }
  }, [query]);

  return (
    <>
      <BannerSection novels={novels} />
      <NovelsSection novels={novels} title="Latest" isGray={true} />
      <NovelsSection novels={novels} title="Popular" />
      <NovelsSection novels={novels} title="Completed" isGray={true} />
      <NovelsSection novels={novels} title="Romance" />
      <NovelsSection novels={novels} title="Comedy" isGray={true} />
      <NovelsSection novels={novels} title="Fantasy" />
      <NovelsSection novels={novels} title="Drama" isGray={true} />
      <NovelsSection novels={novels} title="Action" />
    </>
  );
};

export default HomeWrapper;

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Novel } from '../../services/novel.service';
import BannerSection from '../home/components/BannerSection';
import NovelsSection from '../home/components/NovelsSection';

interface IPropsHomeWrapper {
  novels?: Novel[];
}
const OriginalWrapper = (props: IPropsHomeWrapper) => {
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
      <BannerSection novels={novels} title="Recommended" />
      <NovelsSection novels={novels} title="New" isGray={true} />
      <NovelsSection novels={novels} title="Popular" />
    </>
  );
};

export default OriginalWrapper;

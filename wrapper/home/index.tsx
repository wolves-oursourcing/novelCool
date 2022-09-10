import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef } from 'react';
import ContactSection from './components/ContactSection';
import BannerSection from './components/BannerSection';
import ProductSection from './components/ProductSection';
import ServicesSection from './components/ServicesSection';
import { Novel } from '../../services/novel.service';

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
      <ServicesSection />
      <ProductSection />
      <ContactSection scrollRef={scrollRef} />
    </>
  );
};

export default HomeWrapper;

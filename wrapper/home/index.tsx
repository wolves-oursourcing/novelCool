import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef } from 'react';
import ContactSection from './components/ContactSection';
import FirstSection from './components/FirstSection';
import ProductSection from './components/ProductSection';
import ServicesSection from './components/ServicesSection';

const HomeWrapper: FC = () => {
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
      <FirstSection />
      <ServicesSection />
      <ProductSection />
      <ContactSection scrollRef={scrollRef} />
    </>
  );
};

export default HomeWrapper;

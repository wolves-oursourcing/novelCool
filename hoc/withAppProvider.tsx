import React, { FC, useEffect, useRef, useState } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SideBar from '../layout/Sidebar';

const withAppProvider = (Page: any) => {
  const HOCCom = (props: any) => {
    const containerRef = useRef<any>();
    const [sticky, setSticky] = useState(false);

    const ScrollStickyHeader = () => {
      const element = window.document.getElementById('container');
      if (element !== null) {
        if (element?.getBoundingClientRect().y < 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', ScrollStickyHeader);
      return () => {
        window.removeEventListener('scroll', ScrollStickyHeader);
      };
    }, []);

    return (
      <div className="wrapper-layout">
        <Header isScroll={sticky} />
        <SideBar />
        <div className="container wrap-content-page">
          <div id="container" ref={containerRef} />
          <Page {...props} />
        </div>
        <Footer />
      </div>
    );
  };
  HOCCom.getInitialProps = Page.getInitialProps;
  return HOCCom;
};

export default withAppProvider;

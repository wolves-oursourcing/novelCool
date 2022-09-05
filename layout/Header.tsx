import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import {
  URL_ABOUT_US,
  URL_BLOG,
  URL_CONTACT,
  URL_PRODUCTS,
  URL_ROOT,
  URL_SERVICES,
  URL_SUCCESS_STORIES,
  URL_USER_JOURNEY
} from '../utilities/URL';
import { SearchOutlined } from '@ant-design/icons';

const Header: FC<{ isScroll: boolean }> = ({ isScroll }) => {
  const router = useRouter();

  return (
    <div className={`header  ${isScroll && 'scroll-sticky'}`}>
      <a className="logo" href={URL_ROOT}>
        <Image src="/img/sirrista-logo.png" alt="logo" width={86} height={50} />
      </a>
      <div className="list-menu">
        <a href={URL_ROOT} className={`header-link ${router.pathname === URL_ROOT ? 'active' : ''}`}>
          Home
        </a>
        <Link href={URL_PRODUCTS}>
          <a className={`header-link ${router.pathname === URL_PRODUCTS ? 'active' : ''}`}>Products</a>
        </Link>
        <Link href={URL_SERVICES}>
          <a className={`header-link ${router.pathname === URL_SERVICES ? 'active' : ''}`}>Services</a>
        </Link>
        <Link href={URL_ABOUT_US}>
          <a className={`header-link ${router.pathname === URL_ABOUT_US ? 'active' : ''}`}>About Us</a>
        </Link>
        <Link href={URL_SUCCESS_STORIES}>
          <a className={`header-link ${router.pathname === URL_SUCCESS_STORIES ? 'active' : ''}`}>Success Stories</a>
        </Link>
        <Link href={URL_BLOG}>
          <a className={`header-link ${router.pathname === URL_BLOG ? 'active' : ''}`}>Blog</a>
        </Link>
        <Link href={URL_USER_JOURNEY}>
          <a className={`header-link ${router.pathname === URL_USER_JOURNEY ? 'active' : ''}`}>User Journey</a>
        </Link>
      </div>
      <div className="list-menu-right">
        <Button size="large" className="btn-get-app" onClick={() => router.push(URL_CONTACT)}>
          Get in touch
        </Button>
        <div className="search">
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;

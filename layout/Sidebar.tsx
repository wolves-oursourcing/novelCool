import { CloseOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
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

const SideBar: FC<{}> = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  const router = useRouter();
  const title = (
    <div className="d-flex justify-content-end">
      <Button className="btn-close-sidebar" onClick={toggleSideBar}>
        <CloseOutlined />
      </Button>
    </div>
  );

  return (
    <div className="sidebar">
      <button id="nav-icon" className={`${showSidebar ? 'open' : ''}`} onClick={toggleSideBar}>
        <div className="wrap-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="logo">
        <a href="/">
          <Image src="/img/sirrista-logo.png" alt="logo" width={86} height={50} />
        </a>
      </div>
      <Drawer
        placement="right"
        title={title}
        footer={null}
        width="320"
        closable={false}
        onClose={toggleSideBar}
        visible={showSidebar}
      >
        <div className="group-link">
          <p className="mb-30">
            <a href={URL_ROOT} className="header-link">
              Home
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_PRODUCTS} className="header-link">
              Products{' '}
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_SERVICES} className="header-link">
              Services
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_ABOUT_US} className="header-link">
              About Us
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_SUCCESS_STORIES} className="header-link">
              Success Stories
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_BLOG} className="header-link">
              Blog
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_USER_JOURNEY} className="header-link">
              User Journey
            </a>
          </p>
        </div>

        <div className="group-button">
          <Button size="large" className="btn-get-app" onClick={() => router.push(URL_CONTACT)}>
            Get in touch
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;

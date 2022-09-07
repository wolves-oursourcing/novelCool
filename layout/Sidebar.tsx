import { CloseOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { URL_APP, URL_CATEGORY, URL_NEW, URL_ORIGINAL, URL_POPULAR, URL_ROOT, URL_SURPRISE } from '../utilities/URL';

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
              Latest
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_CATEGORY} className="header-link">
              Category
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_NEW} className="header-link">
              New
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_POPULAR} className="header-link">
              Popular
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_SURPRISE} className="header-link">
              Surprise
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_ORIGINAL} className="header-link">
              Original
            </a>
          </p>
          <p className="mb-30">
            <a href={URL_APP} className="header-link">
              App
            </a>
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;

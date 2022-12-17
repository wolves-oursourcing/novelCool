import { CloseOutlined, EyeOutlined, SearchOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, InputRef, Typography } from 'antd';
import { range } from 'lodash';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useRef, useState } from 'react';
import { Novel } from '../services/novel.service';
import { URL_APP, URL_CATEGORY, URL_NEW, URL_ORIGINAL, URL_POPULAR, URL_ROOT, URL_SURPRISE } from '../utilities/URL';

const SideBar: FC<{}> = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [novelsSearch, setNovelSearch] = useState<Novel[]>([]);
  const inputRef = useRef<InputRef>(null);

  const { Text, Title } = Typography;

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
  const search = value => {
    console.log(value);
    router.push(`/search?search=${value}`);
  };

  const handleChangeSearch = e => {
    console.log('e.target.value :>> ', e.target.value);
    setNovelSearch([
      {
        id: 1,
        image: '/img/banner_test.jpg',
        name: 'Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      }
    ]);
  };

  return (
    <div className="sidebar">
      <button id="nav-icon" className={`${showSidebar ? 'open' : ''}`} onClick={toggleSideBar}>
        <div className="wrap-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`search ${showSearch ? 'active' : ''}`}>
        <Input allowClear onChange={handleChangeSearch} className="input-search" onPressEnter={search} ref={inputRef} />
        {!showSearch ? (
          <SearchOutlined
            className="icon"
            onClick={() => {
              setShowSearch(true);
              setTimeout(() => {
                inputRef.current!.focus({
                  cursor: 'end'
                });
              }, 100);
            }}
          />
        ) : (
          <CloseOutlined className="icon" onClick={() => setShowSearch(false)} />
        )}
      </div>
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
          {/*<p className="mb-30">*/}
          {/*  <a href={URL_ORIGINAL} className="header-link">*/}
          {/*    Original*/}
          {/*  </a>*/}
          {/*</p>*/}
          <p className="mb-30">
            <a href={URL_APP} className="header-link">
              App
            </a>
          </p>
        </div>
      </Drawer>

      {showSearch && novelsSearch && novelsSearch.length > 0 && (
        <div className={`menu-search ${showSearch && novelsSearch && novelsSearch.length > 0 ? 'active' : ''}`}>
          <div className="item-search">
            {/* <NovelView novel={novelsSearch[0]} /> */}
            {novelsSearch.map(novel => (
              <div className="novel-search">
                <div className="left">
                  <img src={novel?.image} alt="image" />
                </div>
                <div className="right">
                  <Title level={5} ellipsis={true} className="novel-title">
                    {novel?.name}
                  </Title>
                  <div className="novel-vote">
                    <span className="novel-vote-number">{novel?.vote}</span>
                    <div className="list-star">
                      {range(0, 5).map(star => (
                        <div className="star" key={star}>
                          <StarOutlined />
                          <StarFilled
                            key={star}
                            className="star-active"
                            style={{
                              width: `${
                                Math.floor(novel?.vote || 0) - star > 0
                                  ? 100
                                  : Math.floor(novel?.vote || 0) - star > -1
                                  ? ((novel?.vote || 0) - Math.floor(novel?.vote || 0)) * 100
                                  : 0
                              }%`
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Text className="novel-description">{novel?.description}</Text>
                  <div className="novel-view">
                    <EyeOutlined className="icon" />
                    <span>{novel?.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;

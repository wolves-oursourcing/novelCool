import { CloudUploadOutlined, EyeOutlined, StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu, Typography } from 'antd';
import { get, range } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Novel } from '../services/novel.service';
import {
  URL_CATEGORY,
  URL_LASTEST,
  URL_NEW,
  URL_ORIGINAL,
  URL_POPULAR,
  URL_REVIEW,
  URL_ROOT,
  URL_SURPRISE
} from '../utilities/URL';
import { ILanguage } from '../utilities/variables';
import ShowImage from "./ShowImage";
import novelServices from '../services/novel.service';

const { Text, Title } = Typography;
const Header: FC<{ isScroll: boolean }> = ({ isScroll }) => {
  const router = useRouter();
  const languages: ILanguage[] = [
    {
      code: 'uk',
      name: 'England',
      flag: '/flags/england.png'
    },
    {
      code: 'fr',
      name: 'France',
      flag: '/flags/france.svg'
    }
  ];
  const accountSettings = [
    {
      name: 'Setting',
      url: '/account'
    },
    {
      name: 'Notification',
      url: '/account'
    }
  ];

  const [languageSelected, setLanguageSelected] = useState<ILanguage>(languages[0]);
  const [randomNovelId, setRandomNovelId] = useState();
  const [user, setUser] = useState<any>();
  const [novelsSearch, setNovelSearch] = useState<Novel[]>([]);
  const [isFocus, setIsFocus] = useState(false);
  const search = value => {
    console.log(value);
    router.push(`/search?search=${value}`);
  };

  useEffect(() => {
    getNovel();
  }, []);

  const getNovel = async () => {
    try {
      const res = await novelServices.getRandomNovel();
      if (res) {
        setRandomNovelId(res.uniqueName)
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleChangeSearch = async e => {
    try {
      console.log('e.target.value :>> ', e.target.value);
      setIsFocus(true);
      const res = await novelServices.getAllNovel({
        name: e.target.value,
        limit: 10
      })
      setNovelSearch(res[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleBlur = e => {
    setIsFocus(false);
  };

  useEffect(() => {
    const _user = localStorage.getItem('user');
    if (_user) {
      const data = JSON.parse(_user);
      console.log(data);

      setUser(data);
    }
  }, []);

  const goMenu = (option: any) => {
    switch (option.name) {
      case 'Log out':
        localStorage.clear();
        Router.push('/auth/login');
        break;
      default:
        Router.push({ pathname: option.url, query: { tab: option.name } }, '/account');
    }
  };

  // RENDER
  const menu = () => {
    return (
      <Menu
        selectable
        items={languages.map((language, index) => {
          return {
            key: index + 1,
            label: (
              <div
                onClick={() => setLanguageSelected(language)}
                className={`item-drop-language ${languageSelected.code === language.code ? 'selected' : ''}`}
              >
                <img src={language?.flag} alt="flag" />
                <Text>{language.name}</Text>
              </div>
            )
          };
        })}
      />
    );
  };
  const menuAccountSettings = () => {
    return (
      <Menu
        selectable
        items={[
          {
            key: 0,
            label: (
              <div onClick={() => goMenu(accountSettings[0])} className={`item-drop-language`} key="0">
                <Text>{user.firstName + ' ' + user.lastName}</Text>
              </div>
            )
          },
          ...accountSettings.map((item, index) => {
            return {
              key: index + 1,
              label: (
                <div onClick={() => goMenu(item)} className={`item-drop-language`}>
                  <Text>{item.name}</Text>
                </div>
              )
            };
          })
        ]}
      />
    );
  };
  return (
    <div className={`header ${isScroll && 'scroll-sticky'}`}>
      <a className="logo" href={URL_ROOT}>
        <Image src="/img/logo.svg" alt="logo" width={86} height={50} />
      </a>
      <div className="list-menu">
        <Link href={URL_LASTEST}>
          <a className={`header-link ${router.pathname === URL_LASTEST ? 'active' : ''}`}>Latest</a>
        </Link>
        <Link href={URL_CATEGORY}>
          <a className={`header-link ${router.pathname === URL_CATEGORY ? 'active' : ''}`}>Category</a>
        </Link>
        <Link href={URL_NEW}>
          <a className={`header-link ${router.pathname === URL_NEW ? 'active' : ''}`}>New</a>
        </Link>
        <Link href={URL_POPULAR}>
          <a className={`header-link ${router.pathname === URL_POPULAR ? 'active' : ''}`}>Popular</a>
        </Link>
        <Link href={`/novel/${randomNovelId}`}>
          <a className={`header-link ${router.pathname === URL_SURPRISE ? 'active' : ''}`}>Surprise</a>
        </Link>
        <Link href={URL_REVIEW}>
          <a className={`header-link ${router.pathname === URL_REVIEW ? 'active' : ''}`}>Review</a>
        </Link>
        <Link href={URL_ORIGINAL}>
          <a className={`header-link ${router.pathname === URL_ORIGINAL ? 'active' : ''}`}>Original</a>
        </Link>
      </div>
      <div className="list-menu-right">
        <Button className="btn-upload menu-right-item" onClick={() => router.push('/')}>
          <CloudUploadOutlined />
        </Button>
        <div className={`search menu-right-item ${isFocus && novelsSearch.length > 0 ? 'active' : 0}`}>
          <Input.Search
            placeholder="Search"
            allowClear
            onChange={handleChangeSearch}
            onBlur={handleBlur}
            onSearch={search}
            className="input-search"
          />
          {novelsSearch && novelsSearch.length > 0 && (
            <div className="menu-search">
              <div className="item-search">
                {/* <NovelView novel={novelsSearch[0]} /> */}
                {novelsSearch.map(novel => (
                  <div onClick={() => router.push(`/novel/${novel.uniqueName}`)} className="novel-search">
                    <div className="left">
                      <ShowImage image={novel?.image}  container="images"/>
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
        <div className="menu-right-item auth">
          {user && user.id ? (
            <Dropdown overlay={menuAccountSettings} overlayClassName="drop-lang drop-settings">
              <div className="dropdown-value">
                <Text>{`${user.firstName} ${user.lastName}`}</Text>
              </div>
            </Dropdown>
          ) : (
            <UserOutlined className="user-icon" onClick={() => router.push('/auth/login')} />
          )}
        </div>
        <div className="menu-right-item dropdown">
          <Dropdown overlay={menu} overlayClassName="drop-lang">
            <div className="dropdown-value img-only">
              <img src={languageSelected?.flag} alt="flag" />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { CloudUploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { URL_APP, URL_CATEGORY, URL_NEW, URL_ORIGINAL, URL_POPULAR, URL_ROOT, URL_SURPRISE } from '../utilities/URL';
import { ILanguage } from '../utilities/variables';

const Header: FC<{ isScroll: boolean }> = ({ isScroll }) => {
  const router = useRouter();
  const languages: ILanguage[] = [
    {
      code: 'uk',
      name: 'England',
      flag: ''
    },
    {
      code: 'fr',
      name: 'France',
      flag: ''
    }
  ];

  const [languageSelected, setLanguageSelected] = useState<ILanguage>(languages[0]);

  const onChange = (e: any) => {
    console.log(e);
  };

  // RENDER
  const menu = () => {
    return (
      <Menu
        items={languages.map((language, index) => {
          return {
            key: index + 1,
            label: <div onClick={() => setLanguageSelected(language)}>{language?.name}</div>
          };
        })}
      />
    );
  };
  return (
    <div className={`header ${isScroll && 'scroll-sticky'}`}>
      <a className="logo" href={URL_ROOT}>
        <Image src="/img/logo.svg" alt="logo" width={86} height={50} />
      </a>
      <div className="list-menu">
        <Link href={URL_ROOT}>
          <a className={`header-link ${router.pathname === URL_ROOT ? 'active' : ''}`}>Latest</a>
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
        <Link href={URL_SURPRISE}>
          <a className={`header-link ${router.pathname === URL_SURPRISE ? 'active' : ''}`}>Surprise</a>
        </Link>
        <Link href={URL_ORIGINAL}>
          <a className={`header-link ${router.pathname === URL_ORIGINAL ? 'active' : ''}`}>Original</a>
        </Link>
        <Link href={URL_APP}>
          <a className={`header-link ${router.pathname === URL_APP ? 'active' : ''}`}>App</a>
        </Link>
      </div>
      <div className="list-menu-right">
        <Button className="btn-upload menu-right-item" onClick={() => router.push('/')}>
          <CloudUploadOutlined />
        </Button>
        <div className="search menu-right-item">
          <Input placeholder="Search" allowClear onChange={onChange} className="input-search" />
        </div>
        <div className="menu-right-item">
          <UserOutlined className="user-icon" />
        </div>
        <div className="menu-right-item dropdown">
          <Dropdown overlay={menu}>
            <div className="dropdown-value">{languageSelected?.name}</div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;

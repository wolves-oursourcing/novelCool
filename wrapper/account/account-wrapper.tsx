import { Typography } from 'antd';
import Router, { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IUserInfo } from '../../services/user.service';
import NotificationComponent from './notification';
import SettingComponent from './setting';

export interface IPropsAccountWrapper {
  user: IUserInfo;
}
export interface AccountSettingInterface {
  name: string;
  component: JSX.Element | null;
  url?: string;
}

const { Title } = Typography;

const AccountPageWrapper = (props: IPropsAccountWrapper) => {
  const { user } = props;
  const accountSettings: AccountSettingInterface[] = [
    {
      name: 'Setting',
      component: <SettingComponent user={user} />
    },
    {
      name: 'Notification',
      component: <NotificationComponent notifications={[]} />
    },
    {
      name: 'Log out',
      component: null,
      url: '/account'
    }
  ];
  const [selectedTab, setSelectedTab] = useState<AccountSettingInterface>(accountSettings[0]);
  const router: NextRouter = useRouter();
  const { tab } = router.query;
  useEffect(() => {
    initalize();
  }, [tab, user]);
  const initalize = () => {
    if (tab) {
      const selected = accountSettings.find(item => item.name === tab);
      if (selected) {
        setSelectedTab(selected);
      } else {
        setSelectedTab(accountSettings[0]);
      }
    }
  };
  const onChangeTab = (selected: AccountSettingInterface) => {
    if (selected.name === 'Log out') {
      localStorage.clear();
      Router.push('/auth/login');
    } else {
      setSelectedTab(selected);
    }
  };
  return (
    <div className="account-page">
      <div className="menu__account-page">
        <div className="header-menu__account-page">
          <Title level={3} className="name">
            {user?.firstName + ' ' + user?.lastName}
          </Title>
        </div>
        <ul className="list__account-page">
          {accountSettings.map(item => (
            <li
              className={`item__account-page ${selectedTab.name === item.name ? 'active' : ''}`}
              key={item.name}
              onClick={() => onChangeTab(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right">{selectedTab.component}</div>
    </div>
  );
};

export default AccountPageWrapper;

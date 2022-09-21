import { HeartOutlined, LeftOutlined, RightOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface IPropsAsideActions {}
enum AsideType {
  SETTING = 'SETTING',
  CHAPTERS = 'CHAPTERS',
  NONE = 'NONE'
}

const AsideActions = (props: IPropsAsideActions) => {
  const [toggle, setToggle] = useState<string>();
  const handleChange = (type: string) => {
    if (type === toggle) {
      setToggle(AsideType.NONE);
    } else {
      setToggle(type);
    }
  };
  return (
    <>
      <div className="aside-actions">
        <ul className="list-action">
          <li>
            <UnorderedListOutlined onClick={() => handleChange(AsideType.CHAPTERS)} />
          </li>
          <li>
            <SettingOutlined onClick={() => handleChange(AsideType.SETTING)} />
          </li>
          <li>
            <HeartOutlined />
          </li>
          <li>
            <RightOutlined />
          </li>
          <li>
            <LeftOutlined />
          </li>
        </ul>
      </div>
      <div className={`aside-content ${toggle === AsideType.CHAPTERS ? 'active' : ''}`}>Chapter</div>
      <div className={`aside-content ${toggle === AsideType.SETTING ? 'active' : ''}`}>Setting</div>
    </>
  );
};

export default AsideActions;

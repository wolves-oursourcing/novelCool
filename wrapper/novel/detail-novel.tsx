import { FacebookOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, Typography } from 'antd';
import { useState } from 'react';
import { Novel } from '../../services/novel.service';
import { ILanguage } from '../../utilities/variables';

interface IPropsDetailPageWrapper {
  novel: Novel;
  isLoading: boolean;
}
const { Title, Text } = Typography;

const DetailPageWrapper = (props: IPropsDetailPageWrapper) => {
  const { novel, isLoading } = props;

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
    <div className="novel-detail-page container">
      <div className="detail-page-head">
        <div className="list-button">
          <Button type="primary" icon={<FacebookOutlined />} size={'large'} className="btn-common">
            Facebook
          </Button>
        </div>
        <div className="report right">
          <div className="report-item">
            <WarningOutlined />
            <span className="ms-1">Report</span>
          </div>
          <div className="report-item">
            <Dropdown overlay={menu}>
              <div className="dropdown-value">{languageSelected?.name}</div>
            </Dropdown>
          </div>
        </div>
      </div>
      <Divider className="detail-page-divider" />
    </div>
  );
};

export default DetailPageWrapper;

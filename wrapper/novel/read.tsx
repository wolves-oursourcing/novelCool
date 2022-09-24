import { CloudUploadOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Typography } from 'antd';
import { useEffect, useState } from 'react';
import Footer from '../../layout/Footer';
import { ILanguage } from '../../utilities/variables';
import AsideActions from './components/AsideActions';

interface IPropsReadingPage {}
const { Title, Text, Paragraph } = Typography;
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

const ReadingWrapper = (props: IPropsReadingPage) => {
  const [languageSelected, setLanguageSelected] = useState<ILanguage>(languages[0]);

  useEffect(() => {
    setLanguageSelected(languages[0]);
  }, []);
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
  return (
    <div className="reading-page">
      <header>
        <Title level={4} className="title">
          Supreme Magus / Supreme Magus –2 Joke Chapter
        </Title>
        <div className="header-right">
          <CloudUploadOutlined className="download" />
          <div className="header-right-item dropdown">
            <Dropdown overlay={menu} overlayClassName="drop-lang">
              <div className="dropdown-value">
                <img src={languageSelected?.flag} alt="flag" />
              </div>
            </Dropdown>
          </div>
        </div>
      </header>
      <AsideActions />
      <div className="reading-content">
        <div className="container wrap-reading">
          <ul className="reading-pagination">
            <li className="reading-pagination-item">
              <DoubleLeftOutlined />
              <Text className="ms-1">Previous</Text>
            </li>
            <li className="pagination-divider"></li>
            <li className="reading-pagination-item">
              <Text className="me-1">Next</Text>
              <DoubleRightOutlined />
            </li>
          </ul>
          <div className="reading">
            <Title level={5}>Supreme Magus Chapter 0.1</Title>
            <Paragraph>
              No matter if you are a pessimist or an optimist, Derek Esposito's life wasn't a good one nor a bad one. It
              was just a mediocre insignificant existence.
            </Paragraph>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadingWrapper;

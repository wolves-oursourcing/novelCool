import { CloudUploadOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Typography } from 'antd';
import { useEffect, useState } from 'react';
import Footer from '../../layout/Footer';
import { ILanguage } from '../../utilities/variables';
import AsideActions from './components/AsideActions';
import {Config} from "../../api/configs";
import novelService, {Chapter, Novel} from "../../services/novel.service";

interface IPropsReadingPage {
  chapter: Chapter;
  novel: Novel
}
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
  const { chapter, novel } = props;
  const [data, setData] = useState<any>("");
  const [allChapter, setAllChapter] = useState<any>([]);
  useEffect(() => {
    setLanguageSelected(languages[0]);
    getAllChapter();
  }, []);

  const getAllChapter = async () => {
    try {
      const resAll = await novelService.getChapterNovel({novelUniqueName: novel.uniqueName});
      const allChap = resAll[0].filter((value: Chapter) => value.novel && value.novel.uniqueName === novel.uniqueName);
      setAllChapter(allChap);
      await getData();
      // if (data) {
      //   getData();
      //   // checkIsFirst(allChap);
      //   // checkIsLast(allChap);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    const res = await fetch(
        `${Config.URL_API}files/download/chapterFiles?file=${chapter.content}`
    );
    const story = await res.text();
    setData(story);
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

            <Paragraph>
              {data}
            </Paragraph>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadingWrapper;

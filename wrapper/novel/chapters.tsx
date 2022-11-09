import { DownOutlined, SortAscendingOutlined, SortDescendingOutlined, UpOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {Chapter, Novel} from '../../services/novel.service';
import novelService from '../../services/novel.service';
import ReactLoading from "react-loading";
interface IPropsChapter {
  novel: Novel;
}

const { Title, Text, Paragraph } = Typography;
const ChapterView = (props: IPropsChapter) => {
  const { novel } = props;
  const [ascend, setAscend] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [continueReading, setContinueReading] = useState<boolean>(false);
  const [selectedChapter, setSelectedChapter] = useState<Chapter>();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  useEffect(() => {
    getChapterOfNovel();
  }, [novel]);

  const getChapterOfNovel = async () => {
    try {
      setLoading(true);
      const res = await novelService.getChapterNovel({novelUniqueName: novel.uniqueName});
      if (res[0] && res[0].length > 0) {
        setSelectedChapter(res[0][0]);
      }
      setChapters(res[0]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const gotoRead = (uniqueName: string) => {
    route.push(`/novel/${novel.uniqueName}/${uniqueName}`)
  }
  return (
    <div className="chapter-view">
      {loading && ( <div className="loading">
        <ReactLoading type={"spin"} color="#fff"/>
      </div>)}
      <ul className="list-chapter">
        <li className="item-chapter">
          <div className="left">
            <Title level={5} className="mb-0">
              Chapters
            </Title>
          </div>
          <div className="right" onClick={() => setAscend(!ascend)}>
            {ascend ? <SortAscendingOutlined className="icon" /> : <SortDescendingOutlined className="icon" />}
          </div>
        </li>
        {chapters &&
        chapters.map(chapter => (
            <li
              key={chapter?.id}
              className={`item-chapter ${selectedChapter?.id === chapter.id ? 'active' : ''}`}
              onClick={() => gotoRead(chapter.uniqueName)}
            >
              <div className="left">
                <Text className="chapter-name">{chapter?.name}</Text>
              </div>
              <div className="right">
                <span className="item-right">{chapter?.view} Views</span>
                <span className="item-right">{moment(chapter.createdAt).format('MMM DD, YYYY')}</span>
              </div>
            </li>
          ))}
        {/*<li className="item-chapter see-more" onClick={() => route.push(`/novel/${1}/chapter`)}>*/}
        {/*  <div className="d-flex align-items-center">*/}
        {/*    <Text className="me-1"> More chapters</Text>*/}
        {/*    <div className="d-flex" onClick={() => setExpand(!expand)}>*/}
        {/*      {expand ? <UpOutlined /> : <DownOutlined />}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</li>*/}
      </ul>
      <div className="chapter-content">
        <Title level={5}>Chapter 1</Title>
        <Title level={3} className="mt-1">
          Blood Warlock: Succubus Partner in the Apocalypse Chapter 0
        </Title>
        <Paragraph>
          Important information (contains some spoilers). Will be updated as the world-building develops along with the
          progress of the story. Treasures Grades: Red Orb = Normal grade Treasure. Orange Orb = Rare grade Treasure.
          Yellow Orb = Magic grade Treasure. Green Orb = Epic grade Treasure. Cyan Orb = Legend grade Treasure. Indigo
          Orb = Semi-God grade Treasure. Violet Orb = God grade Treasure. Soul Record.
        </Paragraph>
        <div className="see-more">
          <div className="d-flex align-items-center">
            <Text className="me-1"> Continue Reading</Text>
            <div className="d-flex" onClick={() => setContinueReading(!continueReading)}>
              {continueReading ? <UpOutlined /> : <DownOutlined />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterView;

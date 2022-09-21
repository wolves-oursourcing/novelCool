import { FacebookOutlined, StarFilled, StarOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, Tabs, Typography } from 'antd';
import { useState } from 'react';
import { Comment } from '../../api/comment';
import { Novel } from '../../services/novel.service';
import { ILanguage, NovelKind } from '../../utilities/variables';
import ChapterView from './chapters';
import CommentView from './comments';

interface IPropsDetailPageWrapper {
  novel: Novel;
  isLoading: boolean;
  comments: Comment[];
  novelsSuggest?: Novel[];
}
const { Title, Text, Paragraph } = Typography;

const DetailPageWrapper = (props: IPropsDetailPageWrapper) => {
  const { novel, isLoading, comments, novelsSuggest } = props;

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
  const [expandable, setExpandable] = useState({
    expand: false,
    counter: 0
  });

  const typoExpand = () => {
    setExpandable({
      expand: true,
      counter: !expandable.expand ? expandable.counter + 0 : expandable.counter + 1
    });
  };

  const typoClose = () => {
    setExpandable({
      expand: false,
      counter: !expandable.expand ? expandable.counter + 0 : expandable.counter + 1
    });
  };
  const onChangeTab = (key: string) => {
    console.log(key);
  };

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
      <div className="novel-detail">
        <div className="novel-image">
          <img src={novel.image} alt="image" />
          <div className={`novel-kind ${novel.kind === NovelKind.MANGA ? 'blue' : ''}`}>
            <span>{novel.kind}</span>
          </div>
        </div>
        <div className="novel-content">
          <Title level={3} className="novel-title">
            {novel.title}
          </Title>
          <div className="novel-source">
            <Text>Origin</Text>
          </div>
          <div className="novel-follow mt-2">
            <div className="novel-follow-item">
              <Text>106</Text>
              <Text className="caption">Followers</Text>
            </div>
            <div className="novel-follow-item">
              <div className="d-flex align-items-center">
                <Text>5.0</Text>
                <div className="star">
                  <StarOutlined />
                  <StarFilled
                    className="star-active"
                    style={{
                      width: `${(Math.floor(novel.vote || 0) / 5) * 100}%`
                    }}
                  />
                </div>
              </div>

              <Text className="caption">{novel?.vote} Votes</Text>
            </div>
            <div className="novel-follow-item">
              <Text>{novel.view}</Text>
              <Text className="caption">Views</Text>
            </div>
          </div>
          <div key={expandable.counter} className="novel-description mt-2">
            <Paragraph
              className="mb-0"
              ellipsis={{
                rows: 3,
                expandable: true,
                onExpand: typoExpand,
                symbol: <Text className="expand">More</Text>
              }}
            >
              {novel.description}
            </Paragraph>
            {expandable.expand && (
              <Text onClick={typoClose} className="expand">
                Less
              </Text>
            )}
          </div>
          <ul className="novel-category mt-2">
            <li>Ongoing</li>
            <li>Romance</li>
          </ul>
          <div className="novel-actions mt-4">
            <Button className="btn-common primary me-3">Start Reading</Button>
            <Button className="btn-common primary outline">Follow</Button>
          </div>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={onChangeTab}
        className="custom-tabs"
        items={[
          {
            label: `Comments`,
            key: '1',
            children: <CommentView comments={comments} />
          },
          {
            label: `Chapters`,
            key: '2',
            children: <ChapterView chapters={novel.chapters} />
          }
        ]}
      />

      <div className="suggest">
        <Title level={4}>You may like</Title>
        <div className="list-novel-suggest">
          {novelsSuggest &&
            novelsSuggest.map(novel => (
              <div className="novel-suggest" key={novel?.id}>
                <div className="novel-image">
                  <img src={novel?.image} />
                </div>
                <Title level={5} ellipsis className="novel-title">
                  {novel?.title}
                </Title>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPageWrapper;

import { FacebookOutlined, StarFilled, StarOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, Tabs, Typography } from 'antd';
import {useEffect, useState} from 'react';
import { Comment } from '../../api/comment';
import { Novel } from '../../services/novel.service';
import { ILanguage, NovelKind } from '../../utilities/variables';
import ChapterView from './chapters';
import CommentView from './comments';
import {useRouter} from "next/router";
import ShowImage from "../../layout/ShowImage";
import {getUserInfo, patchUser} from "../../services/user.service";
import {Config, KeyConfigLocal, ORIGIN_URL} from "../../api/configs";
import {getChapterNovel} from "../../services/comment.services";
import {FacebookShareButton} from "react-share";

interface IPropsDetailPageWrapper {
  novels?: Novel;
  isLoading: boolean;
  comments: Comment[];
  novelsSuggest?: Novel[];
}
const { Title, Text, Paragraph } = Typography;

const DetailPageWrapper = (props: IPropsDetailPageWrapper) => {
  const { novels, isLoading, comments, novelsSuggest } = props;
  const route = useRouter();
  const [changeButton, setChangeButton] = useState(false);
  const [novel, setNovel] = useState<Novel>({} as Novel);
  const [comment, setComment] = useState([]);
  const [url, setUrl] = useState<any>("");
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

  useEffect(() => {
    if (novels) {
      setUrl(`${ORIGIN_URL}/novel/${novels.uniqueName}`);
      setNovel(novels)
      getComment();
      checkIsInLib();
    }
  }, [novels]);

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

  const gotoChapter = () => {
    if(novel && novel.chapters && novel.chapters?.length > 0) {
      route.push(`/novel/${novel.uniqueName}/${novel?.chapters[0]?.uniqueName}`)
    }
  }

  // const gotoRead = (uniqueName: string) => {
  //   route.push(`/novel/${novel.uniqueName}/${uniqueName}`)
  // }

  const addBookMark = async (change: boolean) => {
    try {
      const user = localStorage.getItem(KeyConfigLocal.USER);
      console.log(user);
      if (user && novel) {
        const data = JSON.parse(user);
        if (change) {
          if(!data.bookmark) {
            data.bookmark = [];
          }
          data.bookmark.push(novel.id.toString());
          setChangeButton(true);
        } else {
          data.bookmark.splice(data.bookmark.indexOf(novel.id), 1);
          setChangeButton(false);
        }
        console.log(data.bookmark);
        const res: any = await patchUser(data.id, { bookmark: data.bookmark });
        const userInfo = await getUserInfo(res.id ? res.id : 0);
        console.log(res);
        localStorage.setItem(Config.USER, JSON.stringify(userInfo));
        // localStorage.setItem(KeyConfigLocal.USER, )
      } else {
        alert('You need Login');
      }
    } catch (e) {
    }
  };

  const checkIsInLib = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setChangeButton(false);
    }
    if (user && novels) {
      const data = JSON.parse(user);
      if(data.bookmark) {
        const bm = data.bookmark.find((value: any) => value === novels.id.toString());
        setChangeButton(!!bm);
      } else {
        setChangeButton(false);
      }
    }
  };

  const getComment = async () => {
    try{
      const res = await getChapterNovel({novelId: novels.id});
      setComment(res[0]);
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <div className="novel-detail-page container">
      <div className="detail-page-head">
        <div className="list-button">
          <div className='item-button'>
            <FacebookShareButton url={url}>
              <Button type="primary" icon={<FacebookOutlined />} size={'large'} className="btn-common">
                Facebook
              </Button>
            </FacebookShareButton>
          </div>
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
          <ShowImage image={novel.image} container="images" />
          <div className={`novel-kind ${novel.kind === NovelKind.MANGA ? 'blue' : ''}`}>
            <span>{novel.kind}</span>
          </div>
        </div>
        <div className="novel-content">
          <Title level={3} className="novel-title">
            {novel.name}
          </Title>
          <div className="novel-source">
            <Text>Origin</Text>
          </div>
          <div className="novel-follow mt-2">
            <div className="novel-follow-item">
              <Text>{novel.bookmarked}</Text>
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

              <Text className="caption">{novel?.rate} Votes</Text>
            </div>
            <div className="novel-follow-item">
              <Text>{novel.views}</Text>
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
            <li>{novel.status}</li>
            {
              novel.categories?.map(cate => (
                <li>cate.name</li>
              ))
            }

          </ul>
          <div className="novel-actions mt-4">
            <Button onClick={() => gotoChapter()} className="btn-common primary me-3">Start Reading</Button>
            {!changeButton && (<Button onClick={() => addBookMark(true)} className="btn-common primary outline">Follow</Button>)}
            {changeButton && (<Button onClick={() => addBookMark(false)} className="btn-common primary outline">UnFollow</Button>)}
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
            children: <CommentView comments={comment} onSubmited={getComment} novel={novels} />
          },
          {
            label: `Chapters`,
            key: '2',
            children: <ChapterView novel={novel} />
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
                  {novel?.name}
                </Title>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPageWrapper;

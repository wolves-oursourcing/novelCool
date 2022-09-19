import { EyeOutlined, PlusCircleOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { range } from 'lodash';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Novel } from '../../../services/novel.service';
import { NovelKind } from '../../../utilities/variables';

export enum DisplayType {
  NORMAL = 'NORMAL',
  FOLLOW = 'FOLLOW'
}
interface IPropsNovel {
  novel: Novel;
  isShowRate?: boolean;
  isShowTags?: boolean;
  isShowKind?: boolean;
  displayType?: DisplayType;
}
const { Title, Text } = Typography;
const NovelView: FC<IPropsNovel> = (props: IPropsNovel) => {
  const { novel, isShowRate, isShowTags, isShowKind, displayType } = props;

  const router = useRouter();

  const tags = ['Romance', 'Drama', 'School life']; // for demo
  return (
    <div className="novel">
      <div className="novel-image" onClick={() => router.push(`/novel/${novel.id}`)}>
        <img src={novel.image} alt="image" />
        {isShowRate && <div className="novel-rate">{novel.rate}</div>}
        {isShowKind && (
          <div className={`novel-kind ${novel.kind === NovelKind.MANGA ? 'blue' : ''}`}>
            <span>{novel.kind}</span>
          </div>
        )}
        {isShowTags && (
          <ul className="novel-tags-list">
            {tags.map(tag => (
              <li key={tag} className="novel-tags-item">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="overlay">
          <Title level={5} className="novel-title">
            Summary
          </Title>
          <Divider className="novel-divider" />
          <p className="novel-brief">{novel.description}</p>
          <a href="" className="more-detail">
            More detail
          </a>
        </div>
      </div>
      <div className="novel-content">
        <Title level={5} className="novel-title">
          {novel.title}
        </Title>
        <div className="novel-vote">
          <span className="novel-vote-number">{novel.vote}</span>
          <div className="list-star">
            {range(0, 5).map(star => (
              <div className="star" key={star}>
                <StarOutlined />
                <StarFilled
                  key={star}
                  className="star-active"
                  style={{
                    width: `${
                      Math.floor(novel.vote || 0) - star > 0
                        ? 100
                        : Math.floor(novel.vote || 0) - star > -1
                        ? ((novel.vote || 0) - Math.floor(novel.vote || 0)) * 100
                        : 0
                    }%`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <Divider className="novel-divider" />
        <div className="novel-footer">
          {displayType === DisplayType.FOLLOW ? (
            <>
              <div className="footer-top">
                <Text ellipsis>Chapter 1691 dsfas fdsafdsaf dfas</Text>
                <div className="novel-timer">{moment(novel.createdAt).format('MMM DD, YYYY')}</div>
              </div>
              <div className="novel-follow">
                <PlusCircleOutlined />
                <span>Follow</span>
              </div>
            </>
          ) : (
            <>
              <div className="novel-view">
                <EyeOutlined className="icon" />
                <span>{novel.view}</span>
              </div>
              <div className="novel-timer">{moment(novel.createdAt).format('MMM DD, YYYY')}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovelView;

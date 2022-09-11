import { EyeOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { range } from 'lodash';
import moment from 'moment';
import { FC } from 'react';
import { Novel } from '../../../services/novel.service';
interface IPropsNovel {
  novel: Novel;
}
const { Title } = Typography;
const NovelView: FC<IPropsNovel> = (props: IPropsNovel) => {
  const { novel } = props;
  return (
    <div className="novel" key={novel?.id}>
      <div className="novel-image">
        <img src={novel.image} alt="image" />
        <div className="novel-rate">{novel.rate}</div>
        <div className="novel-kind">
          <span>{novel.kind}</span>
        </div>
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
              <div className="star">
                <StarOutlined key={star} />
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
          <div className="novel-view">
            <EyeOutlined className="icon" />
            <span>{novel.view}</span>
          </div>
          <div className="novel-timer">{moment(novel.createdAt).format('MMM DD, YYYY')}</div>
        </div>
      </div>
    </div>
  );
};

export default NovelView;

import { RightOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { FC } from 'react';
import { Novel } from '../../../services/novel.service';
import NovelView from './Novel';
import ReactLoading from "react-loading";
import {Review} from "../../../services/review.services";
import ReviewView from "./Review";

interface IPropsNovelsSection {
  title: string;
  novels?: Novel[];
  review?: Review[];
  isGray?: boolean;
  loading?: boolean
}
const { Title } = Typography;
const NovelsSection: FC<IPropsNovelsSection> = (props: IPropsNovelsSection) => {
  const { novels, title, isGray, loading, review } = props;
  return (
    <div className={`${isGray ? 'gray' : ''} novels-section`}>
      <div className="container">
        {loading && ( <div className="loading">
          <ReactLoading type={"spin"} color="#fff"/>
        </div>)}
        <div className="novels-section-head">
          <Title level={3} className="novels-section-title">
            {title}
          </Title>
          <div className="more">
            <p>More</p>
            <RightOutlined />
          </div>
        </div>
        <Divider className="novels-section-divider" />
        {novels && novels.length > 0 && (
          <div className="list-novel">
            {novels.map(novel => (
              <NovelView novel={novel} />
              // <div className="novel">1</div>
            ))}
          </div>
        )}
        {review && review.length > 0 && (
            <div className="list-novel">
              {review.map(novel => (
                  <ReviewView review={novel} />
                  // <div className="novel">1</div>
              ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default NovelsSection;

import { EyeOutlined, PlusCircleOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { range } from 'lodash';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Novel } from '../../../services/novel.service';
import { NovelKind } from '../../../utilities/variables';
import ShowImage from '../../../layout/ShowImage';
import {Review} from "../../../services/review.services";

export enum DisplayType {
  NORMAL = 'NORMAL',
  FOLLOW = 'FOLLOW'
}
interface IPropsReview {
  review: Review;
}
const { Title, Text } = Typography;
const ReviewView: FC<IPropsReview> = (props: IPropsReview) => {
  const { review } = props;

  const router = useRouter();

  const gotoDetail = (id?: string) => {
    console.log(id);
    router.push(`/novel/${id}`);
  };
  return (
    <div className="novel">
      <div className="novel-image" >
        <ShowImage image={review?.image} container="images" />
        <div className="overlay">
          <Title level={5} className="novel-title">
            Summary
          </Title>
          <Divider className="novel-divider" />
          <p className="novel-brief">{review?.review}</p>
          <a href="" className="more-detail">
            More detail
          </a>
        </div>
      </div>
      <div className="novel-content">
        <Title level={5} className="novel-title">
          {review?.name}
        </Title>
        <Divider className="novel-divider" />
        <div className="novel-footer">
          <div className="novel-timer">{moment(review?.createdAt).format('MMM DD, YYYY')}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewView;

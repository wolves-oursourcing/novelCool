import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { range } from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Novel } from '../../services/novel.service';
import { Status } from '../../utilities/variables';
import NovelView from '../home/components/Novel';
import ReviewView from "../home/components/Review";

interface IPropsWrapperReview {
  reviews?: Novel[];
}
const { Title } = Typography;

const ReviewPageWrapper = (props: IPropsWrapperReview) => {
  const router = useRouter();
  const { reviews } = props;
  const years = range(1955, 2000);
  const status = Object.values(Status).map(item => {
    return {
      key: item,
      value: item
    };
  });

  return (
    <>
      <div className="category-page container">
        <div className={`novels-section`}>
          <div className="novels-section-head">
            <Title level={3} className="novels-section-title">
              Review
            </Title>
          </div>
          <Divider className="novels-section-divider" />
          <div className={` novels-section-search`}>
          </div>
          {reviews && reviews.length > 0 && (
            <div className="list-novel">
              {reviews.map((review, index) => (
                <ReviewView review={review} key={review.id} />
                // <div className="novel">1</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewPageWrapper;

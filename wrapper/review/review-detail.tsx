import { Button } from 'antd';
import React, {useEffect} from 'react';
import Loading from '../../layout/Loading';
import reviewServices, {Review} from '../../services/review.services'
import ShowImage from "../../layout/ShowImage";

interface IPropsReviewDetailWrapper {
  isLoading: boolean;
  review: Review
}

const ReviewDetailWrapper = (props: IPropsReviewDetailWrapper) => {
  const { isLoading, review } = props;

  // useEffect(() => {
  //   getReviewById();
  // }, [id])



  return (
    <div className="review-detail container">
      <h3 className="title">{review ? review.name : ''}</h3>
      {/*<p className="subHead">Garret Leigh</p>*/}
      <div className="content-reivew-detail">
        <div className="left">
           <ShowImage image={review? review.image : ''} container="images" className="novel-image" />
          {/*<img src={'/img/novel2.jpg'} alt="" className="novel-image" />*/}
        </div>
        <div className="right">
          <p>
            {review? review.review : ''}
          </p>
        </div>
      </div>
      <Loading show={isLoading} />
    </div>
  );
};

export default ReviewDetailWrapper;

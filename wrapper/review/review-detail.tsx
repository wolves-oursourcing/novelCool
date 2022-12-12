import { Button } from 'antd';
import React from 'react';
import Loading from '../../layout/Loading';
import ShowImage from '../../layout/ShowImage';

interface IPropsReviewDetailWrapper {
  isLoading: boolean;
}

const ReviewDetailWrapper = (props: IPropsReviewDetailWrapper) => {
  const { isLoading } = props;
  return (
    <div className="review-detail container">
      <h3 className="title">{'Chris on Firefly Hill'}</h3>
      <p className="subHead">Garret Leigh</p>
      <div className="content-reivew-detail">
        <div className="left">
          {/* <ShowImage image={'img/novel2.jpg'} container="images" className="novel-image" /> */}
          <img src={'/img/novel2.jpg'} alt="" className="novel-image" />

          <Button htmlType="submit" className="btn-common primary btn-buy">
            Buy this book
          </Button>
        </div>
        <div className="right">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
        </div>
      </div>
      <Loading show={isLoading} />
    </div>
  );
};

export default ReviewDetailWrapper;

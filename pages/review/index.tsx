import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { Novel } from '../../services/novel.service';
import CategoryPageWrapper from '../../wrapper/category';
import ReviewPageWrapper from "../../wrapper/review";
import reviewService, {Review} from "../../services/review.services";

const ReviewPage = () => {
  const [review, setReview] = useState<Review[]>();
  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    const review = await reviewService.getAllReview({
      orderByView: true,
      limit: 5,
      skip: 0
    });
    setReview(review[0]);
  };
  return (
    <div>
      <ReviewPageWrapper reviews={review} />
    </div>
  );
};

export default withAppProvider(ReviewPage);

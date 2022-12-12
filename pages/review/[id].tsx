import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import ReviewDetailWrapper from '../../wrapper/review/review-detail';
import reviewServices, {Review} from "../../services/review.services";

const ReviewDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [review, setReview] = useState();
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setIsLoading(true);
          await getReviewById();
        } catch (e) {
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [id]);

  const getReviewById = async () => {
    try {
      const res = await reviewServices.getReviewById(id);
      // setReview(res);
      if (res) {
        setReview(res as any);
      }
      console.log(res, 'getReviewById');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <ReviewDetailWrapper isLoading={isLoading} review={review} />
    </div>
  );
};

export default withAppProvider(ReviewDetailPage);

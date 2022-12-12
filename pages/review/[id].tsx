import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import ReviewDetailWrapper from '../../wrapper/review/review-detail';

const ReviewDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setIsLoading(true);
          // const response: Blog = await blogService.getDetailBlog(slug as string);
          // console.log('response', response);
          // setBlog(response);
        } catch (e) {
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [id]);
  return (
    <div>
      <ReviewDetailWrapper isLoading={isLoading} />
    </div>
  );
};

export default withAppProvider(ReviewDetailPage);

import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { Novel } from '../../services/novel.service';
import CategoryPageWrapper from '../../wrapper/category';

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  useEffect(() => {
    setNovels([
      {
        id: 1,
        image: '/img/banner_test.jpg',
        name: 'Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      }
    ]);
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <CategoryPageWrapper isLoading={isLoading} novels={novels} />
    </div>
  );
};

export default withAppProvider(CategoryPage);

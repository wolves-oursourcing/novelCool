import { useEffect, useState } from 'react';
import withAppProvider from '../hoc/withAppProvider';
import { Novel } from '../services/novel.service';
import HomeWrapper from '../wrapper/home';

const HomePage = () => {
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
      },
      {
        id: 2,
        image: '/img/novel2.jpg',
        name: '1Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 3,
        image: '/img/banner_test.jpg',
        name: '2Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4.7,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 4,
        image: '/img/banner_test.jpg',
        name: '3Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 2,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 5,
        image: '/img/banner_test.jpg',
        name: '4Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 3.5,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      }
    ]);
  }, []);

  return (
    <div>
      <HomeWrapper novels={novels} />
    </div>
  );
};
export default withAppProvider(HomePage);

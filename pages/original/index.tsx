import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { Novel } from '../../services/novel.service';
import OriginalWrapper from '../../wrapper/original';

const OriginalPage = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  useEffect(() => {
    setNovels([
      {
        id: 1,
        image: '/img/banner_test.jpg',
        title: 'Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4,
        view: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 2,
        image: '/img/novel2.jpg',
        title: '1Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4,
        view: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 3,
        image: '/img/banner_test.jpg',
        title: '2Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4.7,
        view: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 4,
        image: '/img/banner_test.jpg',
        title: '3Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 2,
        view: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 5,
        image: '/img/banner_test.jpg',
        title: '4Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 3.5,
        view: 2610,
        kind: 'Novel',
        createdAt: new Date()
      }
    ]);
  }, []);
  return (
    <div>
      <OriginalWrapper novels={novels} />
    </div>
  );
};
export default withAppProvider(OriginalPage);

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
  return (
    <div>
      <OriginalWrapper novels={novels} />
    </div>
  );
};
export default withAppProvider(OriginalPage);

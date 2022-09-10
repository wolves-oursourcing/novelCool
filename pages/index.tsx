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
        title: 'Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        view: 2610
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

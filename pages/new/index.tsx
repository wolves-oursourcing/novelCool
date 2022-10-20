import { PaginationProps } from 'antd';
import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { Novel } from '../../services/novel.service';
import NewPageWrapper from '../../wrapper/new';

const NewPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(50);
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

  const onChangePage: PaginationProps['onChange'] = page => {
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <div>
      <NewPageWrapper
        isLoading={isLoading}
        novels={novels}
        currentPage={currentPage}
        total={total}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default withAppProvider(NewPage);

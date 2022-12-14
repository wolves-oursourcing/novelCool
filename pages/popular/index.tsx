import { PaginationProps } from 'antd';
import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import novelServices, { Novel } from '../../services/novel.service';
import PopularPageWrapper from '../../wrapper/popular';

const PopularPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(50);
  const limit = 20;
  useEffect(() => {
    getNewNovel();
  }, []);
  useEffect(() => {}, []);

  const onChangePage: PaginationProps['onChange'] = page => {
    console.log(page);
    setCurrentPage(page);
    getNewNovel(page)
  };

  const getNewNovel = async (page?) => {
    try {
      const filter = {
        limit: limit,
        skip: (page? page : currentPage) * limit,
        orderByView: true
      }
      const res = await novelServices.getAllNovel(filter);
      setNovels(res[0]);
      setTotal(res[1]);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <PopularPageWrapper
        isLoading={isLoading}
        novels={novels}
        currentPage={currentPage}
        total={total}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default withAppProvider(PopularPage);

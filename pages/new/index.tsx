import { PaginationProps } from 'antd';
import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { Novel } from '../../services/novel.service';
import NewPageWrapper from '../../wrapper/new';
import novelServices from '../../services/novel.service'

const NewPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(50);
  const limit = 20;
  useEffect(() => {
    setNovels([]);
  }, []);
  useEffect(() => {
    getNewNovel();
  }, []);

  const getNewNovel = async (page?) => {
    try {
      const filter = {
        limit: limit,
        skip: (page ? page : currentPage) * limit,
        orderByLastCreate: true
      }
      const res = await novelServices.getAllNovel(filter);
      setNovels(res[0]);
      setTotal(res[1]);
    } catch (e) {
      console.log(e);
    }
  }

  const onChangePage: PaginationProps['onChange'] = page => {
    console.log(page);
    setCurrentPage(page);
    getNewNovel(page);
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

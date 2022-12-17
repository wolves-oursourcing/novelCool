import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import novelServices, { Novel } from '../../services/novel.service';
import CategoryPageWrapper from '../../wrapper/category';
import {PaginationProps} from "antd";

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(50);
  const limit = 20;
  useEffect(() => {
    getNewNovel();
  }, []);

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
      }
      const res = await novelServices.getAllNovel(filter);
      setNovels(res[0]);
      setTotal(res[1]);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {}, []);
  return (
    <div>
      <CategoryPageWrapper isLoading={isLoading}
                           novels={novels}
                           currentPage={currentPage}
                           onChangePage={onChangePage}
                           total={total} />
    </div>
  );
};

export default withAppProvider(CategoryPage);

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { Novel } from '../../services/novel.service';
import CategoryPageWrapper from '../../wrapper/category';
import SearchPageWrapper from '../../wrapper/search';

const SearchPage = () => {
  const router = useRouter();
  const { value } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  useEffect(() => {
    console.log('value :>> ', value);
  }, []);
  return (
    <div>
      <SearchPageWrapper isLoading={isLoading} value={value as string} />
    </div>
  );
};

export default withAppProvider(SearchPage);

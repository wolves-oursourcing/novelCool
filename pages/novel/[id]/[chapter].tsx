import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ReadingView = () => {
  const router = useRouter();
  const [novel, setNovel] = useState<any>();
  const [chapterName, setChapter] = useState<any>();
  const [data, setData] = useState<any>('');
  const [isLoading, setIsLoading] = useState(false);
  const { chapter, id } = router.query;
  console.log(router);
  useEffect(() => {
    getNovels();
  }, [chapter]);

  const getNovels = async () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };
  return <div>chapter</div>;
};

export default ReadingView;

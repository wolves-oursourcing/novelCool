import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReadingWrapper from '../../../wrapper/novel/read';
import novelService, {Chapter, Novel} from '../../../services/novel.service';
import {Config} from "../../../api/configs";

const ReadingView = () => {
  const router = useRouter();
  const [selectNovel, setSelectNovel] = useState<any>();
  const [chapterName, setChapter] = useState<any>();
  const [data, setData] = useState<any>('');
  const [isLoading, setIsLoading] = useState(false);
  const { chapter, id } = router.query;
  const [allChapter, setAllChapter] = useState<any>([]);
  console.log(router, 'chapterRouter');
  useEffect(() => {
    getNovels();
  }, [chapter]);

  const getChapter = async (novel: Novel) => {
    const res = await novelService.getChapterNovel({uniqueName: chapter});
    const data = res[0].find((value: Chapter) => value.novel && value.novel.uniqueName === novel.uniqueName);
    setChapter(data);
  }

  const getNovels = async () => {
    try {
      const res = (await novelService.getAllNovel({uniqueName: id})) as any[];
      if (res && res.length > 0) {
        const data = res[0].find((value: Novel) => value.uniqueName === id);
        console.log(data, "data");
        if (data) {
          await getChapter(data);
          setSelectNovel(data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <ReadingWrapper chapter={chapterName} novel={selectNovel} />
    </div>
  );
};

export default ReadingView;

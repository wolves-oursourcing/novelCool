import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import withAppProvider from '../../../hoc/withAppProvider';
import { Novel } from '../../../services/novel.service';
import DetailPageWrapper from '../../../wrapper/novel/detail-novel';
import novelService from '../../../services/novel.service';

const DetailNovel = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [novel, setNovel] = useState<Novel>({});
  const [novelsSuggest, setNovelsSuggest] = useState<Novel[]>([]);
  const { id } = router.query;
  console.log(router, 'router');
  console.log(id, 'query');
  const [comments, setComments] = useState([
    {
      id: 1,
      message: 'Welp,I started this at manhua or manhwa damn i love how he acts cute in front of her mother lol.',
      timer: '2 days ago',
      likes: 1,
      user: {
        name: 'toinv',
        avatar:
          'https://static.lightnovelpub.com/content/img/lightnovelpub/usravatar/4bfc6537014d4154a3a86da21f9b1e5e.jpg?637832816200070000',
        role: 'READER'
      },
      rate: 1,
      children: [
        {
          id: 1,
          message: 'Welp,I started this at manhua or manhwa damn i love how he acts cute in front of her mother lol.',
          timer: '2 days ago',
          likes: 1,
          user: {
            name: 'toinv',
            avatar:
              'https://static.lightnovelpub.com/content/img/lightnovelpub/usravatar/4bfc6537014d4154a3a86da21f9b1e5e.jpg?637832816200070000',
            role: 'READER'
          }
        },
        {
          id: 2,
          message: 'Welp,I started this at manhua or manhwa damn i love how he acts cute in front of her mother lol.',
          timer: '2 days ago',
          likes: 1,
          user: {
            name: 'toinv',
            avatar:
              'https://static.lightnovelpub.com/content/img/lightnovelpub/usravatar/4bfc6537014d4154a3a86da21f9b1e5e.jpg?637832816200070000',
            role: 'READER'
          }
        }
      ]
    },
    {
      id: 3,
      message: 'Welp,I started this at manhua or manhwa damn i love how he acts cute in front of her mother lol.',
      timer: '2 days ago',
      likes: 1,
      user: {
        name: 'toinv',
        avatar:
          'https://static.lightnovelpub.com/content/img/lightnovelpub/usravatar/4bfc6537014d4154a3a86da21f9b1e5e.jpg?637832816200070000',
        role: 'READER'
      },
      rate: 2
    }
  ]);

  useEffect(() => {
    getNovels();
    setNovelsSuggest([
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
      },
      {
        id: 2,
        image: '/img/novel2.jpg',
        name: '1Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 3,
        image: '/img/banner_test.jpg',
        name: '2Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 4.7,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 4,
        image: '/img/banner_test.jpg',
        name: '3Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 2,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      },
      {
        id: 5,
        image: '/img/banner_test.jpg',
        name: '4Super Detective In The Fictional World',
        description: 'Super Detective In The Fictional World',
        rate: 4.0,
        vote: 3.5,
        views: 2610,
        kind: 'Novel',
        createdAt: new Date()
      }
    ]);
  }, [id]);

  const getNovels = async () => {
    try {
      const res = (await novelService.getAllNovel({uniqueName: id})) as any[];
      if (res && res.length > 0) {
        const data = res[0].find((value: Novel) => value.uniqueName === id);
        if(data) {
          setNovel(data);
          // checkIsInLib(data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <DetailPageWrapper novel={novel} isLoading={isLoading} comments={comments} novelsSuggest={novelsSuggest} />
    </div>
  );
};

export default withAppProvider(DetailNovel);

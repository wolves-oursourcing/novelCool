import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import withAppProvider from '../../../hoc/withAppProvider';
import { Novel } from '../../../services/novel.service';
import DetailPageWrapper from '../../../wrapper/novel/detail-novel';

const DetailNovel = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [novel, setNovel] = useState<Novel>({
    id: 5,
    image: '/img/banner_test.jpg',
    title: '4Super Detective In The Fictional World',
    description: 'Super Detective In The Fictional World',
    rate: 4.0,
    vote: 3.5,
    view: 2610,
    kind: 'Manga',
    createdAt: new Date()
  });
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
      }
    }
  ]);

  useEffect(() => {
    getNovels();
  }, [id]);

  const getNovels = async () => {};
  return (
    <div>
      <DetailPageWrapper novel={novel} isLoading={isLoading} />
    </div>
  );
};

export default withAppProvider(DetailNovel);

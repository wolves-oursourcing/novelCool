import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Novel } from '../../services/novel.service';
import BannerSection from './components/BannerSection';
import NovelsSection from './components/NovelsSection';
import { NovelStatus } from '../../utilities/Enum';
import novelService from '../../services/novel.service';
import reviewService, {Review} from '../../services/review.services';
import Loading from '../../layout/Loading';

interface IPropsHomeWrapper {
  novels?: Novel[];
}
const HomeWrapper = (props: IPropsHomeWrapper) => {
  const { novels } = props;
  const [lastest, setLastest] = useState<Novel[]>();
  const [complete, setComplete] = useState<Novel[]>();
  const [popular, setPopular] = useState<Novel[]>();
  const [action, setAction] = useState<Novel[]>();
  const [drama, setDrama] = useState<Novel[]>();
  const [fantasy, setFantasy] = useState<Novel[]>();
  const [comedy, setComedy] = useState<Novel[]>();
  const [review, setReview] = useState<Review[]>();
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef();
  const router = useRouter();
  const query = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const scrollToContact = () => {
    const element = window.document.getElementById('contact');
    if (element !== null) {
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    if (query?.contact === 'true') {
      scrollToContact();
    }
  }, [query]);

  useEffect(() => {
    try {
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getLastest = async () => {
    setIsLoading(true);
    const lastest = await novelService.getAllNovel({
      orderByLastUpdate: true,
      limit: 10,
      skip: 0
    });
    setLastest(lastest[0]);
    setFantasy(lastest[0]);
    setComedy(lastest[0]);
    setDrama(lastest[0]);
    setAction(lastest[0]);
    setIsLoading(false);
  };

  const getComplete = async () => {
    const complete = await novelService.getAllNovel({
      status: NovelStatus.COMPLETE,
      limit: 10,
      skip: 0
    });
    setComplete(complete[0]);
  };

  const getData = async () => {
    try {
      setLoading(true);
      await Promise.all([getLastest(), getComplete(), getPopular(), getReview()]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  const getPopular = async () => {
    const popular = await novelService.getAllNovel({
      orderByView: true,
      limit: 10,
      skip: 0
    });
    setPopular(popular[0]);
  };

  const getReview = async () => {
    const review = await reviewService.getAllReview({
      orderByView: true,
      limit: 5,
      skip: 0
    });
    setReview(review[0]);
  };

  return (
    <>
      <BannerSection novels={popular} />
      <NovelsSection novels={lastest} title="Latest" routerTo="/lastest" isGray={true} />
      <NovelsSection novels={popular} title="Popular" routerTo="/category" />
      <NovelsSection novels={complete} title="Completed" isGray={true} routerTo="/category" />
      <NovelsSection novels={lastest} title="Romance" routerTo="/category" />
      <NovelsSection novels={comedy} title="Comedy" isGray={true} routerTo="/category" />
      <NovelsSection novels={fantasy} title="Fantasy" routerTo="/category" />
      <NovelsSection novels={drama} title="Drama" isGray={true} routerTo="/category" />
      <NovelsSection novels={action} title="Action" routerTo="/category" />
      <NovelsSection review={review} title="Review" routerTo="/category" />
      <Loading show={isLoading} />
    </>
  );
};

export default HomeWrapper;

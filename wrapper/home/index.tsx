import { useRouter } from 'next/router';
import {useEffect, useRef, useState} from 'react';
import { Novel } from '../../services/novel.service';
import BannerSection from './components/BannerSection';
import NovelsSection from './components/NovelsSection';
import {NovelStatus} from "../../utilities/Enum";
import novelService from '../../services/novel.service';

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
  const scrollRef = useRef();
  const router = useRouter();
  const query = router.query;
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
            getLastest();
            getComplete();
            getPopular();
        } catch (e) {
            console.log(e);
        }
    }, []);

    const getLastest = async () => {
        const lastest = await novelService.getAllNovel({
            orderByLastUpdate: true,
            limit: 10,
            skip: 0
        })
        setLastest(lastest[0]);
        setFantasy(lastest[0]);
        setComedy(lastest[0]);
        setDrama(lastest[0]);
        setAction(lastest[0]);
    }

    const getComplete = async () => {
        const complete = await novelService.getAllNovel({
            status: NovelStatus.COMPLETE,
            limit: 10,
            skip: 0
        })
        setComplete(complete[0]);
    }

    const getPopular = async () => {
        const popular = await novelService.getAllNovel({
            orderByView: true,
            limit: 10,
            skip: 0
        });
        setPopular(popular[0]);
    }


  return (
    <>
      <BannerSection novels={novels} />
      <NovelsSection novels={lastest} title="Latest" isGray={true} />
      <NovelsSection novels={popular} title="Popular" />
      <NovelsSection novels={complete} title="Completed" isGray={true} />
      <NovelsSection novels={lastest} title="Romance" />
      <NovelsSection novels={comedy} title="Comedy" isGray={true} />
      <NovelsSection novels={fantasy} title="Fantasy" />
      <NovelsSection novels={drama} title="Drama" isGray={true} />
      <NovelsSection novels={action} title="Action" />
    </>
  );
};

export default HomeWrapper;

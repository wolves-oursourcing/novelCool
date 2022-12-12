import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Typography } from 'antd';
import { range } from 'lodash';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import novelService, {Chapter, Novel} from '../../services/novel.service';
import { Status } from '../../utilities/variables';
import NovelView from '../home/components/Novel';
import {getCategory} from "../../services/category.services";
interface IPropsWrapperSearch {
  value: string;
  isLoading: boolean;
}
const { Title } = Typography;

const SearchPageWrapper = (props: IPropsWrapperSearch) => {
  const router = useRouter();
  const { value, isLoading } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [novels, setNovels] = useState<Novel[]>([]);
  const [series, setSeries] = useState('');
  const [genres, setGenres] = useState<any[]>([]);
  const [selectedCate, setSelectedCate] = useState<any>();
  const [startWith, setStartWith] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const years = range(1955, 2000);
  const status = Object.values(Status).map(item => {
    return {
      key: item,
      value: item
    };
  });
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  const getCateGory = async () => {
    try {
      const res = await getCategory();
      setGenres(res[0]);
    } catch (e) {
      console.log(e);
    }

  }

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const search = async () => {
    try {
      const res = await novelService.getAllNovel({
        name: series,
        categoryId: selectedCate ? selectedCate.id : undefined,
        startWith: startWith,
        status: selectedStatus === Status.ALL ? '' : selectedStatus
      });
      setNovels(res[0]);
    } catch (e) {
      console.log(e);
    }

  };

  useEffect(() => {
    getCateGory();
  }, []);

  useEffect(() => {
    search();
  }, [selectedCate, selectedStatus])

  return (
    <>
      <div className="category-page search-page container">
        <div className={`novels-section`}>
          <div className="novels-section-head">
            <Title level={3} className="novels-section-title">
              Search
            </Title>
            <div className="search" onClick={() => toggleSearch()}>
              <span>Advance search</span>
              {openSearch ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
            </div>
          </div>
          <Divider className="novels-section-divider" />
          <div className={`${openSearch ? 'active' : ''} novels-section-search`}>
            <div className="row-search">
              <label className="label">Name:</label>
              <div className="list-search">
                <Input onChange={(e) => setSeries(e.target.value)} placeholder="Series name" />
              </div>
            </div>
            <div className="row-search">
              <label className="label">Status:</label>
              <div className="list-search">
                {status.map(st => (
                  <div onClick={() => setSelectedStatus(st.value)} className={`${st.value === Status.ALL ? 'all' : ''} item-search`} key={st.key}>
                    {st.value}
                  </div>
                ))}
              </div>
            </div>
            <div className="row-search">
              <label className="label">Genres:</label>
              <div className="list-search">
                <div className="item-search all">All</div>
                {genres.map(genre => (
                  <div onClick={() => setSelectedCate(genre.id)} className="item-search" key={genre.id}>
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="row-search">
              <label className="label">Alphabetic:</label>
              <div className="list-search alphabet">
                <div className="item-search all">All</div>
                <div className="item-search">0-9</div>
                {alphabet.map(ch => (
                  <div onClick={() => setStartWith(ch)} className="item-search" key={ch}>
                    {ch}
                  </div>
                ))}
              </div>
            </div>
            <div className="row-search submit">
              <label className="label"></label>
              <Button className="btn-common primary btn-submit" onClick={search}>
                Search
              </Button>
              <Button className="btn-common btn-submit" onClick={search}>
                Reset
              </Button>
            </div>
          </div>
          {novels && novels.length > 0 && (
            <div className="list-novel">
              {novels.map((novel, index) => (
                <NovelView novel={novel} key={novel.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPageWrapper;

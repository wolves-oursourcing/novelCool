import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Typography } from 'antd';
import { range } from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Novel } from '../../services/novel.service';
import { Status } from '../../utilities/variables';
import NovelView from '../home/components/Novel';

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
  const [genres, setGenres] = useState<string[]>([
    '4 Koma',
    '4-Koma',
    'Action',
    'Adaptation',
    'Adventure',
    'Alchemy',
    'Aliens',
    'Animals',
    'Anthology'
  ]);
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

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const search = () => {
    console.log('search :>> ');
  };

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
                <Input placeholder="Series name" />
              </div>
            </div>
            <div className="row-search">
              <label className="label">Author name:</label>
              <div className="list-search">
                <Input placeholder="Author name" />
              </div>
            </div>
            <div className="row-search">
              <label className="label">Status:</label>
              <div className="list-search">
                {status.map(st => (
                  <div className={`${st.value === Status.ALL ? 'all' : ''} item-search`} key={st.key}>
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
                  <div className="item-search" key={genre}>
                    {genre}
                  </div>
                ))}
              </div>
            </div>
            <div className="row-search">
              <label className="label">Years:</label>
              <div className="list-search year">
                <div className="item-search all">All</div>
                {years.map(year => (
                  <div className="item-search" key={year}>
                    {year}
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
                  <div className="item-search" key={ch}>
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

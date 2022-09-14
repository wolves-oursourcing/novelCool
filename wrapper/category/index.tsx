import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { range } from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Novel } from '../../services/novel.service';
import { Status } from '../../utilities/variables';
import NovelView from '../home/components/Novel';

interface IPropsWrapperCategory {
  novels?: Novel[];
  total?: number;
  currentPage?: number;
  isLoading: boolean;
}
const { Title } = Typography;

const CategoryPageWrapper = (props: IPropsWrapperCategory) => {
  const router = useRouter();
  const { novels, total, currentPage, isLoading } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
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

  return (
    <>
      <div className="category-page container">
        <div className={`novels-section`}>
          <div className="novels-section-head">
            <Title level={3} className="novels-section-title">
              Category
            </Title>
            <div className="search" onClick={() => toggleSearch()}>
              <span>Advance search</span>
              {openSearch ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
            </div>
          </div>
          <Divider className="novels-section-divider" />
          <div className={`${openSearch ? 'active' : ''} novels-section-search`}>
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
          </div>
          {novels && novels.length > 0 && (
            <div className="list-novel">
              {novels.map((novel, index) => (
                <NovelView novel={novel} key={novel.id} />
                // <div className="novel">1</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPageWrapper;

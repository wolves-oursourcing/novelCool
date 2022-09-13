import { PlusSquareOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { useRouter } from 'next/router';
import { Novel } from '../../services/novel.service';
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

  return (
    <>
      <div className="category-page container">
        <div className={`novels-section`}>
          <div className="novels-section-head">
            <Title level={3} className="novels-section-title">
              Category
            </Title>
            <div className="search">
              <span>Advance search</span>
              <PlusSquareOutlined />
            </div>
          </div>
          <Divider className="novels-section-divider" />
          {novels && novels.length > 0 && (
            <div className="list-novel">
              {novels.map(novel => (
                <NovelView novel={novel} />
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

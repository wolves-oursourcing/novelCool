import { Divider, Typography } from 'antd';
import PaginationView from '../../layout/Pagination';
import { Novel } from '../../services/novel.service';
import NovelView, { DisplayType } from '../home/components/Novel';

interface IPropsNewPageWrapper {
  novels: Novel[];
  isLoading: boolean;
  currentPage?: number;
  total?: number;
  onChangePage?: any;
}
const { Title } = Typography;

const NewPageWrapper = (props: IPropsNewPageWrapper) => {
  const { novels, currentPage, onChangePage, total } = props;
  return (
    <div className="new-page container">
      <div className="novels-section">
        <div className="novels-section-head">
          <Title level={3} className="novels-section-title">
            New
          </Title>
        </div>
        <Divider className="novels-section-divider" />
        {novels && novels.length > 0 && (
          <div className="d-flex flex-column">
            <div className="list-novel">
              {novels.map(novel => (
                <NovelView
                  novel={novel}
                  key={novel.id}
                  isShowTags={true}
                  isShowKind={true}
                  displayType={DisplayType.FOLLOW}
                />
              ))}
            </div>
            <PaginationView current={currentPage} total={total} onChange={onChangePage} pageSize={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPageWrapper;

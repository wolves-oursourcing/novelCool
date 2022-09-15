import { Pagination } from 'antd';

interface IPropsPagination {
  current?: number;
  onChange?: any;
  total?: number;
  pageSize?: number;
}
const PaginationView = (props: IPropsPagination) => {
  const { current, onChange, total, pageSize } = props;
  return (
    <div className="pagination">
      <Pagination current={current} onChange={onChange} total={total} pageSize={pageSize} />
    </div>
  );
};

export default PaginationView;

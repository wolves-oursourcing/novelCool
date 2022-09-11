import { RightOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { FC } from 'react';
import { Novel } from '../../../services/novel.service';
import NovelView from './Novel';

interface IPropsNovelsSection {
  title: string;
  novels?: Novel[];
  isGray?: boolean;
}
const { Title } = Typography;
const NovelsSection: FC<IPropsNovelsSection> = (props: IPropsNovelsSection) => {
  const { novels, title, isGray } = props;
  return (
    <div className={`${isGray ? 'gray' : ''} novels-section`}>
      <div className="container">
        <div className="novels-section-head">
          <Title level={3} className="novels-section-title">
            {title}
          </Title>
          <div className="more">
            <p>More</p>
            <RightOutlined />
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
  );
};

export default NovelsSection;

import { CommentOutlined, LikeFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { range } from 'lodash';
import moment from 'moment';
import { Comment } from './../../../api/comment';

interface IPropsCommentItem {
  comment: Comment;
}
const { Title, Text, Paragraph } = Typography;
const CommentItem = (props: IPropsCommentItem) => {
  const { comment } = props;
  return (
    <div className="comment-item">
      <div className="comment-image">
        <img src={'/img/banner_test.jpg'} alt="" />
      </div>
      <div className="comment-content">
        <Title level={5} className="mb-0">
          {'User name'}
        </Title>
        <div className="list-star">
          {range(1, 6).map(item => (
            <div className="wrap-star" key={item}>
              <StarOutlined className="star" />
              {item <= (comment?.rate || 0) ? <StarFilled className="star star-active" /> : null}
            </div>
          ))}
        </div>
        <Paragraph>{comment?.message}</Paragraph>
        <div className="comment-actions">
          <Text className="timer">{moment(comment.createdAt).format('MMM DD, YYYY')}</Text>
          <div className="actions">
            <CommentOutlined className="icon me-3" />
            <LikeFilled className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentItem;

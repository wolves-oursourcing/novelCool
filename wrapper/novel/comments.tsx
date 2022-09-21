import { PlusOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Divider, Input, Typography, Upload } from 'antd';
import { useState } from 'react';
import { Comment } from '../../api/comment';

interface IPropsComment {
  comments?: Comment[];
}

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const CommentView = (props: IPropsComment) => {
  const { comments } = props;
  const [comment, setComment] = useState<Comment>();
  return (
    <div className="comment-view">
      <Title level={4}>{comments && comments.length} Comments</Title>
      <Divider className="detail-page-divider" />
      <div className="write-comment">
        <div className="rate">
          <Text>Your rating fo this book is: </Text>
          <div className="list-star">
            <StarOutlined />
            <StarFilled className="star-active" />
          </div>
        </div>
        <div className="message">
          <TextArea placeholder="Write down your comments here"></TextArea>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </div>
      </div>
    </div>
  );
};

export default CommentView;

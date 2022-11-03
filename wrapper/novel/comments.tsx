import { PlusOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Typography, Upload } from 'antd';
import { range } from 'lodash';
import { useState } from 'react';
import { Comment } from '../../api/comment';
import CommentItem from './components/Comment';
import {createComment, getChapterNovel} from "../../services/comment.services";
import {KeyConfigLocal} from "../../api/configs";
import {Novel} from "../../services/novel.service";

interface IPropsComment {
  comments?: any[];
  novel?: Novel;
  onSubmited?: any;
}

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const CommentView = (props: IPropsComment) => {
  const { comments, novel, onSubmited } = props;
  const [comment, setComment] = useState<Comment>();
  const onSubmit = async () => {
    const user = localStorage.getItem(KeyConfigLocal.USER);
    console.log(user);
    if (user && novel && comment) {
      const data = JSON.parse(user);
      const dataSend = {
        "content": comment.content,
        "userId": data.id,
        "novelId": novel.id,
        "parentId": null,
        "rate": comment.rate
      }
      await createComment(dataSend);
      onSubmited();
      setComment({content: '', rate: 1});
    }
    console.log('comment', comment);
  };


  return (
    <div className="comments-view">
      <Title level={4}>{comments && comments.length} Comments</Title>
      <Divider className="detail-page-divider" />
      <div className="write-comment">
        <div className="rate">
          <Text>Your rating fo this book is: </Text>
          <div className="list-star">
            {range(1, 6).map(item => (
              <div className="wrap-star" key={item} onClick={() => setComment({ ...comment, rate: item })}>
                <StarOutlined className="star" />
                {item <= (comment?.rate || 0) ? <StarFilled className="star star-active" /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="message">
          <TextArea
            placeholder="Write down your comments here"
            rows={10}
            value={comment?.content}
            onChange={e => setComment({ ...comment, content: e.target.value })}
          ></TextArea>
          {/*<Upload action="/upload.do" listType="picture-card" className="upload">*/}
          {/*  <div>*/}
          {/*    <PlusOutlined />*/}
          {/*    <div style={{ marginTop: 8 }}>Upload</div>*/}
          {/*  </div>*/}
          {/*</Upload>*/}
        </div>
        <Button className="btn-common primary btn-submit" onClick={onSubmit}>
          Submit
        </Button>
      </div>
      <div className="list-comment">
        {comments && comments.map(comment => <CommentItem comment={comment} key={comment.id} />)}
      </div>
    </div>
  );
};

export default CommentView;

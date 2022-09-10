import { Col, Row } from 'antd';
import React from 'react';
import Loading from '../../layout/Loading';

interface IPropsBlogDetailWrapper {
  isLoading: boolean;
}

const BlogDetailWrapper = (props: IPropsBlogDetailWrapper) => {
  const { isLoading } = props;
  return (
    <div className="blog-detail">
      <Loading show={isLoading} />
    </div>
  );
};

export default BlogDetailWrapper;

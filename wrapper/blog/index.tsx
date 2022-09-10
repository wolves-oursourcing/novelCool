import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Col, Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Novel } from '../../services/novel.service';
import { PER_PAGE } from '../../api/configs';
import Loading from '../../layout/Loading';

interface IPropsWrapperBlog {
  blogs: Novel[];
  handleChangePage: any;
  total?: number;
  currentPage?: number;
  isLoading: boolean;
}
const BlogPageWrapper = (props: IPropsWrapperBlog) => {
  const router = useRouter();
  const { blogs, handleChangePage, total, currentPage, isLoading } = props;

  return (
    <>
      <div className="blog-page">
        <div className="heading">Articles</div>

        <Loading show={isLoading} />
        {(total || 0) > PER_PAGE && (
          <Pagination
            onChange={handleChangePage}
            pageSize={PER_PAGE}
            total={total}
            current={currentPage}
            showSizeChanger={false}
            className="pagination"
          />
        )}
      </div>
    </>
  );
};

export default BlogPageWrapper;

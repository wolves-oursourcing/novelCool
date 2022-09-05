import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Col, Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GetInTouchComponent from '../get-in-touch';
import { useRouter } from 'next/router';
import { Blog } from '../../services/blog.service';
import { PER_PAGE } from '../../api/configs';
import Loading from '../../layout/Loading';

interface IPropsWrapperBlog {
  blogs: Blog[];
  handleChangePage: any;
  total?: number;
  currentPage?: number;
  isLoading: boolean;
}
const BlogPageWrapper = (props: IPropsWrapperBlog) => {
  const router = useRouter();
  const { blogs, handleChangePage, total, currentPage, isLoading } = props;

  const redirectExternalBlog = (e: any, blog: Blog) => {
    e.stopPropagation();
    window.open(blog.external_blog_url as string, '_blank');
  };
  const redirect2Detail = (blog: Blog) => {
    if (!blog.external) {
      router.push(`blog/${blog.id}`);
    } else {
      window.open(blog.external_blog_url as string, '_blank');
    }
  };
  return (
    <>
      <div className="blog-page">
        <div className="heading">Articles</div>
        {blogs && blogs.length > 0 && (
          <Row gutter={[29, 29]}>
            {blogs.map(blog => (
              <Col key={blog.id} xs={24} md={24} lg={8}>
                <a className="card-small" onClick={() => redirect2Detail(blog)}>
                  <Row className="card-small-row h-100">
                    <Col xs={24} md={12} lg={24}>
                      <div className="card-small-content">
                        <div className="title">{blog?.blog_category}</div>
                        <div className="description">{blog?.title}</div>
                        {blog?.external && (
                          <>
                            <div className="external-description">{blog?.external_blog_description}</div>
                            <div className="d-flex align-items-center mt-auto">
                              <span className="btn-read-more">Read More</span>
                              <ArrowRightOutlined />
                            </div>
                          </>
                        )}
                      </div>
                    </Col>
                    <Col xs={24} md={12} lg={24} className="card-small-col mt-auto">
                      <div className="mt-auto">
                        <div className="img-wrapper">
                          <Image src={blog?.image_url as string} width={382} height={202} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </a>
              </Col>
            ))}
          </Row>
        )}
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
      <GetInTouchComponent />
    </>
  );
};

export default BlogPageWrapper;

import { Col, Row } from 'antd';
import React from 'react';
import { Blog } from '../../services/blog.service';
import Loading from '../../layout/Loading';

interface IPropsBlogDetailWrapper {
  blog?: Blog;
  isLoading: boolean;
}

const BlogDetailWrapper = (props: IPropsBlogDetailWrapper) => {
  const { blog, isLoading } = props;
  return (
    <div className="blog-detail">
      {blog && (
        <>
          <section className="banner blog-section">
            <div className="wrap-banner">
              <img src={blog.image_url || ''} />
            </div>
          </section>
          <section className="first-blog-section">
            <Row>
              <Col xs={24}>
                <div className="block-top">
                  {/* <div className="heading">{blog.blog_category}</div> */}
                  <div className="title">{blog.title}</div>
                  {/* <div className="sub-title">
              </div> */}
                  <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
                </div>
              </Col>
            </Row>
            {/* <div className="image-wrapper">
          <Image src="/img/background_s2.gif" width={1440} height={680} />
          <div className="box">
            <div className="box-title">Building your venture</div>
            <div className="box-description">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.{' '}
            </div>
          </div>
        </div> */}
          </section>
        </>
      )}

      {/* <section className="second-blog-section">
        <Row>
          <Col xs={24} md={24} lg={16}>
            <div className="title">{blog.title}</div>
          </Col>
        </Row>
        <Row gutter={[{ xs: 0, md: 0, lg: 86 }, 16]}>
          <Col xs={24} md={24} lg={12}>
            <div className="sub-title">{blog.content}</div>
          </Col>
          <Col xs={24} md={24} lg={12}>
            <div className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vitae iaculis ut risus feugiat quisque.
              Nec turpis lorem vitae sed metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vitae
              iaculis ut risus feugiat quisque. Nec turpis lorem vitae sed metus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tristique vitae iaculis ut risus feugiat quisque. Nec turpis lorem vitae sed
              metus.
            </div>
          </Col>
        </Row>
      </section>
      <section className="third-blog-section">
        <Row>
          <Col xs={24} md={20} lg={16}>
            <div className="content-wrapper">
              <div className="title">Building your venture</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vitae iaculis ut risus feugiat
                quisque. Nec turpis lorem vitae sed metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vitae iaculis ut risus feugiat quisque. Nec turpis lorem vitae sed metus. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Tristique vitae iaculis ut risus feugiat quisque. Nec turpis
                lorem vitae sed metus.{' '}
              </div>
            </div>
          </Col>
        </Row>
      </section> */}
      <Loading show={isLoading} />
    </div>
  );
};

export default BlogDetailWrapper;

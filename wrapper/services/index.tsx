import { Button, Col, Row } from 'antd';
import React from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import { URL_CONTACT, URL_SUCCESS_STORIES } from '../../utilities/URL';
import { useRouter } from 'next/router';
import { Blog } from '../../services/blog.service';

type IPropsServicesPageWrapper = {
  blogs: Blog[];
};

const ServicesPageWrapper = (props: IPropsServicesPageWrapper) => {
  const router = useRouter();
  const { blogs } = props;

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

  const renderBlogs = (blogRenders: Blog[]) => {
    if (!blogRenders || blogRenders.length <= 0) {
      return null;
    }
    const [firstBlog, ...restBlog] = blogRenders;
    return (
      <React.Fragment>
        {firstBlog && (
          <a className="card-large" onClick={() => redirect2Detail(firstBlog)}>
            <Row align="middle">
              <Col xs={24} md={12} lg={14}>
                <div className="block-left">
                  <div className="title">{firstBlog?.blog_category}</div>
                  <div className="description">{firstBlog?.title}</div>
                  {firstBlog?.external && (
                    <>
                      <div className="external-description">{firstBlog?.external_blog_description}</div>
                      <div className="d-flex align-items-center mt-auto">
                        <span className="btn-read-more">Read More</span>
                        <ArrowRightOutlined />
                      </div>
                    </>
                  )}
                </div>
              </Col>
              <Col xs={24} md={12} lg={10}>
                <div className="img-wrapper">
                  <Image src={firstBlog?.image_url || ''} width={499} height={285} />
                </div>
              </Col>
            </Row>
          </a>
        )}
        {restBlog && restBlog.length > 0 && (
          <Row gutter={[29, 29]}>
            {restBlog.map(blog => (
              <Col xs={24} md={24} lg={8} key={blog.id}>
                <a className="card-small" onClick={() => redirect2Detail(blog)}>
                  <Row className="card-small-row h-100">
                    <Col xs={24} md={12} lg={24}>
                      <div className="card-small-content">
                        <div className="title">{blog?.blog_category}</div>
                        <div className="description">{blog.title}</div>
                        {blog?.external && (
                          <>
                            <div className="external-description">{blog?.external_blog_description}</div>
                            <div className="d-flex align-items-center mt-auto">
                              <span className="btn-read-more" onClick={e => redirectExternalBlog(e, blog)}>
                                Read More
                              </span>
                              <ArrowRightOutlined />
                            </div>
                          </>
                        )}
                      </div>
                    </Col>
                    <Col xs={24} md={12} lg={24} className="card-small-col mt-auto">
                      <div className="mt-auto">
                        <div className="img-wrapper">
                          <Image src={blog.image_url || ''} width={382} height={202} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </a>
              </Col>
            ))}
          </Row>
        )}
      </React.Fragment>
    );
  };
  return (
    <div className="services-page">
      <section className="first-services-section">
        <Row align="middle">
          <Col xs={24} md={24} lg={16}>
            <div className="block-left">
              <div className="heading">SERVICES</div>
              <div className="title">Build your Venture with us - Assembly Line in A Factory Approach</div>
              <Image src="/img/services/services_1.png" width={719} height={140} alt="services_1" />
            </div>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="block-right">
              <div className="block-right-top">
                <div className="title">SUCCESS STORIES</div>
                <div className="d-flex align-items-center mt-auto">
                  <a href={URL_SUCCESS_STORIES} className="sub-title">
                    Forged partnership and created ecosystem
                  </a>
                  <ArrowRightOutlined />
                </div>
              </div>
              <div className="wrapper-contain">
                <div className="block-right-bottom">
                  <div className="title">SUCCESS STORIES</div>
                  <div className="d-flex align-items-center mt-auto">
                    <a href={URL_SUCCESS_STORIES} className="sub-title">
                      We help re-invent businesses
                    </a>
                    <ArrowRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="image-wrapper">
          <Image src="/img/services/services_3.png" width={1095} height={362} />
        </div>
      </section>
      <section className="second-services-section">
        <div className="title">
          Execution stage - <br />
          Critical Components of Assembly Line
        </div>
        <Row justify="center" gutter={[17, 17]}>
          <Col xs={24} md={12} lg={6}>
            <div className="box">
              <div className="box-text">
                Design entity structure in both licensed and non-licensed revenue streams and co-develop your capital
                infusion model
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="box">
              <div className="box-text">
                Identity the to-do's for skillsets to be onboarded and when they should be onboarded
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <div className="box">
              <div className="box-text">
                Strategic advice on application process, co-preparation of requisite documentation (including Business
                Plan, Compliance Manual, AML/CFT Risk Assessment) and outsourced compliance services Application for
                financial services such as payments to enter Asia through Singapore or enter Europe through Czech
                Republic
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={9}>
            <div className="box">
              <div className="box-text">
                Partnerships: Combine relevant solutions, deliver Innovative commercial framework to create an ecosystem
                that lowers costs, earn revenues by entering new markets, by pivoting the business model, launching
                product faster
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={9}>
            <div className="box">
              <div className="box-text">
                Combine most relevant solutions (highlight and bold this) of third party software and SaaS providers to
                develop cloud based tech stack . We are agnostic to continuing with your existing partners or
                recommending new partners
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="box">
              <div className="box-text">
                Agile toolkit to track progress, prioritise tasks, to commit codes, test APIs, authentication flow,
                communication channel{' '}
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="third-services-section">
        <Row justify="center" align="middle">
          <Col xs={24} md={24} lg={12}>
            <div className="title">Still not sure where to start?</div>
            <div className="sub-title">
              Want to get in touch? We'd love to hear from you. Please reach out to us by clicking on the 'Get in touch'
              button below.
            </div>
            <div className="d-flex justify-content-center">
              <Button size="large" className="btn-submit" onClick={() => router.push(URL_CONTACT)}>
                Get in touch <ArrowRightOutlined />
              </Button>
            </div>
          </Col>
        </Row>
      </section>
      <section className="fourth-services-section">
        <div className="heading">Articles</div>
        {renderBlogs(blogs || [])}
      </section>
    </div>
  );
};

export default ServicesPageWrapper;

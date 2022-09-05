import {
  ArrowRightOutlined,
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';
import Image from 'next/image';

const FirstSection = () => {
  return (
    <>
      <div className="first-section-wrapper">
        <div className="w-100">
          <Row align="middle">
            <Col xs={24} md={24} lg={12}>
              <div className="block-left">
                Building ventures to embed financial services and monetize technologies
                <div className="content">
                  We facilitate problem solving with human-centered mindset to drive digital growth. Partner with us to
                  expand new markets and new business lines in lesser time and lower costs.
                </div>
                <Button size="large" className="btn-get-started">
                  <ArrowRightOutlined /> Get started
                </Button>
              </div>
            </Col>
            <Col xs={24} md={24} lg={12}>
              <div className="d-flex">
                <div className="block-right">
                  <Image src="/img/home_1.png" width={596} height={700} alt="img-product" />
                </div>
                <div className="social-group">
                  <div className="group">
                    <a className="icon-social">
                      <FacebookFilled />
                    </a>
                    <a className="icon-social">
                      <TwitterOutlined />
                    </a>
                    <a className="icon-social">
                      <YoutubeFilled />
                    </a>
                    <a className="icon-social">
                      <InstagramOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* TODO: comment on Aug 11 */}
      {/* <div className="first-section-about">
        <Row justify="center">
          <Col xs={24} md={18} lg={14}>
            <div className="heading">ABOUT US</div>
            <div className="title">Through products, services and insights, we build financial solutions</div>
          </Col>
        </Row>
      </div> */}
    </>
  );
};

export default FirstSection;

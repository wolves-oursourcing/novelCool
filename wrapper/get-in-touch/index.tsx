import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { URL_CONTACT } from '../../utilities/URL';

const GetInTouchComponent = () => {
  const router = useRouter();
  return (
    <section className="get-in-touch-wrapper">
      <div className="contact-wrapper">
        <div className="heading">GET IN TOUCH</div>
        <Row align="middle" justify="space-between">
          <Col xs={24} md={24} lg={16}>
            <div className="title">Let's talk about what we can create and build together</div>
          </Col>
          <Col xs={24} md={24} lg={4}>
            <div className="d-flex justify-content-center">
              <Button size="large" className="btn-submit" onClick={() => router.push(URL_CONTACT)}>
                <ArrowRightOutlined />
                Contact us
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetInTouchComponent;

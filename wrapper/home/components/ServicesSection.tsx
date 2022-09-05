import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { URL_SERVICES } from '../../../utilities/URL';
import Image from 'next/image';

const ServicesSection = () => {
  const router = useRouter();
  return (
    <div className="services-section">
      <div className="block-left">
        <Row align="middle">
          <Col xs={24} md={12}>
            <div className="left-wrapper">
              <div className="heading">SERVICES</div>
              <div className="title">
                Phygital:
                <br />
                Physical + Digital
              </div>
              <div className="sub-title">
                Build from scratch with lesser costs in a phase wise and with an Assembly Line In A Factory Approach
              </div>
              <Button size="large" className="btn-explore" onClick={() => router.push(URL_SERVICES)}>
                Explore more <ArrowRightOutlined />
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Image src="/img/home_2.png" width={783} height={800} alt="img-product" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServicesSection;

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { URL_PRODUCTS } from '../../../utilities/URL';
const ProductSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="products-section">
        <Row>
          <Col xs={24} md={24} lg={18}>
            <div className="heading">PRODUCTS</div>
            <div className="title">Flexible operating support to help you expand to new Fintech products</div>
            <div className="sub-title">You like to select specific solutions - Modular approach</div>
            <Button size="large" className="btn-explore" onClick={() => router.push(URL_PRODUCTS)}>
              Explore more <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="products-section-two">
        <Row gutter={[{ lg: 64 }, 0]}>
          <Col xs={24} md={24} lg={12}>
            <Image src="/img/product_img.png" width={740} height={550} alt="img-product" />
          </Col>
          <Col xs={24} md={24} lg={12}>
            <div className="title">Through product, services and insights, we build financial services</div>
            <Button size="large" className="btn-explore" onClick={() => router.push(URL_PRODUCTS)}>
              Explore more <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductSection;

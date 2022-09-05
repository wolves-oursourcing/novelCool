import { Button, Col, Row } from 'antd';
import React from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import { URL_CONTACT } from '../../utilities/URL';
import { useRouter } from 'next/router';
const ProductsPageWrapper = () => {
  const router = useRouter();
  return (
    <div className="product-page">
      <section className="first-product-section">
        <Row>
          <Col xs={24} md={24} lg={12}>
            <div className="heading">BUILD PRODUCT APPROACH</div>
            <div className="title">Recognizing physical presence in digital journey</div>
            <div className="sub-title">
              We help to build your product from fundamentals of Research, User Experience, Design , to embedding
              financial services in your existing offerings on Mobile Application, Social media and Web.
            </div>
          </Col>
          <Col xs={24} md={24} lg={12}>
            <Image src="/img/product/product_1.png" alt="first_img" width={675} height={552} />
          </Col>
        </Row>
      </section>
      <section className="second-product-section">
        <Row align="middle">
          <Col xs={24} md={24} lg={16}>
            <Image src="/img/product/product_2.png" alt="second_img" width={806} height={524} />
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="text">
              Customer experience integrated across Physical Stores, Mobile Application and Internet{' '}
            </div>
          </Col>
        </Row>
      </section>

      <section className="third-product-section">
        <Row align="middle">
          <Col xs={24} md={24} lg={8}>
            <div className="text">We help you visualize and co-build the products through all the stages of design</div>
          </Col>
          <Col xs={24} md={24} lg={16}>
            <Image src="/img/product/product_3.jpg" alt="second_img" width={681} height={681} />
          </Col>
        </Row>
      </section>

      <section className="fourth-product-section">
        <div className="text">Payments</div>
        <div className="d-flex justify-content-between card-wrapper">
          <div className="card-item">Issuing prepaid cards</div>
          <div className="card-item">e-wallets</div>
          <div className="card-item">Payment processing - gateway</div>
          <div className="card-item">Banking as a service</div>
          <div className="card-item">Automated reconcilation</div>
        </div>
      </section>

      <section className="sixth-product-section">
        <div className="image-wrapper">
          <img src="/img/product/product_5.png" />
        </div>
        <div className="d-flex justify-content-center w-50">
          <div style={{ paddingLeft: '50px', paddingRight: '10px' }}>
            <div className="text mb-30">Lending to small business</div>
            <div className="text mb-30">Insurance on a mobile app</div>
            <ul>
              <li>Life insurance</li>
              <li>Non life insurance</li>
              <li>Bit sized</li>
              <li>Opt in</li>
              <li>Opt out</li>
              <li>
                Life insurance Non life insurance Opt in Opt out Bit sized , unsecured , map the purchase value of goods
                with loan value in the customer journey, lower risk with innovative approach of physical interface ,
                embed in distributor and small retailer workflows
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fifth-product-section">
        <div className="text">Engineering mindset</div>
        <div className="text-center">
          <Image src="/img/product/product_4.png" alt="fifth_img" width={1157} height={445} />
        </div>
      </section>

      <section className="seventh-product-section text-center">
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
    </div>
  );
};

export default ProductsPageWrapper;

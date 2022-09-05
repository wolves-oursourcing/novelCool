import { BackTop, Button, Col, Input, notification, Row } from 'antd';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { InstagramOutlined, SkypeOutlined, TwitterOutlined, WechatOutlined } from '@ant-design/icons';
const Footer: FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (): void => {
    const re = /\S+@\S+\.\S+/;

    if (re.test(email)) {
      setEmail('');
      notification.success({
        message: 'You have been submitted your information successful'
      });
    } else {
      //TODO:
      notification.error({
        message: 'Please enter a valid email'
      });
    }
  };
  const handleChnageEmail = (e: any): void => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="footer">
        <div className="footer-top" />
        <div className="footer-middle">
          <Row>
            <Col xs={24} md={12}>
              <div className="block-left">
                <div className="label">Get the lastes Updates</div>
                <div className="d-flex">
                  <Input
                    value={email}
                    size="large"
                    className="input-email"
                    placeholder="Your email"
                    style={{ width: 200 }}
                    onChange={e => handleChnageEmail(e)}
                  />
                  <Button size="large" className="btn-submit" onClick={handleSubscribe}>
                    Get notified
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="blog-right">
                <Row>
                  <Col xs={24} md={12}>
                    <ul className="label">Site Links</ul>
                    <li className="text">
                      <a className="text" href="/products">
                        Products
                      </a>
                    </li>
                    <li className="text">
                      <a className="text" href="/services">
                        Services
                      </a>
                    </li>

                    <li className="text">
                      <a className="text" href="/success-stories">
                        Success Stories
                      </a>
                    </li>

                    <li className="text">
                      <a className="text" href="/about-us">
                        About Us
                      </a>
                    </li>

                    <li className="text">
                      <a className="text" href="/blog">
                        Blog
                      </a>
                    </li>
                  </Col>
                  <Col xs={24} md={12}>
                    <ul className="label">Support</ul>
                    <li className="text">Contact Us</li>
                    <li className="text">Terms of service</li>

                    <a className="text" href="/privacy-policy">
                      Privacy policy
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <div className="block-left">Sirrista ©. All Rights Reserved</div>
          <div className="block-right">
            <div className="icon">
              <InstagramOutlined />
            </div>
            <div className="icon">
              <TwitterOutlined />
            </div>
            <div className="icon">
              <SkypeOutlined />
            </div>
            <div className="icon">
              <WechatOutlined />
            </div>
          </div>
        </div>
        <BackTop visible={true}></BackTop>
      </div>
    </>
  );
};

export default Footer;

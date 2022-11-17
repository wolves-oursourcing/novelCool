import { CopyrightCircleOutlined } from '@ant-design/icons';
import { BackTop, Col, Row } from 'antd';
import Link from 'next/link';
import React, { FC } from 'react';
const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <Row className="container">
          <Col xs={24} md={12}>
            <div className="d-flex flex-column align-items-center">
              <ul className="ps-0 mb-0 d-flex">
                <li className="d-flex px-4">
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li className="d-flex">
                  <Link href="/">Terms of Use</Link>
                </li>
              </ul>
              <ul className="ps-0 mb-0 d-flex mt-4">
                <li className="d-flex px-4">
                  <Link href="/">Latest Releases</Link>
                </li>
                <li className="d-flex px-4">
                  <Link href="/">Popular Novels</Link>
                </li>
                <li className="d-flex px-4">
                  <Link href="/">New Novels</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={12} className="d-flex justify-content-center align-items-end">
            <div className="copyright">
              <CopyrightCircleOutlined />
              2018 NovelCool.com
            </div>
          </Col>
        </Row>
        <BackTop visible={true}></BackTop>
      </div>
    </>
  );
};

export default Footer;

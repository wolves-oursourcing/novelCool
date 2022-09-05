import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { FC, useRef, useState } from 'react';
import Slider from 'react-slick';
import Slick from 'react-slick';
import Image from 'next/image';
const TAB_LINK_1 = 'TAB_LINK_1';
const TAB_LINK_2 = 'TAB_LINK_2';
const TAB_LINK_3 = 'TAB_LINK_3';

const TabJourneyThirdSection: FC = () => {
  const [tab, setTab] = useState(TAB_LINK_1);
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  };
  const slickRef = useRef<Slick>(null);
  return (
    <div>
      <Row align="middle" gutter={[30, 0]}>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 10, order: 1 }}>
          <Col xs={24} md={24} lg={18}>
            <div className="image-wrapper">
              {
                {
                  [TAB_LINK_1]: (
                    <div>
                      <Slider {...settings} ref={slickRef}>
                        <div className="view-image">
                          <Image src="/img/user-journey/photo_1.png" width={320} height={650} />
                        </div>

                        <div className="view-image">
                          <Image src="/img/user-journey/photo_2.png" width={320} height={650} />
                        </div>
                      </Slider>
                    </div>
                  ),
                  [TAB_LINK_2]: (
                    <div>
                      <Slider {...settings} ref={slickRef}>
                        <div className="view-image">
                          <Image src="/img/user-journey/photo_2.png" width={320} height={650} />
                        </div>

                        <div className="view-image">
                          <Image src="/img/user-journey/photo_1.png" width={320} height={650} />
                        </div>
                      </Slider>
                    </div>
                  ),
                  [TAB_LINK_3]: (
                    <div>
                      <Slider {...settings} ref={slickRef}>
                        <div className="view-image">
                          <Image src="/img/user-journey/photo_3.png" width={320} height={650} />
                        </div>

                        <div className="view-image">
                          <Image src="/img/user-journey/photo_1.png" width={320} height={650} />
                        </div>
                      </Slider>
                    </div>
                  )
                }[tab]
              }
            </div>
          </Col>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 14, order: 2 }}>
          <div className="block-content">
            <div className="title">First time users onboarding</div>
            <div className="description">
              The user journey represent in the carousel here meant to show the best practices from the industry when it
              comes to the onboarding for the first time users using the phone number as the mean of registration.
            </div>
            <Row>
              <Col xs={24} md={24} lg={6}>
                <div className="col-wrapper">
                  <a className={`tab-link ${tab === TAB_LINK_1 && 'active-tab'}`} onClick={() => setTab(TAB_LINK_1)}>
                    <div className="link-name">BukaLapak </div>
                    <div className="icon-arrow">
                      <ArrowRightOutlined />
                    </div>
                  </a>

                  <a className={`tab-link ${tab === TAB_LINK_2 && 'active-tab'}`} onClick={() => setTab(TAB_LINK_2)}>
                    <div className="link-name">Link 2 </div>
                    <div className="icon-arrow">
                      <ArrowRightOutlined />
                    </div>
                  </a>

                  <a className={`tab-link ${tab === TAB_LINK_3 && 'active-tab'}`} onClick={() => setTab(TAB_LINK_3)}>
                    <div className="link-name">Link 3 </div>
                    <div className="icon-arrow">
                      <ArrowRightOutlined />
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TabJourneyThirdSection;

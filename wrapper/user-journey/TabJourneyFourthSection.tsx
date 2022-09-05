import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { FC, useRef, useState } from 'react';
import Slider from 'react-slick';
import Slick from 'react-slick';
import Image from 'next/image';
const TAB_LINK_1 = 'TAB_LINK_1';
const TAB_LINK_2 = 'TAB_LINK_2';
const TAB_LINK_3 = 'TAB_LINK_3';

const TabJourneyFourthSection: FC = () => {
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
        <Col xs={24} md={24} lg={14}>
          <div className="block-content">
            <div className="title">Add to cart using Flash Sale</div>
            <div className="description">
              Since the flash sales can provide great opportunities to sell a large quantity of products in a short
              period of time, we are bringing you the best practices of flash sales from BukaLapak and showing the user
              journey of adding the flash sales products to the cart.
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
        <Col xs={24} md={24} lg={10}>
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
      </Row>
    </div>
  );
};

export default TabJourneyFourthSection;

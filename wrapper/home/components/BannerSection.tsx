import { EyeOutlined } from '@ant-design/icons';
import { Carousel, Col, Divider, Row, Typography } from 'antd';
import React from 'react';
import { Novel } from '../../../services/novel.service';

interface IPropsBannerSection {
  novels?: Novel[];
}
const { Title } = Typography;

const BannerSection = (props: IPropsBannerSection) => {
  const { novels } = props;

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div className="banner-section-wrapper">
        <div className="wrap-banner">
          <div className="banner">
            <div className="banner-image" style={{ backgroundImage: "url('/img/banner_test.jpg')" }}></div>
          </div>
          <Row className="wrap-carousel">
            {novels && novels.length > 0 && (
              <Carousel afterChange={onChange} slidesToShow={4} centerPadding={'20px'} className="w-100">
                {novels.map(novel => (
                  <div className="novel" key={novel.id}>
                    <div className="novel-image">
                      <img src={novel.image} alt="image" />
                      <div className="novel-rate">{novel.rate}</div>
                      <div className="overlay">
                        <Title level={5} className="novel-title">
                          Summary
                        </Title>
                        <Divider className="novel-divider" />
                        <p className="novel-brief">{novel.description}</p>
                        <a href="" className="more-detail">
                          More detail
                        </a>
                      </div>
                    </div>
                    <div className="novel-content">
                      <Title level={5} className="novel-title">
                        {novel.title}
                      </Title>
                      <div className="novel-footer">
                        <Divider className="novel-divider" />
                        <div className="novel-view">
                          <EyeOutlined className="icon" />
                          <span>{novel.view}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </Row>
        </div>
        <Title level={1} className="banner-title">
          Popular
        </Title>
      </div>
    </>
  );
};

export default BannerSection;

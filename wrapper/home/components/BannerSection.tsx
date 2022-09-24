import { EyeOutlined } from '@ant-design/icons';
import { Carousel, Divider, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Novel } from '../../../services/novel.service';

interface IPropsBannerSection {
  novels?: Novel[];
  title?: string;
}
const { Title } = Typography;
const settings = {
  dots: { className: 'custom-dots' },
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};
const BannerSection = (props: IPropsBannerSection) => {
  const { novels, title } = props;
  const [novelHovered, setNovelHovered] = useState<Novel>();
  const router = useRouter();
  useEffect(() => {
    if (novels && novels.length > 0) {
      setNovelHovered(novels[0]);
    }
  }, [novels]);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div className="banner-section-wrapper">
        <div className="wrap-banner">
          <div className="banner">
            <div className="banner-image" style={{ backgroundImage: `url(${novelHovered?.image})` }}></div>
          </div>
          <Row className="wrap-carousel">
            {novels && novels.length > 0 && (
              <Carousel {...settings} afterChange={onChange} className="w-100">
                {novels.map(novel => (
                  <div className="wrap-novel" key={novel.id} onMouseEnter={() => setNovelHovered(novel)}>
                    <div onClick={() => router.push(`/novel/${novel.id}`)} className="novel">
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
                        <Divider className="novel-divider" />
                        <div className="novel-footer">
                          <div className="novel-view">
                            <EyeOutlined className="icon" />
                            <span>{novel.view}</span>
                          </div>
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
          {title ? title : 'Popular'}
        </Title>
      </div>
    </>
  );
};

export default BannerSection;

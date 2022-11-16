import { EyeOutlined } from '@ant-design/icons';
import { Carousel, Divider, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Novel } from '../../../services/novel.service';
import ShowImage from "../../../layout/ShowImage";

interface IPropsBannerSection {
  novels?: Novel[];
  title?: string;
}
const { Title } = Typography;

const BannerSection = (props: IPropsBannerSection) => {
  const [settings, setSettings] = useState<any>({
    dots: { className: 'custom-dots' },
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  const { novels, title } = props;
  const [novelHovered, setNovelHovered] = useState<Novel>();
  const router = useRouter();
  useEffect(() => {
    if (novels && novels.length > 0) {
      setNovelHovered(novels[0]);
    }
  }, [novels]);

  useEffect(() => {
    if (window) {
      console.log('window.hei :>> ', window.outerWidth <= 425);
      if (window.outerWidth <= 425) {
        setSettings({ ...settings, slidesToShow: 2 });
      } else if (window.outerWidth <= 768) {
        console.log('hihi');
        setSettings({ ...settings, slidesToShow: 3 });
      }
    }
  }, [typeof window]);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const gotoDetail = (id?: string) => {
    console.log(id);
    router.push(`/novel/${id}`)
  }

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
                    <div  onClick={() => gotoDetail(novel.uniqueName)} className="novel">
                      <div className="novel-image">
                        <ShowImage image={novel.image} container="images" />
                        <div className="novel-rate">{novel.rate}</div>
                        <div className="overlay">
                          <Title level={5} className="novel-title">
                            Summary
                          </Title>
                          <Divider className="novel-divider" />
                          <p className="novel-brief">{novel.description}</p>
                          <a  onClick={() => gotoDetail(novel.uniqueName)} className="more-detail">
                            More detail
                          </a>
                        </div>
                      </div>
                      <div className="novel-content">
                        <Title level={5} className="novel-title">
                          {novel.name}
                        </Title>
                        <Divider className="novel-divider" />
                        <div className="novel-footer">
                          <div className="novel-view">
                            <EyeOutlined className="icon" />
                            <span>{novel.views}</span>
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

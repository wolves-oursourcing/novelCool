import { Modal } from 'antd';
import React, { FC, useRef } from 'react';
import Slider from 'react-slick';
import Slick from 'react-slick';
import Image from 'next/image';
const ViewFlowModal: FC<{ open: boolean; toggle: any }> = ({ open, toggle }) => {
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
      <Modal
        width={929}
        className="view-flow-modal"
        footer={null}
        closable={false}
        visible={open}
        onOk={toggle}
        onCancel={toggle}
      >
        <div>
          <Slider {...settings} ref={slickRef}>
            <div className="view-wrapper">
              <div className="view-title">Remmitance - user flow</div>
              <div className="view-image">
                <Image src="/img/flow_1.png" width={727} height={343} />
              </div>
            </div>
            <div className="view-wrapper">
              <div className="view-title">KYC onboarding - user flow</div>
              <div className="view-image">
                <Image src="/img/flow_2.png" width={727} height={343} />
              </div>
            </div>
          </Slider>
        </div>
      </Modal>
    </div>
  );
};

export default ViewFlowModal;

import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import Image from 'next/image';
import GetInTouchComponent from '../get-in-touch';
import { ArrowRightOutlined } from '@ant-design/icons';
import { viewDetail } from './modal/ViewDetailModal';
import { URL_CONTACT } from '../../utilities/URL';
import { useRouter } from 'next/router';
import ViewFlowModal from './modal/ViewFlowModal';
const SuccessStoriesPageWrapper = () => {
  const router = useRouter();
  const [openViewFlowModal, setOpenViewFlowModal] = useState(false);
  return (
    <div className="success-stories">
      <section className="first-success-section">
        <Row>
          <Col xs={24} md={24} lg={14} xl={12}>
            <div className="block-top">
              <div className="heading">Success Stories</div>
              <div className="title">Innovation in execution</div>
              <div className="sub-title">
                Saved 20% of the budgeted costs and cash outflow Identify and map the time to on-boarding of skill sets
                with the stages of business proposition, launch of product and generation of revenues. These skill sets
                are across different functions of product, project management, technology, design, operations, finance
                and business development. Innovation in models of recruiting talent. Earned revenue from new business
                line, 10 months earlier than the original estimate.
              </div>
            </div>
          </Col>
        </Row>
        <div className="image-wrapper">
          <Image src="/img/success-stories/success_1.png" width={1440} height={680} />
          <div className="box">
            <div className="box-description">
              Streamline onboarding of talent and thin performance in 3 different models, win customers and earn revenue
              10 months earlier than budget.
            </div>
          </div>
        </div>
      </section>
      <section className="second-success-section">
        <div className="title">We help re-invent businesses</div>
        <Row>
          <Col xs={24} md={20} lg={16} xl={12}>
            <div>
              <div className="sub-title">
                We helped pivot existing call center based business model . Infused technology by launching Mobile
                Application to customers at the front end , onboarded technology teams in remote first environment,
                deployed infrastructure in the cloud and an agile tool kit for building, testing and launching product
                on Mobile Application.
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="third-success-section">
        <div className="wrapper">
          <div className="title">New Venture- Assembly Line In A Factory Approach</div>
          <div className="d-flex card-wrapper">
            <div className="card-item">
              <div className="card-text">
                Issued prepaid cards and deployed wallet on a Mobile Applications, some less than 20 MB in size{' '}
              </div>
            </div>
            <div className="card-item">
              <div className="card-text d-flex flex-column">
                <div>
                  Strategy alignment between founders.
                  <br />
                  Want to know more?
                </div>
                <Button onClick={() => router.push(URL_CONTACT)} className="d-flex align-items-center btn-learn-more">
                  Get in touch
                  <span className="icon-arrow">
                    <ArrowRightOutlined />
                  </span>
                </Button>
              </div>
            </div>
            <div className="card-item">
              <div className="card-text">Developed business model</div>
            </div>
            <div className="card-item">
              <div className="card-text d-flex flex-column">
                <div>Identified use cases</div>
                <Button
                  onClick={() => setOpenViewFlowModal(!openViewFlowModal)}
                  className="d-flex align-items-center btn-learn-more"
                >
                  Learn more
                  <span className="icon-arrow">
                    <ArrowRightOutlined />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="d-flex card-wrapper">
            <div className="card-item">
              <div className="card-text">Connected business logic to API with a banking-as-a-service product </div>
            </div>
            <div className="card-item">
              <div className="card-text d-flex flex-column">
                <div>
                  Approval of the origination program product and controls by payment networks like Visa and Mastercard
                </div>
                <div className="d-flex align-items-center btn-learn-more">
                  <Image src="/img/visa.png" width={73} height={32} />
                  <Image src="/img/mastercard.png" width={73} height={32} />
                </div>
              </div>
            </div>

            <div className="card-item">
              <div className="card-text d-flex flex-column">
                <div>Developed architecture & design tech stack</div>
                <Button
                  onClick={() => {
                    viewDetail({
                      text: 'Develop and Test APIs, commit codes, staging and production servers in cloud, simulations, UX design, relational database design, analytics,  communication channel between developers and product teams, website and mobile app development, proprietary and contextual integration.'
                    });
                  }}
                  className="d-flex align-items-center btn-learn-more"
                >
                  Learn more
                  <span className="icon-arrow">
                    <ArrowRightOutlined />
                  </span>
                </Button>
              </div>
            </div>
            <div className="card-item">
              <div className="card-text d-flex flex-column">
                <div> Adherence to license requirements in Asia and Europe </div>
                <Button onClick={() => router.push(URL_CONTACT)} className="d-flex align-items-center btn-learn-more">
                  Get in touch
                  <span className="icon-arrow">
                    <ArrowRightOutlined />
                  </span>
                </Button>
              </div>
            </div>
            <div className="card-item">
              <div className="card-text d-flex flex-column">
                <div>Customer journey on a mobile app </div>
                <Button
                  onClick={() => {
                    viewDetail({
                      text: 'From scratch, in Phase 1 , integrated with more than 100 APIs and developed more than 30 APIs in less than 4 months for customer experience in physical stores, internet banking and Mobile Application'
                    });
                  }}
                  className="d-flex align-items-center btn-learn-more"
                >
                  Learn more{' '}
                  <span className="icon-arrow">
                    <ArrowRightOutlined />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-success-section">
        <Col xs={24} md={24} lg={20} xl={16}>
          <div className="title">
            Forged partnership and created ecosystem - Lesser time, lower costs and lower risks
          </div>
        </Col>
        <div className="d-flex card-wrapper">
          <div className="card-item">Cloud storage, network and computing</div>
          <div className="card-item">Payment gateway services including pay-in and pay-out capabilities</div>
          <div className="card-item">Money movement and foreign currency conversion platform</div>
          <div className="card-item">
            Local partner in Europe with right capital structure and scope of the entity to generate licensed revenue
            stream{' '}
          </div>
          <div className="card-item">Productivity Software</div>
        </div>
      </section>
      <GetInTouchComponent />
      {openViewFlowModal && (
        <ViewFlowModal open={openViewFlowModal} toggle={() => setOpenViewFlowModal(!openViewFlowModal)} />
      )}
    </div>
  );
};

export default SuccessStoriesPageWrapper;

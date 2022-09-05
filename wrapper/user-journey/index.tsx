import { Col, Row } from 'antd';
import React from 'react';
import GetInTouchComponent from '../get-in-touch';
import TabJourneyFourthSection from './TabJourneyFourthSection';
import TabJourneySecondSection from './TabJourneySecondSection';
import TabJourneyThirdSection from './TabJourneyThirdSection';

const UserJourneyWrapper = () => {
  return (
    <div className="user-journey-wrapper">
      <section className="first-journey-section">
        <Row>
          <Col xs={24} md={24} lg={14} xl={12}>
            <div className="heading">USER JOURNEY</div>
            <div className="title">Practices in different sectors and geographies</div>
          </Col>
        </Row>
      </section>
      <section className="second-journey-section">
        <TabJourneySecondSection />
      </section>
      <section className="third-journey-section">
        <TabJourneyThirdSection />
      </section>
      <section className="fourth-journey-section">
        <TabJourneyFourthSection />
      </section>
      <GetInTouchComponent />
    </div>
  );
};

export default UserJourneyWrapper;

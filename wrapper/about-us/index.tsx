import { Col, Row } from 'antd';
import React from 'react';
import Image from 'next/image';
import GetInTouchComponent from '../get-in-touch';
const AboutUsPageWrapper = () => {
  return (
    <div className="about-us">
      <section className="first-about-section">
        <Row align="middle" gutter={[{ xs: 0, md: 0, lg: 0, xl: 140 }, 0]}>
          <Col xs={24} md={24} lg={24} xl={13}>
            <div className="heading">ABOUT US</div>
            <div className="title">
              We recognize the value of physical presence in any digital journey while developing framework for
              distribution of products
            </div>
            <div className="sub-title">
              Working with founders of start ups in different stages and venture arms of corporates, we structure close
              and long lasting collaboration integrating data, product, design and strategy while understanding
              regulatory framework.
            </div>
          </Col>
          <Col xs={0} md={0} lg={0} xl={9}>
            <div className="image-wrapper">
              <Image src="/img/about-us/about_1.png" width={303} height={645} />
            </div>
          </Col>
        </Row>
      </section>
      <section className="second-about-section">
        <div className="heading">Our team</div>
        <Row justify="center" gutter={[{ xs: 0, md: 0, lg: 45, xl: 90 }, 24]}>
          <Col xs={24} md={24} lg={8}>
            <div className="content">
              Our cross-functional team with skill sets of designers, developers, architects, product, business
              development has worked in different stages of start-ups that have scaled their business models and
              technology stack in different industries including money lending, payments and insurance.
            </div>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="content">
              Our team members have been engaged with regulators, applying for licenses and deploying new business
              models approved by regulatory bodies.
              <br />
              We have launched products in issuing and acquiring side of online payments, digital lending and life and
              non-life insurance.
            </div>
          </Col>
        </Row>
      </section>
      <section className="third-about-section">
        <Row>
          <Col xs={24} md={24} lg={14} xl={12}>
            <div className="block-top">
              <div className="heading">OUR PURPOSE</div>
              <div className="title">We unleash potential by combining corporate expertise with startup mindset</div>
            </div>
          </Col>
        </Row>
        <div className="image-wrapper">
          <Image src="/img/about-us/about_2.png" width={1440} height={391} />
          <div className="box">
            <div className="box-title">
              We like to demistify buzz terminology and focus on what the customers and stakeholders need.
            </div>
            <div className="box-description">
              We have enabled expansion into new markets leveraging partnership with innovative commercial frameworks
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-about-section">
        <div className="heading">Our team</div>
        <Row>
          <Col xs={24} md={24} lg={20} xl={16}>
            <div className="card-wrapper card-one">
              <div className="avatar-wrapper">
                <Image src="/img/about-us/avatar_1.png" width={259} height={275} />
              </div>
              <div className="content ml-63">
                <div className="name">Sirish</div>
                <div className="position">
                  <strong>Director</strong>
                </div>
                <div className="description">
                  <ul>
                    <li>Product and Commercial</li>
                    <li>Online Payments , Unsecured lending to consumers and small businesses and Insurance </li>
                    <li>
                      Formerly Co-Founder, Payments Tech, Ex-CFO, PayPal, ASEAN and India, Board of Commissioners for
                      licensed lending entity , Head of Business Growth for Lending and Insurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[{ xs: 0, md: 0, lg: 135 }, 0]} className="mt-110">
          <Col xs={24} md={24} lg={8}>
            <div className="card-wrapper">
              <div className="avatar-wrapper">
                <Image src="/img/about-us/avatar_2.png" width={259} height={275} />
              </div>
              <div className="content">
                {/* <div className="name">Bharani</div> */}
                <ul>
                  <li>Project Manager</li>
                  <li> Network, Storage on Cloud, Security, Productivity Software</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="card-wrapper">
              <div className="avatar-wrapper">
                <Image src="/img/about-us/avatar_3.png" width={259} height={275} />
              </div>
              <div className="content">
                {/* <div className="name">Hudson</div> */}
                <ul>
                  <li>Back end development</li>
                  <li>
                    ReactJS, Ruby On Rails, API design, NodeJS, Microservices, Angular, Docker, AWS (EC2, S3, Fargate)
                    PostgreSQL
                  </li>
                  <li>Ride hailing, SaaS platform</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[{ xs: 0, md: 0, lg: 135 }, 20]} className="mt-110">
          <Col xs={24} md={24} lg={8}>
            <div className="card-wrapper">
              <div className="avatar-wrapper">
                <Image src="/img/about-us/avatar_4.png" width={259} height={275} />
              </div>
              <div className="content">
                {/* <div className="name">Om</div> */}
                <ul>
                  <li>Front End Development - IOS</li>
                  <li>IOS Software Quality Assurance, Swift, C, Rest API, X Code, VIPER Healthcare,</li>
                  <li>Price Comparison, Integration with payment methods</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="card-wrapper">
              <div className="avatar-wrapper">
                <Image src="/img/about-us/avatar_5.png" width={259} height={275} />
              </div>
              <div className="content">
                {/* <div className="name">Asawari</div> */}
                {/* <div className="position">Front end developer</div>
                <div className="description">
                  Android Kotlin, Java, MVVP, MVM Location tracking, Money movement,Insurance broking
                </div> */}

                <ul>
                  <li>Front End Development - Android Android Kotlin, Java, MVVP, MVM Location tracking</li>
                  <li>Money movement, Insurance broking</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="card-wrapper">
              <div className="avatar-wrapper">
                <Image src="/img/about-us/avatar_6.png" width={259} height={275} />
              </div>
              <div className="content">
                {/* <div className="name">Anida</div> */}

                <ul>
                  <li>Design in Website, Mobile APP and Social Media</li>
                  <li>HTML5, CSS3, Bootstrap, R Programming Tableau, Adobe illustrator, UI design and prototyping</li>
                  <li> Wealth, Insurance</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <GetInTouchComponent />
    </div>
  );
};

export default AboutUsPageWrapper;

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, notification, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { FC } from 'react';
import API from '../../../API';

const ContactSection: FC<{ scrollRef: any }> = ({ scrollRef }) => {
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log(values);

    API.post('/customer', values, {})
      .then(response => {
        if (response.status == 204) {
        }
      })
      .catch(function () {})
      .then(function () {});

    notification.success({
      message: 'You have been submitted your information successful'
    });
    form.resetFields();
  };
  return (
    <div className="contact-section" id="contact">
      <div ref={scrollRef}></div>
      <div className="contact-wrapper">
        <Row>
          <Col xs={24} md={24} lg={18}>
            <div className="heading">GET IN TOUCH</div>
            <div className="title">Let's talk about what we can make and build together</div>
            <div className="sub-title">Fill out your details and we will reach out to you.</div>
          </Col>
        </Row>
        <div>
          <Row justify="end">
            <Col xs={24} md={24} lg={10}>
              <Form form={form} onFinish={onFinish}>
                <Form.Item name="name">
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Name</label>
                  </div>
                </Form.Item>
                <Form.Item name="country">
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Country</label>
                  </div>
                </Form.Item>
                <Form.Item name="company">
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Company</label>
                  </div>
                </Form.Item>
                <Form.Item name="job_title">
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Job title</label>
                  </div>
                </Form.Item>
                <Form.Item name="email">
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Work email</label>
                  </div>
                </Form.Item>
                <Form.Item name="phone_number">
                  <div className="group">
                    <input type="text" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Phone number</label>
                  </div>
                </Form.Item>
                <Form.Item name="message">
                  <div className="group">
                    <textarea rows={5} required></textarea>
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Message</label>
                  </div>
                </Form.Item>
                <Button size="large" className="btn-submit" htmlType="submit">
                  <ArrowRightOutlined /> Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

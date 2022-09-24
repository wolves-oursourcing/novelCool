import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';

const { Title, Text } = Typography;
const ForgotPasswordWrapper = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <Title level={3} className="auth-form-title">
          Find your password
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="auth-input"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="btn-common primary btn-submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item className="text-center mb-0 auth-form-action">
            <a href={'/auth/login'}>Cancel</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordWrapper;

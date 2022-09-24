import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const { Title, Text } = Typography;
const RegisterWrapper = () => {
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
          Register
        </Title>
        <Form
          name="basic"
          initialValues={{ privacy: true }}
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
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password confirm!' }]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password confirm"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                }
              })
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item name="name" rules={[{ required: false }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
              className="auth-input"
            />
          </Form.Item>
          <Form.Item name="privacy" valuePropName="checked" className="remember">
            <Checkbox> Privacy agreement</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="btn-common primary btn-submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item className="text-center mb-0 auth-form-action">
            <a href={'/auth/login'}>Already have account? Log in</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterWrapper;

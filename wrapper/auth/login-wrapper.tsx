import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
import {getUserInfo, login} from "../../services/user.service";
import {Config} from "../../api/configs";
import Router from "next/router";


const { Title, Text } = Typography;
const LoginWrapper = () => {
  const onFinish = async (data: any) => {
    console.log('Success:', data);
    const response = await login(data);
    const accessToken = response.access_token ? response.access_token : "";
    localStorage.setItem(Config.TOKEN, accessToken);
    const userInfo = await getUserInfo(response.userId ? response.userId : 0);
    localStorage.setItem(Config.USER, JSON.stringify(userInfo));
    Router.push("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <Title level={3} className="auth-form-title">
          Login
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

          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" className="remember">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="btn-common primary btn-submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item className="text-center mb-0 auth-form-action">
            <a href={'/auth/register'}>Register</a>
          </Form.Item>
          <Form.Item className="text-center  auth-form-action">
            <a href={'/auth/forgotPassword'}>Forgot your password?</a>
          </Form.Item>
          <Divider plain className="auth-form-divider">
            Sign with
          </Divider>
        </Form>
      </div>
    </div>
  );
};

export default LoginWrapper;

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
import { getUserInfo, login, loginSocial } from '../../services/user.service';
import { Config } from '../../api/configs';
import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { ArrowLeft, Facebook, Mail } from 'react-feather';

const { Title, Text } = Typography;
const LoginWrapper = () => {
  const onFinish = async (data: any) => {
    console.log('Success:', data);
    const response = await login(data);
    const accessToken = response.access_token ? response.access_token : '';
    localStorage.setItem(Config.TOKEN, accessToken);
    const userInfo = await getUserInfo(response.userId ? response.userId : 0);
    localStorage.setItem(Config.USER, JSON.stringify(userInfo));
    Router.push('/');
  };

  const responseFacebook = async (response: any) => {
    try {
      const newRes = {
        email: response.email,
        first_name: response.first_name,
        last_name: response.last_name,
        id: response.id,
        provider: 'facebook'
      };
      console.log(response);
      const res = await loginSocial(newRes);
      const accessToken = res.access_token ? res.access_token : '';
      localStorage.setItem(Config.TOKEN, accessToken);
      const userInfo = await getUserInfo(res.userId ? res.userId : 0);
      localStorage.setItem(Config.USER, JSON.stringify(userInfo));
      Router.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  const responseGoogle = async (response: any) => {
    const newRes = {
      email: response.profileObj.email,
      first_name: response.profileObj.familyName,
      last_name: response.profileObj.givenName,
      id: response.googleId,
      provider: 'google'
    };
    console.log(response);
    const res = await loginSocial(newRes);
    const accessToken = res.access_token ? res.access_token : '';
    localStorage.setItem(Config.TOKEN, accessToken);
    const userInfo = await getUserInfo(res.userId ? res.userId : 0);
    localStorage.setItem(Config.USER, JSON.stringify(userInfo));
    Router.push('/');
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
          <div className="social">
            <FacebookLogin
              appId={Config.FACEBOOK_APP_ID}
              fields="name,email,picture,first_name,last_name,gender"
              callback={responseFacebook}
              cssClass="btn-social btn-login-fb"
              textButton=""
              icon={<Facebook className="icon-fb" />}
            />
            <GoogleLogin
              className="btn-social btn-login-gg"
              clientId={Config.GOOGLE_CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              icon={false}
              cookiePolicy={'single_host_origin'}
            >
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="icon-gg">
                <g fill="#000" fill-rule="evenodd">
                  <path
                    d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                    fill="#34A853"
                  ></path>
                  <path fill="none" d="M0 0h18v18H0z"></path>
                </g>
              </svg>
            </GoogleLogin>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginWrapper;

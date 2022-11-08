import { KeyOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import {useEffect} from "react";
import {IUserInfo} from "../../services/user.service";

export interface IPropsSettingComponent {
  user?: IUserInfo;
}

const SettingComponent = (props: IPropsSettingComponent) => {
  const { user } = props;
  const { Title } = Typography;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...user
    })
  }, [user])
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = async (data: any) => {
    console.log('data', data);
  };
  return (
    <div className="setting-component">
      <Title level={2}>Setting</Title>
      <Form
          form={form}
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          label="Email"
          className="control"
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" className="auth-input" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          label="Username"
          className="control"
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User name" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          label="Password"
          className="control"
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: 'Please input your password!' }]}
          label="New Password"
          className="control"
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="New Password"
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          label="Confirm new Password"
          className="control"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your new password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              }
            })
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" placeholder="Confirm new Password" />}
          />
        </Form.Item>

        <div className="wrap-btn-submit">
          <Button htmlType="submit" className="btn-common primary btn-submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SettingComponent;

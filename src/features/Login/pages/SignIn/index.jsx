import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './signin.css';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const auth = useSelector(state => state.auth);
  console.log(auth);

  return (
    <Form
      initialValues={
        {
          username: "",
          password: "",
          remember: true
        }
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
      </Form.Item>
  
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        
        <Link to="/auth/register" className="link-register"> Register </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>Sign In</Button>
      </Form.Item>

    </Form>
  );
}

export default SignIn;
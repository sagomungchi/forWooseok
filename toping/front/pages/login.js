import React, { Component } from 'react';
import { login } from '../pages/util/APIUtils';
import Link from 'next/link';
import { ACCESS_TOKEN } from '../pages/constants/index';

import { Form, Input, Button, Icon, notification } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  render() {
    const AntWrappedLoginForm = Form.create()(LoginForm);
    return (
      <div className="login-container">
        <h1 className="page-title" style={{marginLeft:"40%"}}>Login</h1>
        <div className="login-content">
          <AntWrappedLoginForm onLogin={this.props.onLogin} />
        </div>
      </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const loginRequest = Object.assign({}, values);
        login(loginRequest)
          .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            this.props.onLogin();
          })
          .catch(error => {
            if (error.status === 401) {
              notification.error({
                message: 'Polling App',
                description:
                  'Your Username or Password is incorrect. Please try again!',
              });
            } else {
              notification.error({
                message: 'Polling App',
                description:
                  error.message ||
                  'Sorry! Something went wrong. Please try again!',
              });
            }
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{marginLeft:"40%" , marginRight:"40%"}}>
        <FormItem>
          {getFieldDecorator('userNameOrEmail', {
            rules: [
              {
                required: true,
                message: 'Please input your username or email!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" />}
              size="large"
              name="userNameOrEmail"
              placeholder="Username or Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" />}
              size="large"
              name="password"
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="login-form-button">
            Login
          </Button>
          Or <Link to="/signup">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

export default Login;

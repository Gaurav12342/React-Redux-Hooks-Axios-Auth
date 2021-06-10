import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { routes } from "../../routes/constant";

const Login = (props) => {
  const { onSubmit, getLoginResponse } = props;

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    let obj = {
      email: values.email,
      password: values.password,
    };
    onSubmit(obj);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h1>
            <center>Login Form</center>
          </h1>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please input proper email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                // loading={getLoginResponse.authReducer.loading ? true : false}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
              <Button
                type="link"
                htmlType="button"
                onClick={() => {
                  props.history.push(routes.registration.path);
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Login);

import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { routes } from "../../routes/constant";
import { convertLegacyProps } from "antd/lib/button/button";

const Registration = (props) => {
  const { onSubmit, getRegisterResponse } = props;
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
      name: values.name,
    };
    onSubmit(obj);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h1>
            <center>Registatin</center>
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
              label="Username"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

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
                Create
              </Button>
              <Button
                htmlType="button"
                onClick={() => {
                  props.history.push(routes.login.path);
                }}
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(Registration);

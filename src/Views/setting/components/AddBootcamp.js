import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { createBootcap } from "../../../AppRedux/Action/bootcamp/index";
const { TextArea } = Input;

const AddBootcamp = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    let obj = {
      name: values.name,
      description: values.description,
      website: values.website,
      phone: values.phone,
      email: values.email,
      address: values.address,
      role: "admin",
      careers: [],
      housing: true,
      jobAssistance: true,
      jobGuarantee: true,
      acceptGi: true,
    };
    dispatch(createBootcap(obj));
    // console.log("Success:", obj);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h2>Add Bootcamp</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input bootcampt name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please enter the description!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Website"
              name="website"
              rules={[
                {
                  required: true,
                  message: "Please input name of website!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter the phone number!",
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
                  message: "Please enter the email!",
                },
                {
                  type: "email",
                  message: "Please enter the valid email address.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter the address!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(AddBootcamp);

import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const { TextArea } = Input;

function Contact() {
  return (
    <div id="contact" className="block blockContact">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>Get in Touch</h1>
          <p>
            Portable Document Format (PDF) is a file format that has captured
            all the elements of a printed document as an electronic image that
            users can view, navigate, print or forward to someone else. However,
            PDF files are more than images of documents.
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Email address" />
          </Form.Item>

          <Form.Item name="telephone">
            <Input placeholder="Telephone" />
          </Form.Item>

          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;

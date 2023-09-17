import React from "react";

import { List, Card, Button } from "antd";

const data = [
  {
    title: "Basic",
    content: [
      {
        price: "£29.99",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Premium",
    content: [
      {
        price: "£59.99",
        space: "5 GB of space",
        user: "5 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Enterprise",
    content: [
      {
        price: "£99.99",
        space: "Unlimited space",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
];

const Package = () => {
  return (
    <div id="package" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>Choose a Plan to Fit Your Needs</h1>
          <p>
            Portable Document Format (PDF) is a file format that has captured
            all the elements of a printed document as an electronic image that
            users can view, navigate, print or forward to someone else. However,
            PDF files are more than images of documents.
          </p>
        </div>
        <List
          grid={{ gutter: 16, column: 3, sm: 1, xs: 1 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large">
                  <i className="fab fa-telegram-plane"></i>Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Package;

import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

const FAQ = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>Frequently Asked Questions</h1>
          <p>
            Portable Document Format (PDF) is a file format that has captured
            all the elements of a printed document as an electronic image that
            users can view, navigate, print or forward to someone else. However,
            PDF files are more than images of documents.
          </p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1">
            <p>Collapse Content 1</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>Collapse Content 2</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>Collapse Content 3</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want Quick Support?</h3>
          <p>
            Portable Document Format (PDF) is a file format that has captured
            all the elements of a printed document as an electronic image that
            users can view, navigate, print or forward to someone else. However,
            PDF files are more than images of documents.
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>Email Your Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

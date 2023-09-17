import React from "react";
import { Row, Col } from "antd";

import image1 from "../../assets/images/advanced-option.jpg";
import image2 from "../../assets/images/modern-design.jpg";
import image3 from "../../assets/images/unlimited-features.jpg";
import image4 from "../../assets/images/clean-design.jpg";
import image5 from "../../assets/images/easy-customise.jpg";
import image6 from "../../assets/images/great-support.jpg";

import { Card } from "antd";
const { Meta } = Card;

function Feature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Portable Document Format (PDF) is a file format that has captured
            all the elements of a printed document as an electronic image that
            users can view, navigate, print or forward to someone else. However,
            PDF files are more than images of documents.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<img alt="example" src={image1} />}>
              <Meta title="clean-design" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<img alt="example" src={image2} />}>
              <Meta title="modern-design" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<img alt="example" src={image3} />}>
              <Meta title="great-support" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<img alt="example" src={image4} />}>
              <Meta title="easy-customise" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<img alt="example" src={image5} />}>
              <Meta title="unlimited-features" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<img alt="example" src={image6} />}>
              <Meta title="advanced-option" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Feature;

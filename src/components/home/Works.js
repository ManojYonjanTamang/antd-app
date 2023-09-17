import React from "react";

import { Modal, Button } from "antd";

class Works extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How It Works</h2>
            <p>
              Portable Document Format (PDF) is a file format that has captured
              all the elements of a printed document as an electronic image that
              users can view, navigate, print or forward to someone else.
              However, PDF files are more than images of documents.
            </p>
          </div>

          <div className="contentHolder">
            <Button onClick={this.showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>

          <Modal
            title="Woocommerce Tutorial"
            open={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <iframe
              title="Woocommerce Tutorial"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}
export default Works;

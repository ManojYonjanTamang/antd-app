import React from "react";
import { FloatButton } from "antd";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#hero">Tech</a>
        </div>
        <ul className="socials">
          <li>
            <a href="#facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright © 2020 Tech</div>
        {/* <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop> */}

        <FloatButton.BackTop />
      </div>
    </div>
  );
}

export default AppFooter;

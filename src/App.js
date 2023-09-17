import React from "react";
import DropDown from "./components/randomComponents/DropDown";
import AppDatePicker from "./components/randomComponents/AppDatePicker";
import Ratings from "./components/randomComponents/Ratings";
import SelectSearch from "./components/randomComponents/SelectSearch";
import AppSlider from "./components/randomComponents/AppSlider";
import AppSwitch from "./components/randomComponents/AppSwitch";
import AppCascader from "./components/randomComponents/AppCascader";
import AppCheckbox from "./components/randomComponents/AppCheckbox";

import { Divider } from "antd";
import AppColorPicker from "./components/randomComponents/AppColorPicker";
import AppDescriptions from "./components/randomComponents/AppDescriptions";
import PreviewImage from "./components/randomComponents/PreviewImage";
import AppListData from "./components/randomComponents/AppListData";

// import "./App.css";
// import AppHeader from "./components/common/AppHeader";
// import AppHome from "./views/home";
// import { Layout } from "antd";
// import AppFooter from "./components/common/AppFooter";
// const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      {/* <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout> */}

      <div style={{ margin: "0 auto", maxWidth: "1200px", padding: "0 15px" }}>
        {/* <div>
          <DropDown />
        </div>
        <div>
          <AppDatePicker />
        </div>
        <div>
          <Ratings />
        </div>
        <div>
          <SelectSearch />
        </div> */}
        <div>
          <AppSlider />
        </div>
        {/* <div>
          <AppSwitch />
        </div>
        <Divider />
        <div>
          <AppCascader />
        </div>
        <Divider />
        <div>
          <AppCheckbox />
        </div>
        <Divider />
        <div>
          <AppColorPicker />
        </div>
        <Divider />
        <div>
          <AppDescriptions />
        </div>
        <Divider />
        <div>
          <PreviewImage />
        </div>
        <Divider />
        <div>
          <AppListData />
        </div> */}
      </div>
    </>
  );
}

export default App;

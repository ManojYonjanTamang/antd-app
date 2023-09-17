import React from "react";
import { Descriptions } from "antd";
import AppDescriptionsData from "./AppDescriptionsData";

const AppDescriptions = () => {
  return (
    <>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">
          {AppDescriptionsData[1].name}
        </Descriptions.Item>
        <Descriptions.Item label="Contact">
          {AppDescriptionsData[1].contact}
        </Descriptions.Item>
        <Descriptions.Item label="Address">
          {AppDescriptionsData[1].address}
        </Descriptions.Item>
        <Descriptions.Item label="Remark">
          {AppDescriptionsData[1].id}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default AppDescriptions;

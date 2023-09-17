import React from "react";
import { Select, Space } from "antd";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`I am from ${value}`);
};

// const items = [
//   {
//     key: "China",
//     Message: "Hi! I'm from China",
//   },
//   {
//     key: "USA",
//     Message: "Hi! I'm from USA",
//   },
//   {
//     key: "Japan",
//     Message: "Hi! I'm from Japan",
//   },
//   {
//     key: "Korea",
//     Message: "Hi! I'm from Korea",
//   },
// ];

const showChina = () => {
  console.log("Hi! I'm from China");
};
const showUSA = () => {
  console.log("Hi! I'm from USA");
};
const showJapan = () => {
  console.log("Hi! I'm from Japan");
};
const showKorea = () => {
  console.log("Hi! I'm from Korea");
};

const SelectSearch = () => {
  return (
    <>
      <Select
        mode="single"
        style={{
          width: "100%",
        }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China" onClick={showChina}>
          <Space>
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China
          </Space>
        </Option>
        <Option value="usa" label="USA" onClick={showUSA}>
          <Space>
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA
          </Space>
        </Option>
        <Option value="japan" label="Japan" onClick={showJapan}>
          <Space>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan
          </Space>
        </Option>
        <Option value="korea" label="Korea" onClick={showKorea}>
          <Space>
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea
          </Space>
        </Option>
      </Select>
    </>
  );
};

export default SelectSearch;

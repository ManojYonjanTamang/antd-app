import React, { useState } from "react";

import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["ReactJS", "HTML", "CSS", "JavaScript"];
const defaultCheckedList = ["ReactJS", "CSS"];

const AppCheckbox = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        <h1>Check all</h1>
      </Checkbox>
      <br />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};

export default AppCheckbox;

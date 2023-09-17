import React, { useState } from "react";
import { Rate } from "antd";

const Ratings = () => {
  const [value, setValue] = useState();
  const showValue = (rate) => {
    setValue(rate);
  };

  return (
    <div>
      <Rate allowHalf defaultValue={0} onChange={showValue} />
      {value}
    </div>
  );
};
export default Ratings;

import React, { useState } from "react";

import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const AppDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Space direction="vertical" size={12}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          cellRender={(current) => {
            const style = {};
            if (current.date() === 1) {
              style.border = "1px solid #1677ff";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <RangePicker
          value={selectedDate}
          onChange={handleDateChange}
          cellRender={(current) => {
            const style = {};
            if (current.date() === 1) {
              style.border = "1px solid #1677ff";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </Space>
      {selectedDate && (
        <div>Selected Date: {selectedDate.format("YYYY-MM-DD")}</div>
      )}
    </>
  );
};

export default AppDatePicker;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, List } from "antd";
import { Popover } from "antd";
import "./AppListData.css";

const AppListData = () => {
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    setItems(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Popover content={item.description} title={item.title}>
              <Card title={item.title} className="card">
                <img
                  src={item.image}
                  width="100%"
                  height="300rem"
                  padding="0.2rem"
                  objectFit="scale-down"
                  alt="myimage"
                />
              </Card>
            </Popover>
          </List.Item>
        )}
      />
    </>
  );
};

export default AppListData;

import React, { useState } from "react";
import { Slider } from "antd";
import AppSliderProducts from "./AppSliderProducts";

const AppSlider = () => {
  const [slideValue, setSlideValue] = useState(100);

  const getSlidedValue = (e) => {
    setSlideValue(e);
  };

  const filteredProducts = AppSliderProducts.filter(
    (product) => product.price <= slideValue
  );

  return (
    <>
      <Slider
        defaultValue={100}
        tooltip={{
          open: true,
        }}
        onChange={getSlidedValue}
      />
      <ul>
        {filteredProducts.map((product, index) => {
          return (
            <li key={index}>
              <h4>Product: {product.name}</h4>
              <p>Price: ${product.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AppSlider;

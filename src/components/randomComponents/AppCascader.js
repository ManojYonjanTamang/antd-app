import React from "react";
import { Cascader } from "antd";

const options = [
  {
    value: "Women's Fashion",
    label: "Women's Fashion",
    children: [
      {
        value: "Clothing",
        label: "Clothing",
      },
      {
        value: "Traditional Clothing",
        label: "Traditional Clothing",
      },
      {
        value: "Women's Bags",
        label: "Women's Bags",
      },
      {
        value: "Shoes",
        label: "Shoes",
      },
      {
        value: "Accessories",
        label: "Accessories",
      },
      {
        value: "Lingerie, Sleep & Lounge",
        label: "Lingerie, Sleep & Lounge",
      },
      {
        value: "Girl's Fashion",
        label: "Girl's Fashion",
      },
    ],
  },
  {
    value: "Health & Beauty",
    label: "Health & Beauty",
    children: [
      {
        value: "Bath & Body",
        label: "Bath & Body",
        children: [
          {
            value: "Body & Massage Oils",
            label: "Body & Massage Oils",
          },
          {
            value: "Body Moisturizers",
            label: "Body Moisturizers",
          },
        ],
      },
      {
        value: "Beauty Tools",
        label: "Beauty Tools",
        children: [
          {
            value: "Curling Irons & Wands",
            label: "Curling Irons & Wands",
          },
          {
            value: "Hair Dryers",
            label: "Hair Dryers",
          },
        ],
      },
      {
        value: "Fragrances",
        label: "Fragrances",
        children: [
          {
            value: "Women Fragrances",
            label: "Women Fragrances",
          },
          {
            value: "Men Fragrances",
            label: "Men Fragrances",
          },
        ],
      },
      {
        value: "Hair Care",
        label: "Hair Care",
        children: [
          {
            value: "Shampoo",
            label: "Shampoo",
          },
          {
            value: "Conditioner",
            label: "Conditioner",
          },
        ],
      },
      {
        value: "Makeup",
        label: "Makeup",
        children: [
          {
            value: "Foundation",
            label: "Foundation",
          },
          {
            value: "Eyes",
            label: "Eyes",
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};

const AppCascader = () => {
  return (
    <>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Categories"
      />
    </>
  );
};

export default AppCascader;

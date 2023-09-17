import React from "react";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: "Women's Fashion",
    children: [
      {
        key: "1-1",
        label: "Clothing",
      },
      {
        key: "1-2",
        label: "Traditional Clothing",
      },
      {
        key: "1-3",
        label: "Women's Bags",
      },
      {
        key: "1-4",
        label: "Shoes",
      },
      {
        key: "1-5",
        label: "Accessories",
      },
      {
        key: "1-6",
        label: "Lingerie, Sleep & Lounge",
      },
      {
        key: "1-7",
        label: "Girl's Fashion",
      },
    ],
  },
  {
    key: "2",
    label: "Health & Beauty",
    children: [
      {
        key: "2-1",
        label: "Bath & Body",
        children: [
          {
            key: "2-1-1",
            label: "Body & Massage Oils",
          },
          {
            key: "2-1-2",
            label: "Body Moisturizers",
          },
        ],
      },
      {
        key: "2-2",
        label: "Beauty Tools",
        children: [
          {
            key: "2-2-1",
            label: "Curling Irons & Wands",
          },
          {
            key: "2-2-2",
            label: "Hair Dryers",
          },
        ],
      },
      {
        key: "2-3",
        label: "Fragrances",
        children: [
          {
            key: "2-3-1",
            label: "Women Fragrances",
          },
          {
            key: "2-3-2",
            label: "Men Fragrances",
          },
        ],
      },
      {
        key: "2-4",
        label: "Hair Care",
        children: [
          {
            key: "2-4-1",
            label: "Shampoo",
          },
          {
            key: "2-4-2",
            label: "Conditioner",
          },
        ],
      },
      {
        key: "2-5",
        label: "Makeup",
        children: [
          {
            key: "2-5-1",
            label: "Foundation",
          },
          {
            key: "2-5-2",
            label: "Eyes",
          },
        ],
      },
      {
        key: "2-6",
        label: "Men's Care",
      },
      {
        key: "2-7",
        label: "Personal Care",
      },
      {
        key: "2-8",
        label: "Skin Care",
      },
      {
        key: "2-9",
        label: "Food Supplements",
      },
      {
        key: "2-10",
        label: "Medical Suppliers",
      },
    ],
  },
  {
    key: "3",
    label: "Men's Fashion",
    children: [
      {
        key: "3-1",
        label: "Clothing",
      },
      {
        key: "3-2",
        label: "Men's Bags",
      },
      {
        key: "3-3",
        label: "Shoes",
      },
      {
        key: "3-4",
        label: "Accessories",
      },
      {
        key: "3-5",
        label: "Boy's Fashion",
      },
      {
        key: "3-6",
        label: "Men's Underwear",
      },
    ],
  },
  {
    key: "4",
    label: "Watches & Accessories",
    children: [
      {
        key: "4-1",
        label: "Men's Watches",
      },
      {
        key: "4-2",
        label: "Women's Watches",
      },
      {
        key: "4-3",
        label: "Kid's Watches",
      },
      {
        key: "4-4",
        label: "Sunglasses",
      },
      {
        key: "4-5",
        label: "Eyeglasses",
      },
      {
        key: "4-6",
        label: "Jewellery",
      },
    ],
  },
  {
    key: "5",
    label: "Electronic Devices",
  },
  {
    key: "6",
    label: "TV & Home Appliances",
  },
  {
    key: "7",
    label: "Electronic Appliances",
  },
  {
    key: "8",
    label: "Groceries & Pets",
  },
  {
    key: "9",
    label: "Babies & Toys",
  },
  {
    key: "10",
    label: "Home & Lifestyle",
  },
  {
    key: "11",
    label: "Sports & Outdoor",
  },
  {
    key: "12",
    label: "Motors, Tools & DIY",
  },
];

const DropDown = () => {
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Categories
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDown;

import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const LeftMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">รู้จักแสนสิริ</Menu.Item>
      <Menu.Item key="2"> โครงการ </Menu.Item>
      <Menu.Item key="3"> บริการ</Menu.Item>
      <Menu.Item key="4"> ผู้ลงทุนสัมพันธ์</Menu.Item>
      <Menu.Item key="5"> เพื่อชีวิตที่ยั่งยืน</Menu.Item>
      <Menu.Item key="6"> การร่วมทุนทางธุรกิจ</Menu.Item>
    </Menu>
  );
};

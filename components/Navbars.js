import React from "react";
import { Layout, Menu, Breadcrumb, Image, Row } from "antd";

const { Header, Content, Footer } = Layout;

export const Navbars = ({ goingUp }) => {
  return (
    <>
      {!goingUp ? (
        <Row style={{ width: "100%" }}>
          <Header style={{ backgroundColor: "white" }}>
            <div className="logo" />
            <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="0">
                <Image src="https://sansiri-com-frontend.s3.ap-southeast-1.amazonaws.com/assets/img/logo-sansiri-black-th.svg" />
              </Menu.Item>
            </Menu>
          </Header>
        </Row>
      ) : (
        <>
          <Row style={{ width: "100%" }} justify="center">
            <Header style={{ backgroundColor: "white" }}>
              <div className="logo" />
              <Row justify="center">
                <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
                  <Menu.Item key="0">
                    <Image src="https://sansiri-com-frontend.s3.ap-southeast-1.amazonaws.com/assets/img/logo-sansiri-black-th.svg" />
                  </Menu.Item>
                </Menu>
              </Row>
            </Header>
            <Header style={{ backgroundColor: "white" }}>
              <div className="logo" />
              <Row justify="center">
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1">รู้จักแสนสิริ</Menu.Item>
                  <Menu.Item key="2"> โครงการ </Menu.Item>
                  <Menu.Item key="3"> บริการ</Menu.Item>
                  <Menu.Item key="4"> ผู้ลงทุนสัมพันธ์</Menu.Item>
                  <Menu.Item key="5"> เพื่อชีวิตที่ยั่งยืน</Menu.Item>
                  <Menu.Item key="6"> การร่วมทุนทางธุรกิจ</Menu.Item>
                </Menu>
              </Row>
            </Header>
          </Row>
        </>
      )}
    </>
  );
};

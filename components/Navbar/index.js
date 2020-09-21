import React, { Component, useState } from "react";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";
import { Drawer, Button, Image,Row, Col } from "antd";

export const Navbar = () => {
  const [isVisible, setVisible] = useState({ current: "mail", visible: false });

  const showDrawer = () => {
    setVisible({
      visible: true,
    });
  };

  const onClose = () => {
    setVisible({
      visible: false,
    });
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Image src="https://sansiri-com-frontend.s3.ap-southeast-1.amazonaws.com/assets/img/logo-sansiri-black-th.svg" />
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
          <RightMenu />
        </div>
        <Button
          className="barsMenu"
          type="primary"
          onClick={() => showDrawer()}
        >
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="เมนู"
          placement="right"
          closable={false}
          style={{ width: "100%" }}
          bodyStyle={{ width: "100%" }}
          onClose={() => onClose()}
          visible={isVisible.visible}
        >
            <Row justify="center">
          <Col>
            <p>รู้จักแสนสิริ</p>
            <p> โครงการ </p>
            <p> บริการ</p>
            <p> ผู้ลงทุนสัมพันธ์</p>
            <p> เพื่อชีวิตที่ยั่งยืน</p>
            <p> การร่วมทุนทางธุรกิจ</p>
          </Col>
          </Row>
        </Drawer>
      </div>
    </nav>
  );
};

import React from "react";
import { Col, Divider, Layout, Row, Space, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const { Content, Footer } = Layout;
const { Text } = Typography;
export const Footerer = ({ size }) => {
  return (
    <Footer className="footer" style={{ backgroundColor: "black" }}>
      <Col>
        {size.innerWidth > 768 && (
          <Row justify="space-around">
            <Col>
              <Text className="footer-big-text">โปรโมชัน</Text>
              <Col>โครงการพร้อมอยู่</Col>

              <Col>ความคืบหน้าโครงการ</Col>
              <Col>คําแนะนําในการซื้อ</Col>
            </Col>
            <Col>
              <Text className="footer-big-text">โครงการน่าลงทุน</Text>
              <Col>คอนโดทองหล่อ-สุขุมวิท</Col>
              <Col>คอนโดรัชดา-พระราม 9</Col>
              <Col>คอนโดพญาไท-ราชเทวี</Col>
              <Col>บ้านปิ่นเกล้า</Col>
              <Col>บ้านสายไหม-รังสิต-ปทุมธานี</Col>

              <Col>บ้านรามอินทรา-เกษตรนวมินทร์</Col>
            </Col>
            <Col>
              <Text className="footer-big-text"> โครงการแสนสิริ</Text>
              <Col>บ้านเดี่ยว</Col>
              <Col>ทาวน์โฮม</Col>
              <Col>คอนโดมิเนียม</Col>
            </Col>
            <Col>
              <Text className="footer-big-text">แบรนด์บ้านเดี่ยว</Text>
              <Col>บ้านแสนสิริ</Col>
              <Col>นาราสิริ</Col>
              <Col>บุราสิริ</Col>
            </Col>
            <Col>
              <Text className="footer-big-text">แบรนด์ทาวน์โฮม</Text>
              <Col>สิริอเวนิว</Col>
              <Col>ไทเกอร์ เลน</Col>
              <Col>เมททาวน์</Col>
              <Col>วีวิลเลจ</Col>
            </Col>
          </Row>
        )}
        <Row justify="space-around">
          {size.innerWidth > 768 && (
            <>
              <Divider />
              <Col>
                <Text className="footer-big-text">รู้จักแสนสิริ</Text>
                <Col className="footer-big-text"> ผู้ลงทุนสัมพันธ์</Col>
                <Col className="footer-big-text">ข่าวสาร</Col>
              </Col>
              <Col>
                <Text className="footer-big-text">บริการจากแสนสิริ</Text>
                <Col className="footer-big-text">แสนสิริ ไลฟ์สไตล์</Col>
                <Col className="footer-big-text">เพื่อชีวิตที่ยั่งยืน</Col>
              </Col>
              <Col>
                <Text className="footer-big-text">เสนอขายที่ดิน</Text>
                <Col className="footer-big-text">เสนอผู้รับเหมา</Col>
                <Col className="footer-big-text">ร่วมงานกับแสนสิริ</Col>
              </Col>
              <Col span={10}>
                <Col>ติดตามแสนสิริ โซเชียล เน็ตเวิร์ก</Col>
                <Col>
                  เพื่อติดต่อกับเรา และแชร์ความหลงใหลในแบรนด์ผลิตภัณฑ์
                  และบริการของแสนสิริ
                </Col>
              </Col>
            </>
          )}

          <Row>
            <Space className="social-icon">
              {" "}
              <FacebookOutlined />
              <TwitterOutlined />
              <InstagramOutlined />
              <YoutubeOutlined />
              <WhatsAppOutlined />
            </Space>
          </Row>
        </Row>
      </Col>
    </Footer>
  );
};

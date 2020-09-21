import { Affix, Card, Image, Row, Col, List, Typography, Layout } from "antd";
import React from "react";
import { ReactSVG } from "react-svg";
const { Title, Paragraph } = Typography;
const {Content} = Layout

const BrandLogo = [
  "https://s3-ap-southeast-1.amazonaws.com/o77site/HtuLMi4gCRw30B1.svg",
  "https://s3-ap-southeast-1.amazonaws.com/o77site/singlehouse-narasiri-logo-en.svg",
  "https://s3-ap-southeast-1.amazonaws.com/o77site/singlehouse-setthasiri-logo-en.svg",
  "https://s3-ap-southeast-1.amazonaws.com/o77site/singlehouse-saransiri-logo-en.svg",
  "https://s3-ap-southeast-1.amazonaws.com/o77site/singlehouse-anasiri-logo-en.svg",
  "https://s3-ap-southeast-1.amazonaws.com/o77site/singlehouse-kanasiri-logo-en.svg",
  "https://s3-ap-southeast-1.amazonaws.com/o77site/singlehouse-habitia-logo-en.svg",
];
export const Outtro = () => {
  const BrandEle =
    BrandLogo.length > 0 ? (
      <>
        <List
          style={{
            justifyContent: "center",
            alignItems: "center",
            border: 'none',
            backgroundColor: "#ffffff",
          }}
          grid={{ gutter: 30, xs: 4, md: 3, sm: 4, lg: 4, xl: 4, xxl: 4 , column: 3}}
          dataSource={BrandLogo}
          size="small"
          renderItem={(bLogo) => (
            <Card
              style={{ backgroundColor: "#ffffff" }}
              cover={<img src={bLogo} />}
            />
          )}
        ></List>
      </>
    ) : null;
  return (
    <Col>
      <Image
        height="60%"
        src="https://sansiri-com-frontend.s3.ap-southeast-1.amazonaws.com/assets/img/singlehouse/sansiri-house-brand-section.jpg"
      />
      <Row justify="center">
        <Card
          style={{
            padding: "20px",
            width: "60%",
            maxHeight: "250px",
            position: "absolute",
            bottom: "-7rem",
            backgroundColor: "#ffffff",
            border: "none",
          }}
        >
          <Row justify="center" align="middle">
            <Col>
              <Title level={1}>แสนสิริ แบรนด์บ้านเดี่ยว</Title>
              <Paragraph style={{ fontSize: "15px",textAlign: 'center' }}>
                เลือกชมโครงการบ้านเดี่ยวจากแบรนด์ที่คุณสนใจได้ ที่นี่
              </Paragraph>
            </Col>
          </Row>
          <Row
            style={{ width: "100%", backgroundColor: "#ffffff" }}
    
          >
            {BrandEle}
          </Row>
        </Card>
      </Row>
    </Col>
  );
};

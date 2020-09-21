import React from "react";
import { Typography, Layout, Card, List, Row, Affix } from "antd";
import Mfldata from "@/fakedb/mf.json";
const { Text, Title, Paragraph } = Typography;
const { Content } = Layout;

export const MadeForLife = () => {
  const Mfl =
    Mfldata.length > 0 ? (
      <>
        <List
          style={{
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            width: "100%",
          }}
          grid={{
            gutter: 20,
            xs: 1,
            md: 2,
            sm: 2,
            lg: 4,
            xl: 4,
            xxl: 4,
            column: 3,
          }}
          dataSource={Mfldata}
          size="small"
          renderItem={(Mfldata) => (
            <Card
            className="madeLife-card"
              style={{
              width: '100%',
                border: "none",
                backgroundColor: "transparent",
              }}
              cover={
                <img
          
                  src={Mfldata.imageUrl}
                  style={{ filter: "brightness(0.5)" }}
                />
              }
            >
              <Row
                style={{
                  position: "absolute",
                  top: "30%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: "20px",
                    width: "100x",
                    fontWeight: "bold",
                    borderBottom: "1px solid white",
                    paddingBottom: "2px",
                  }}
                >
                  {Mfldata.title}
                </Text>
              </Row>
              <Card.Meta description={Mfldata.description}></Card.Meta>
            </Card>
          )}
        ></List>
      </>
    ) : null;
  return (
    <Content style={{ marginTop: "25rem", padding: "2rem" }}>
      {" "}
      <Title>MADE FOR LIFE</Title>
      <Paragraph>
        สําหรับแสนสิริ ‘บ้าน’ ไม่ได้เป็นเพียงแค่ที่อยู่อาศัย
      </Paragraph>
      {Mfl}
    </Content>
  );
};

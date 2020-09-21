import React from "react";
import blogData from "@/fakedb/blog.json";
import { Typography, Layout, List, Card, Row, Button, Divider } from "antd";

const { Title, Text } = Typography;
const { Content } = Layout;
export const Blog = () => {
  const blogList =
    blogData.length > 0 ? (
      <List
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
        grid={{
          gutter: "20px",
          xs: 1,
          md: 3,
          sm: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={blogData}
        renderItem={(blogData) => (
          <Row justify="center">
            <Card
              style={{
                width: 300,
                border: "none",
                backgroundColor: "transparent",
              }}
              cover={<img src={blogData.imageUrl} />}
            >
              <Button className="arrow-read">{">"}</Button>
              <Card.Meta description={blogData.description}></Card.Meta>
            </Card>
          </Row>
        )}
      ></List>
    ) : null;

  return (
    <Content style={{ padding: "2rem" }}>
      <Title>SANSIRI BLOG</Title>
      <Text>เรื่องราวดีๆ ที่เราคัดสรรมาบอกคุณ</Text>
      {blogList}
      <Row justify="center">
        <Button>ดูบทความทั้งหมด</Button>
      </Row>
      <Divider/>
    </Content>
  );
};

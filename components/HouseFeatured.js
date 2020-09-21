import React from "react";
import { Button, Layout, Row, Space, Typography, List, Divider } from "antd";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { FilterBtn, Round } from "@/components/Button";
import { Cards } from "./Card";
import houseData from "@/fakedb/data.json";
const { Content } = Layout;
const { Text, Title } = Typography;

const FilterTitle = [
  "เลือกสถานะโครงการ",
  "เลือกทำเลที่น่าสนใจ",
  "ราคาโครงการเริ่มต้น",
  "เรียงตามลำดับใหม่-เก่า",
];

export const HouseFeatured = ({size}) => {
  const CardGen = () => {
    return houseData.length > 0 ? (
      <List
        grid={{ gutter: 10, xs: 1, md: 2, sm: 2, lg: 3, xl: 4, xxl: 4 }}
        dataSource={houseData}
        renderItem={(houseData) => (
          <List.Item>
            <Cards houseData={houseData} />
          </List.Item>
        )}
      ></List>
    ) : null;
  };

  const FilterBtnEle =
    FilterTitle.length > 0
      ? FilterTitle.map((el) => <FilterBtn title={el} />)
      : null;

  return (
    <Content style={{ margin: "20px", padding: "2rem" }}>
      <Divider />
      <Row justify="space-between" align="middle">
        <Title level={2} style={{ marginBottom: 0 }}>
          บ้านเดี่ยว
        </Title>
        <Round title="ค้นหาจากแบรนด์บ้านเดี่ยว" />
      </Row>
      <Row>
        <Space>
          จำนวนทั้งหมด{" "}
          <Text strong style={{ fontSize: "20px" }}>
            {" "}
            41
          </Text>
          โครงการ
        </Space>
      </Row>
      <Row justify="space-around" align="middle">
        {size.innerWidth > 766 && (
          <Row>
            <Button>
              <TableOutlined />
            </Button>
            <Button>
              <UnorderedListOutlined />
            </Button>
          </Row>
        )}
        <Row>{FilterBtnEle}</Row>
      </Row>
      <Row style={{ marginTop: "10px" }} justify="space-around">
        {CardGen()}
      </Row>

      <Row justify="center">
        <Button>ดูโครงการเพิ่มเติม {">"}</Button>
      </Row>
    </Content>
  );
};

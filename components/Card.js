import { Button, Card, Row, Space, Typography } from "antd";
import { ShopOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { Text } = Typography;
export const Cards = ({ houseData }) => {
  const { title, image, description, priceStart, nearBy } = houseData;

  const nearByEle =
    nearBy.length > 0 ? (
      <Row style={{ marginTop: "20px" }} justify="space-around" align="middle">
        {nearBy.map((location) => (
          <div style={{ width: "120px" }}>
            <Space>
              <ShopOutlined style={{ fontSize: "25px" }} />
              <Text style={{ fontSize: "12px" }}>{location}</Text>
            </Space>
          </div>
        ))}
      </Row>
    ) : null;
  return (
    <Card
      hoverable
      style={{ padding: "20px" }}
      cover={
        <img
          alt="example"
          style={{ width: "100%", minHeight: "200px" }}
          src={image}
        />
      }
    >
      <Meta title={title} description={description} />
      {nearByEle}
      <Row style={{ marginTop: "20px" }}>
        <Button
          style={{
            borderColor: "black",
            borderWidth: "2px",
            padding: "12px",
            alignItems: "center",
            height: '100%'
          }}
        >
         <Text strong> ดูรายละเอียด > </Text>
        </Button>
      </Row>
    </Card>
  );
};

import React from 'react'
import {Col, Layout, Row, Typography} from "antd";

const {Content} = Layout
const {Title, Paragraph} = Typography
export const Intro = () => {
    return (
        <Content>
            <Row className="section" align={'middle'} style={{height: '250px', margin: '2rem', textAlign: 'center'}}>
                <Col>
                    <Title> “สำหรับทุกช่วงเวลาดีๆ ของทุกคน”</Title>
                    <Paragraph style={{width: '100%'}}> เพราะคนทุกคน ไม่ได้ต้องการบ้านแค่อยู่อาศัย
                        แต่ต้องการพื้นที่ในการใช้ชีวิต
                        กับคนที่เรารัก คนที่เราอยากแบ่งปันความรู้สึกดีๆ ร่วมกัน​

                        ทุกพื้นที่ของแสนสิริ เราจึงออกแบบด้วยความเข้าใจและใส่ใจในทุกรายละเอียด
                        ของการใช้ชีวิตของทุกคน ที่มีความต้องการที่หลากหลายแตกต่างกัน

                        เพื่อให้ทุกช่วงเวลาดีๆ ของทุกคน เกิดขึ้นได้ทุกวัน </Paragraph>
                </Col>
            </Row>
        </Content>
    )
}
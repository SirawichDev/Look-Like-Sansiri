import React from "react";
import {Button, Row} from "antd";
import {AlignCenterOutlined} from '@ant-design/icons'

export const FilterBtn = (props) => {
    return (
        <Row align="middle" justify="center" gutter={1} style={{marginRight: '5px'}}>
        <Button
            style={{borderRadius: '20px', height: '2.5rem'}}
            {...props}
        >
           
            {props.title}
            <AlignCenterOutlined/>
        </Button>
        </Row>

    )
}
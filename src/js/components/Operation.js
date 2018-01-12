import React from 'react';
import { Row, Col,Button,  } from 'antd';

export default class Operation extends React.Component{
    render(){
        return (
            <div class="operation">
                <Row>
                    <Col span={10}></Col>
                    <Col span={9}></Col>
                    <Col span={5}>
                        <Button type="primary">Add</Button>
                        <Button type="primary">Delete</Button>
                        <Button type="primary">Edit</Button>
                    </Col>
                </Row>
            </div>
        );
    };
}
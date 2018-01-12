import React from 'react';
import { Row, Col } from 'antd';
import Nav from './Nav';
import Search from './Search';
import Operation from './Operation';
import Form from "./Form";

export default class Content extends React.Component{
    render(){
        return (
            <div class="content">
                <Row>
                    <Col span={4}>
                        <Nav></Nav>
                    </Col>

                    <Col span={20}>
                        <Search></Search>
                        <Operation></Operation>
                        <Form></Form>
                        <Form></Form>
                    </Col>
                </Row>

            </div>
        );
    };
}
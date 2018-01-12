import React from 'react';
import {Layout, Row, Col } from 'antd';
const { Header} = Layout;

export default class Top extends React.Component{
    render(){
        return (
            <div>
                <Header class="header">
                    <Row >
                        <Col span={6}>
                            <a class="logo">
                                <img src="./src/images/logo.png"/>
                                <span>ReactDemo</span>
                            </a>
                        </Col>
                        <Col span={14}></Col>

                        <Col class="login" span={4}>
                            <a href="">登录/注册</a>
                        </Col>
                    </Row>
                </Header>
            </div>
        );
    };
}
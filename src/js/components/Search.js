import React from 'react';
import { Collapse,Input, Row, Col,Button  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

export default class Search extends React.Component{
    render(){
        return (
            <div>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="Search" key="1" style={{'fontSize':'16px'}}>
                        <div className="gutter-example">
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box search-padding">
                                        <span>
                                            Search Content
                                            <Input placeholder="content" />
                                        </span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                     <Button type="primary" style={{'marginTop':'32px'}}>Search</Button>
                                </Col>
                            </Row>
                        </div>


                    </Panel>
                </Collapse>
            </div>
        );
    };
}
import React from 'react';
import Top from './Top';
import Content from './Content';

export default class Index extends React.Component{
    render(){
        return (
            <div>
                <Top></Top>
                <Content></Content>
            </div>
        );
    };
}
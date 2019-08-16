import Header from '../components/Header'
import {Col, Row} from "antd";
import React from "react";

const adFormStyle= {
    width: '600px',
    height: '400px',
};


const Post=(props)=>{
    return(
        <Header>
            <Row>
                <Col span={10}>
                    <img src={props.url.query.postImg} style={adFormStyle}></img>
                </Col>
                <Col span={10}>
                    <Row>
                        <h1>
                            {props.url.query.postTitle}
                        </h1>
                    </Row>
                    <Row>
                        <h3>
                            {props.url.query.postText}
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row>
                사업화 트랙
            </Row>
        </Header>
    )
}

export default Post
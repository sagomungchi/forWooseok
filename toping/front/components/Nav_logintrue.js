import React from 'react';
import {Col, Button, Row} from 'antd';




const Nav_loginture = () => {
    return (
        <>
            <Col style={{ margin: "-3px" }} xs={5} md={5}>
                <Row><div style={{ fontSize: 15 }}>user : Jrun2ng</div></Row>
                <Row><div style={{ fontSize: 15 }}>투자금액:500000원</div></Row>
                <Row><Button>로그아웃</Button></Row>
            </Col>
        </>

    )
}
export default Nav_loginture;
import React from 'react';
import {Col, Button} from 'antd';


const Nav_loginture = () => {
    return (
        <>
        <Head>
            <title>toping</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.21.2/antd.css" />
        </Head>

            <Col style={{ marginTop: -10 }} xs={3} md={1}>
                <div style={{ fontSize: 15 }}>안녕하세요 이상수님!</div>
            </Col>
            < Col style={{ marginTop: -10 }} xs={3} md={3}>
                <Row style={{ fontSize: 15 }}>보유금액 : 3000000</Row>
                <Button>로그아웃</Button>
            </Col>
        </>

    )
}
export default Nav_loginture;
import React from 'react';
import Link from 'next/link';
import { Col, Icon } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const Nav_loginfalse = () => {
    return (
        <>
            <Col xs={2} md={2} >

                    <Link href="/Login">
                        <div style={{ textAlign: "right" }}>Login /</div>
                    </Link>

            </Col>
            <Col xs={2} md={2}  >
                    <Link href="/Signup">
                        <div style={{ marginRight: "30px", textAlign: "left" }}>Join<Icon type="user" /></div>
                    </Link>
            </Col>


        </>
    )
}
export default Nav_loginfalse;
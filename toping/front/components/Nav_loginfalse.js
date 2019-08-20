import React from 'react';
import Link from 'next/link';
import { Col, Row, Icon } from 'antd';

const Nav_loginfalse = () => {
    return (
        <>
                <Col xs={4} md={4} >
                    <Link href="login">
                        <a>Login</a>
                    </Link>
                    /
                    <Link  href="join">
                        <a>Join <Icon type="user" /></a>
                    </Link>
                </Col>
                
        </>
    )
}
export default Nav_loginfalse;
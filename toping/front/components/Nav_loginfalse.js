import React from 'react';
import Link from 'next/link';
import { Col, Icon } from 'antd';

const Nav_loginfalse = () => {
    return (
        <>
            <Col xs={2} md={2} >
                <Link href="login">
                    <div style={{textAlign:"right"}}>Login /</div>
                </Link>
            </Col>
            <Col xs={2} md={2}  >

                <Link href="join">
                    <div style={{marginRight:"30px", textAlign:"left"}}>Join<Icon type="user" /></div>
                </Link>
            </Col>

        </>
    )
}
export default Nav_loginfalse;
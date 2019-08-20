import React from 'react';
import Link from 'next/link';
import { Col } from 'antd';

const Nav_loginfalse =()=>{
    return (
        <>
            <Col xs={3} md={3}>
                <Link href="login">
                    <div>로그인</div>
                </Link>
            </Col>
            < Col xs={3} md={3}>
                <Link href="join"><div>회원가입</div></Link>
            </Col>
        </>
    )
}
export default Nav_loginfalse;
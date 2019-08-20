import { Row, Menu, Col, AutoComplete } from "antd";
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Nav_loginfalse from '../components/Nav_loginfalse';
import Nav_logintrue from '../components/Nav_logintrue';

/*
* Navigator 모든페이지 상단에 출력
* 각 페이지에서 <Navigator>여기가children</Navigator>
* isLoggedIn이 true 일때랑 false일때 구분해둠
* */
let isLoggedIn = false;

const NavStyle = {
    textAlign: "center",
    fontSize: "20px",
    margin: "20px",
    marginLeft: "20%",
    marginRight: "20%",
    top : "50%",
    padding : "5px",
    borderBottom : "1px solid",
}

const imgStyle = {
    width : "25%",
    marginBottom : "10px",
}

const textStyle = {
    fontWeight : "bold"
}


const Navigator = ({ children }) => {
    return (
        <>
            <Head>
                <title>toping</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.21.2/antd.css" />
        
            </Head>
            <div  style={textStyle}>
            <Row style={NavStyle} >
                <Col xs={4} md={4}>
                    <Link href="list" ><div>List</div></Link>
                </Col>
                <Col xs={4} md={4}>
                    <Link href="addIdea"><div>Register</div></Link>
                </Col>
                <Col xs={8} md={8} style={{ marginTop: "-15px", fontSize: "40px" }}>
                    <Link href="index" ><a><img style={imgStyle} src="static/toping.png"/></a></Link>
                </Col>
                <Col xs={4} md={4}>
                    <Link href="simulatedInvestment"><div>Invest</div></Link>
                </Col>
                {isLoggedIn
                    ?
                    <Nav_logintrue />
                    :
                    <Nav_loginfalse />
                }
            </Row>
            </div>
            {children}
        </>
    )

}
export default Navigator
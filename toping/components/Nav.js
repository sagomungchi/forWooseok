import {Row,Button, Col} from "antd";
import Link from 'next/link';
import Head from 'next/head';

/*
* Navigator 모든페이지 상단에 출력
* 각 페이지에서 <Navigator>여기가children</Navigator>
* isLoggedIn이 true 일때랑 false일때 구분해둠
* */
let isLoggedIn=false;

const NavStyle={
    textAlign:"center",
    fontSize:"20px",
    marginTop:"30px"
}

const Navigator = ({children}) => {
    return (
        <>
            <Head>
                <title>toping</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.21.2/antd.css"/>
            </Head>
            <Row style={NavStyle}>
                <Col xs={4} md={4}>

                    <Link href="list"><div>아이디어 리스트</div></Link>
                </Col>
                <Col xs={4} md={4}>
                    <Link href="addIdea"><div>아이디어 등록</div></Link>
                </Col>
                <Col xs={7} md={7} style={{marginTop:"-15px" ,fontSize:"40px"}}>
                    <Link href="index"><div>토핑</div></Link>
                </Col>
                <Col xs={3} md={3}>
                    <Link href="simulatedInvestment"><div>모의투자</div></Link>
                </Col>
                {isLoggedIn
                    ?
                    <>
                    <Col style={{marginTop:-10}} xs={3} md={1}>
                            <div style={{fontSize:15}}>안녕하세요 이상수님!</div>
                    </Col>
                    < Col style={{marginTop:-10}} xs={3} md={3}>
                        <Row style={{fontSize:15}}>보유금액 : 3000000</Row>
                        <Button>로그아웃</Button>
                    </Col>
                    </>
                    :
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
                }
            </Row>
            {children}
        </>



    )

}
export default Navigator
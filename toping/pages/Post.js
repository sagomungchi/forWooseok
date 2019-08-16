/*
* 아이디어 리스트의 개별 이미지를 클릭했을시
* 생성되는 동적 페이지
* 쿼리참조*
*
* 쿼리로 포스트아이디를 받아서 뿌려주는것 추천
* 참고 > example의 PostExample
*
* */

import Navigator from '../components/Nav'
import {Col, Row} from "antd";
import React from "react";
const adFormStyle= {
    width: '600px',
    height: '400px',
};
const Post=(props)=>{
    return(
        <Navigator>
            <Row style={{marginTop:20}} gutter={100}>
                <Col style={{textAlign:"right"}} md={12}>
                    <img src={props.url.query.postImg} style={adFormStyle}></img>
                </Col>
                <Col md={12}>
                    <Row gutter={10}>
                        <h1>
                            {props.url.query.postTitle}
                        </h1>
                        <h2>
                            사고뭉치
                        </h2>
                        <h2>
                            투자현황 (1500000/3000000)
                        </h2>
                   
                        <h3>
                            토핑의내용
                            나랏말싸미 듕귁에 어찌고저찌고
                        </h3>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginTop:20, textAlign:"center"}}>
                <h1>사업화 트랙</h1>
            </Row>
        </Navigator>
    )
}

export default Post
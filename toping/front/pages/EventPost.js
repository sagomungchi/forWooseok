/*
* u300 모의투자 리스트의 개별 이미지를 클릭했을시
* 생성되는 동적 페이지
* 쿼리참조*
*
* 마찬가지로 쿼리로 포스트아이디를 받아서 뿌려주는것 추천
*
* 참고자료 example/exampleEventPost
* */

import {Col, Row,Input,Button} from "antd";
import React from "react";
const adFormStyle= {
    width: '600px',
    height: '400px',
};
const EventPost=(props)=>{
    return(
            <Row style={{marginTop:20}} gutter={100}>
                <Col style={{textAlign:"right"}} md={12}>
                    <img src={props.url.query.postImg} style={adFormStyle}></img>
                </Col>
                <Col xs={12} md={12}>
                    <Row gutter={10}>
                        <h1>
                            {props.url.query.postTitle}
                        </h1>
                        <h2>
                            사고뭉치u300
                        </h2>
                        <h2>
                            투자현황 : 150000
                        </h2>

                        <h3>
                            토핑의내용
                            나랏말싸미 듕귁에 어찌고저찌고
                        </h3>
                        <Input value="금액" style={{width:200}}></Input>
                        <Button>투자하기!</Button>
                    </Row>
                </Col>
            </Row>
    )
}

export default EventPost
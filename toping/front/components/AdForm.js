/*메인 중단 광고 리스트
*
* 로컬 이미지는 static에 넣어야됨 url 이미지는 그냥 박으면됨
*
*
* */
import {Row, Col} from "antd";

const AdForm=()=>{
    return(
        <Row>
            <Col style={{marginTop:"60px",textAlign:"right"}} xs={12} md={12}>
                <img style={{width:"700px", height:"400px"}} src="static/TopiLogo.png"/>
            </Col>
            <Col style={{marginTop:"60px", marginLeft:"20px",textAlign:"left"}} xs={12} md={10}>
                <Row>
                    <h1 style={{fontSize:"40px"}}>토핑</h1>
                </Row>
                <Row>
                    <h2>토핑은 ...입니다</h2>
                </Row>
            </Col>

        </Row>
    )
}

export default AdForm
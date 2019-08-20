/*메인 하단 랭크 또는 랜덤 아이디어 리스트
* css 예시 참고하세용*
* */
import {Row, Col} from "antd";

const imgStyle={
    width:300,
    height:200,

}

const colStyle={
    textAlign:"center",
    marginTop:"20px"
}
const rowStyle={
    marginTop:"20px",
    fontSize:"30px"
}


const MainList=()=>{
    return(
        <Row>
            <Col style={colStyle} md={10}>
                <img style={imgStyle} src="static/topiLogo.png"/>
                <Row style={rowStyle}>
                    사고뭉치1
                </Row>
            </Col>
            <Col style={colStyle} md={3}>
                <img style={imgStyle} src="static/topiLogo.png"/>
                <Row style={rowStyle}>
                    사고뭉치2
                </Row>
            </Col>
            <Col style={colStyle} md={11}>
                <img style={imgStyle} src="static/topiLogo.png"/>
                <Row style={rowStyle}>
                    사고뭉치3
                </Row>
            </Col>
        </Row>
    )
}

export default MainList
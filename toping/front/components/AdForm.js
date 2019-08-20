/*메인 중단 광고 리스트
*
* 로컬 이미지는 static에 넣어야됨 url 이미지는 그냥 박으면됨
*
*
* */
import { Col, Carousel } from "antd";

const AdFormStyle = {
    marginRight: "20%",
    marginLeft: "20%",
    height : "400px",
    width : "90%",
    margin : "0px auto",
}

const AdForm = () => {
    return (
        <Carousel class autoplay>
            <div>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/adone.png" />
                </Col>
            </div>
            <div>

                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/adq.png" />
                </Col>
            </div>

            <div>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/adqq.png" />
                </Col>
            </div>

            <div>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/adqqq.png" />
                </Col>
            </div>

            <div>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/adqqqq.png" />
                </Col>
            </div>

            <div>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/adqqqqq.png" />
                </Col>
            </div>
        </Carousel>
    )
}

export default AdForm
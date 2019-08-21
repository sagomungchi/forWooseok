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
    margin : "0px auto",
    height : "700px",
}

const AdForm = () => {
    return (
        <Carousel class autoplay>
            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/ppta.png" />
                </Col>
            </div>
            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/pptb.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/pptc.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/pptd.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/ppte.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/pptf.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/pptg.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/ppth.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/ppti.png" />
                </Col>
            </div>

            <div>
            <br/>
            <br/>
                <Col xs={24} md={24}>
                    <img style={AdFormStyle} src="static/pptj.png" />
                </Col>
            </div>
        </Carousel>
    )
}

export default AdForm
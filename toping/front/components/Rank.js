import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Rank = () => {
    return (
        <div style ={{  marginLeft: "20%", marginRight: "20%", marginBottom : "20px", paddingBottom:"20px",borderBottom : "1px solid"}}>

            <br />
            <br />
            <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "500" }}>Investment Top Rank3</p>

            <Row >
                <Col span={8}> 
                 <Card
                    hoverable
                    style={{ width: 300, margin:"0 auto" }}
                    cover={<img alt="example" src="../static/Toping.png" style={{height:"200px"}} />}
                >
                    <Meta title="Europe Street beat" description="투자금액 : 5,000,000원" />
                </Card>
                </Col>
                <Col span={8}> 
                 <Card
                    hoverable
                    style={{ width: 300, margin:"0 auto" }}
                    cover={<img alt="example" src="../static/Toping.png" style={{height:"200px"}} />}
                >
                    <Meta title="Europe Street beat" description="투자금액 : 5,000,000원" />
                </Card>
                </Col>

                <Col span={8}> 
                 <Card
                    hoverable
                    style={{ width: 300, margin:"0 auto" }}
                    cover={<img alt="example" src="../static/Toping.png" style={{height:"200px"}} />}
                >
                    <Meta title="Europe Street beat" description="투자금액 : 5,000,000원" />
                </Card>
                </Col>

            </Row>




        </div>
    )
}

export default Rank;

import { Card, Icon, Avatar, Row, Col, Button, Modal, Input } from 'antd';
import React from 'react';

const { Meta } = Card;

class SimInvestment extends React.Component {
    state = {
        invisible: false,
        visible: false,
    };

    inshowModal = () => {
        this.setState({
            invisible: true,
        });
    };

    inhandleOk = e => {
        console.log(e);
        this.setState({
            invisible: false,
        });
    };

    inhandleCancel = e => {
        console.log(e);
        this.setState({
            invisible: false,
        });
    };



    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <div>
                    <Modal
                        title="모의투자"
                        visible={this.state.invisible}
                        onOk={this.inhandleOk}
                        onCancel={this.inhandleCancel}
                    >
                        <Input placeholder="투자금액" />

                    </Modal>
                </div>

                <div>

                    <Modal
                        title="상세보기"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >

                        <div style={{fontWeight:'bold'}}>
                            <img src="../static/toping.png" style={{ width: '100%' }}></img>
                            <br/>
                            <br/>
                            <br/>
                            <div>
                            <p>팀명 : 사고뭉치</p>
                            <p>팀원수 : 4</p>
                            <p>팀장 : JWS</p>
                            <p>소속 : 충북대학교</p>
                            <p>아이템명 : Toping</p>
                            <p>아이템소개 : 우리토핑이 짱이야</p>
                            </div>
                        </div>



                    </Modal>
                </div>


                <Row>
                    <Col>
                        <Card
                            style={{ width: 300, margin: "0px auto" }}
                            cover={
                                <img
                                    alt="example"
                                    src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                                />
                            }
                            actions={[
                                <Icon type="money-collect" onClick={this.inshowModal} />,
                                <Icon type="ellipsis" key="ellipsis" onClick={this.showModal} />,

                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={this.props._team}
                                description={this.props._text}
                            />
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default SimInvestment;

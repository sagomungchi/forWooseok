import { Card, Icon, Avatar, Row, Col, Button, Modal, Input } from 'antd';
import React from 'react';

const { Meta } = Card;

class SimInvestment extends React.Component {
    state = { visible: false };

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
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Input placeholder="투자금액" />

                    </Modal>
                </div>


                <Row>
                    <Col>
                        <Card
                            style={{ width: 300, margin:"0px auto" }}
                            cover={
                                <img
                                    alt="example"
                                    src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                                />
                            }
                            actions={[
                                <Icon type="money-collect" onClick={this.showModal} />,
                                <Icon type="ellipsis" key="ellipsis" />,

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

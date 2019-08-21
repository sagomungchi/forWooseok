import { Card, Icon, Avatar, Row, Col, Button, Modal, Input } from 'antd';
import React from 'react';
import LineEllipsis from 'react-lines-ellipsis';

const { Meta } = Card;

class SimInvestment extends React.Component {
    state = {
        invisible: false,
        visible: false,
        value:0,
    };

    onChangeInput =(e)=>{
        this.setState({
            value : e.target.value
        })
    }

    inshowModal = () => {
        this.setState({
            invisible: true,
        });
    };

    inhandleOk = e => {
        console.log(e);
        this.setState({
            invisible: false,
            value : this.state.value
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
        let img = './static/' + this.props._imgSource
        let a =  document.getElementById('InputValue')
        console.log(a)
        console.log(this.state.value)
        return (
            <>
                <div>
                    <Modal
                        title="모의투자"
                        visible={this.state.invisible}
                        onOk={this.inhandleOk}
                        onCancel={this.inhandleCancel}
                    >
                <Input placeholder="투자금액" id="InputValue" onChange={this.onChangeInput}  />

                    </Modal>
                </div>

                <div>

                    <Modal
                        title="상세보기"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >

                        <div style={{ fontWeight: 'bold' }}>
                            <img src={img} style={{ width: '100%' }}></img>
                            <br />
                            <br />
                            <br />
                            <div>
                                <p>팀명 : {this.props._teamName}</p>
                                <p>팀원수 : {this.props._teamCnt}</p>
                                <p>팀장 : {this.props._captainName}</p>
                                <p>소속 : {this.props._organization}</p>
                                <p>아이템명 : {this.props._itemName}</p>
                                <p>아이템소개 : {this.props._itemIntro}</p>
                            </div>
                        </div>



                    </Modal>
                </div>
            <div >
                <Card
                    style={{ margin: "0px auto" ,marginLeft:"30px",marginRight:"30px" }}
                    cover={
                        <img
                            alt="example"
                            src={img}
                            style={{height:"200px" }}
                           
                        />
                    }
                    actions={[
                        <Icon type="money-collect" onClick={this.inshowModal} />,
                        <Icon type="ellipsis" key="ellipsis" onClick={this.showModal} />,

                    ]}
                >
                    
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={this.props._teamName}
                        description={"금액 : "+ this.state.value}
                        
                    />
                </Card>
                </div>

            </>
        );
    }
}

export default SimInvestment;

import Header from '../components/Header'
import {Col, Row,Input,Button,Form} from "antd";
import React,{useState} from "react";
import Link from "next/link"
import axios from "axios";

const adFormStyle= {
    width: '600px',
    height: '400px',
};

let tempMoney=0;
let investMoney=0;

let url="";
let userId=0;
let usern ="";
let userpn ="";
let userMoney=0;


let url2="";
let earnMoneyt=0;
let needMoney=0;
let team = "";
let track="";
let text ="";
let title = "";
let postId=0;
let img="";



const getFisrt=(post)=>{
    axios.get('http://localhost:5000/loginState')
        .then(resp => {
            const data = resp.data;
            userId = data[0].user;
            url = "http://localhost:5000/users/" + String(data[0].user)
            url2 = "http://localhost:5000/post/" + String(post)
            axios.get(url)
                .then(resp => {
                    const data = resp.data;
                    userMoney = data.seedMoney;
                    usern = data.name;
                    userpn = data.pN;
                });
            axios.get(url2)
                .then(resp=>{
                    const data2 = resp.data;
                    postId = data2.id;
                    earnMoneyt= data2.earnMoney;
                    needMoney =data2.needMoney;
                    track = data2.track;
                    team = data2.team;
                    img = data2.img;
                    text=data2.text;
                    title = data2.title;
                })

        });
    console.log(postId,userId,userMoney);


}

const formatNum=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const invest=()=>{
    investMoney=tempMoney;
    axios.put(url,{
        seedMoney: userMoney-investMoney,
        name: usern,
        pN:userpn

    })
    axios.put(url2,{
        earnMoney: parseInt(earnMoneyt)+parseInt(investMoney),
        team:team,
        title:title,
        text:text,
        img:img,
        needMoney:needMoney,
        track:track
    })
}


const EventPost=(props)=>{
    console.log(investMoney);
    const [money,setMoney]= useState(0);
    const onSubmit=(e)=>{
        e.preventDefault();

    }
    const onMoneyChange=(e)=>{
        setMoney(e.target.value);
        tempMoney=e.target.value;
    }



    getFisrt(props.url.query.postId);
    return(
        <Header>
            <Row>
                <Col span={10}>
                    <img src={props.url.query.postImg} style={adFormStyle}></img>
                </Col>
                <Col span={10}>
                    <Row>
                        <h1>
                            {props.url.query.postTitle}
                        </h1>
                    </Row>
                    <Row>
                        <h3>
                            {props.url.query.postText}
                        </h3>
                    </Row>
                    <Row>
                        투자현황
                        <br/>
                        <h2>{formatNum(props.url.query.postEarn)}</h2>
                    </Row>
                    <Form onSubmit={onSubmit}>
                        <div>
                            <Input name="money" value={money} required onChange={onMoneyChange} style={{width:200}}/>

                        </div>

                    </Form>
                    <Button onClick={invest}><Link href="/event">투자하기</Link></Button>
                </Col>
            </Row>


        </Header>
    )
}

export default EventPost
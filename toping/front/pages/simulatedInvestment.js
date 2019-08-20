/*
* u300리스트 출력
* 아이디어와 마찬가지로 json에서 받아서 매핑
* 마찬가지로 form 만 따로 쓸꺼면, posts.map(함수 안의 내용이 form임)
* 중간에 formatNum 은 숫자 세자리씩 컴마찍어주는 함수2
* 해당페이지는 React.js 페이지
*
*
*
* */

import axios from 'axios';
import { Row, Col } from 'antd';
import Link from 'next/link';
import React from 'react';

const mainListStyle = {
    width: "300px",
    height: "250px"
}

class List extends React.Component {

    state = {

    }

    componentDidMount() {
        this._getPosts();
    }


    _renderPosts = () => {
        function formatNum(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }

        const userList = this.state.posts.map(

            post =>
                <div style={{ marginLeft:"20%", marginRight:"20%" }}>
                    <li key={post.id} style={{ listStyleType: "none" }}>

                        <Row gutter={30}>
                            <Col style={{ marginTop: 20, textAlign: "right" }} md={8}>
                                <Link as={post.title} href={{
                                    pathname: '/EventPost',
                                    query: { postImg: post.img, postTitle: post.title, postText: post.text }
                                }}>
                                    <img src={post.img} style={mainListStyle} />
                                </Link>
                            </Col>
                            <Col style={{ marginTop: 20, textAlign: "left" }} md={16}>
                                <Row>
                                    <h1>{post.title}</h1> - {post.team}
                                </Row>
                                <Row>
                                    {post.text}
                                </Row>
                                <Row>
                                    투자현황
                                <br />
                                    <h2>{formatNum(post.earnMoney)}</h2>

                                </Row>
                            </Col>
                        </Row>
                    </li>
                </div>
        )
        return userList
    }

    _getPosts = async () => {
        const posts = await this._callApi();
        this.setState({
            posts
        })
    }

    _callApi = () => {
        return (
            axios.get('http://localhost:5000/u300')
                .then(response => response.data)
                .catch(err => console.log(err))
        )
    }


    render() {

        return (
            <>
                <>
                    {this.state.posts ? this._renderPosts() : 'Loding'}
                </>
            </>
        );
    }
}

export default List
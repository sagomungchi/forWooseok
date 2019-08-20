/*
* 아이디어 리스트 출력
* json에서 받아서 매핑
* form 만 따로 쓸꺼면, posts.map(함수 안의 내용이 form임)
* 중간에 formatNum 은 숫자 세자리씩 컴마찍어주는 함수
* 해당페이지는 React.js 페이지
*
* 데이터 받아오는 방식은 써보면 간단*
* img 는 외부 url
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
class _List extends React.Component {

    state = {

    }

    componentDidMount() {
        this._getPosts();
    }

    _renderPosts = () => {

        function formatNum(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }

        const userList = this.state.posts.map(post => {
            console.log(post)
            return(
            <>
                <li key={post.id} style={{ listStyleType: "none" }}>

                    <Row gutter={30}>
                        <Col style={{ marginTop: 20, textAlign: "right" }} md={8}>
                            <Link as={post.title} href={{
                                pathname: '/Post',
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
                                <h2>{formatNum(post.earnMoney)}/{formatNum(post.needMoney)}</h2><h4
                                    style={{}}>({(post.earnMoney / post.needMoney * 100).toFixed(1)}%)</h4>
                                <h1>{post.track}</h1>
                            </Row>
                        </Col>
                    </Row>
                </li>
            </>
            )
        })

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
            axios.get('http://localhost:5000/post')
                .then(response => response.data)
                .catch(err => console.log(err))
        )
    }


    render() {
        return (
            <>
             {this.state.posts ? this._renderPosts() : 'Loding'}
            </>
        );
    }
}

export default _List
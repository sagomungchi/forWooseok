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
import { Row, Col, Spin } from 'antd';
import Link from 'next/link';
import React, { Children } from 'react';
import SimInvestment from '../components/SimInvestment';

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

        const userList = this.state.posts.map(post => {
            return (
                <>
                    <div style={{ marginLeft: "20%", marginRight: "20%" }}>
                        <Col span={8} style={{ marginBottom: '30px' }}><SimInvestment _captainName={post.captainName} _id={post.id} _imgSource={post.imgSource} _itemIntro={post.itemIntro} _itemName={post.itemName} _organization={post.organization} _teamCnt={post.teamCnt} _teamName={post.teamName}/></Col>
                    </div>
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
            axios.get('http://sagomungchi.iptime.org/api/posts')
                .then(response => response.data)
                .catch(err => console.log(err))
        )
    }


    render() {
        return (
            <>
                <>
                    {this.state.posts ? this._renderPosts() : <Spin size="large" />}
                </>
            </>
        );
    }
}

export default List
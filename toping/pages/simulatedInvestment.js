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

import Navigator from "../components/nav"
import axios from 'axios';
import {Row, Col} from 'antd';
import Link from 'next/link';
const mainListStyle = {
    width: "300px",
    height: "250px"
}
class List extends React.Component {
    static async getInitialProps({req}) {
        const response = await axios.get('http://localhost:5000/u300')
        return {
            posts: response.data
        }
    }
    render() {
        const {posts} = this.props;

        function formatNum(num){
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');
        }

        const userList = posts.map(
            post =>
                <li key={post.id} style={{listStyleType: "none"}}>

                    <Row gutter={30}>
                        <Col style={{marginTop:20,textAlign:"right"}} md={8}>
                            <Link as={post.title} href={{
                                pathname: '/EventPost',
                                query: {postImg: post.img, postTitle: post.title, postText: post.text}
                            }}>
                                <img src={post.img} style={mainListStyle}/>
                            </Link>
                        </Col>
                        <Col style={{marginTop:20,textAlign:"left"}} md={16}>
                            <Row>
                                <h1>{post.title}</h1> - {post.team}
                            </Row>
                            <Row>
                                {post.text}
                            </Row>
                            <Row>
                                투자현황
                                <br/>
                                <h2>{formatNum(post.earnMoney)}</h2>

                            </Row>
                        </Col>
                    </Row>
                </li>
        )
        return (
            <Navigator>
                <ul>
                    {userList}
                </ul>
            </Navigator>
        );
    }
}

export default List
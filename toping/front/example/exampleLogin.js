import React, {useState} from 'react'
import Header from "../components/Header";
import {Form, Button, Input, Checkbox} from 'antd';
import axios from "axios";
import Link from "next/link";

let temp = 0;
let team = "";
let phonenum = 0;

const getFirst = () => {
    let i = 0;
    axios.get('http://localhost:5000/users')
        .then(resp => {
            const data = resp.data;
            data.forEach(e => {
                    console.log(`${e.id}, ${e.name}, ${e.pN}`);
                    i++;
                }
            );
            temp = i + 1;
        })
        .catch(error => {
            console.log(error);
        });

}

const aonSubmit = () => {
    axios.post('http://localhost:5000/users', {
        id: temp,
        name: team,
        pN: phonenum,
        seedMoney: "3000000"
    });
    axios.put('http://localhost:5000/loginState/1', {
        isLoggedIn: true,
        user: temp
    })

};

const Login = () => {
    console.log(team);
    getFirst();

    console.log(temp);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
        team = e.target.value;
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        phonenum = e.target.value;
    };
    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    return (
        <Header>

            <Form style={{padding: 10}}>
                <div>
                    <label htmlFor="user-id">팀명(혹은 이름)</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-pass">휴대폰번호</label>
                    <br/>
                    <Input name="user-pass" value={password} required onChange={onChangePassword}
                           style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-password-chk">휴대폰 번호 확인</label>
                    <br/>
                    <Input name="user-password-chk" value={passwordCheck} required
                           onChange={onChangePasswordChk} style={{width: 200}}/>
                </div>
                <div>
                    {passwordError && <div style={{color: 'red'}}>휴대폰번호가 일치하지 않습니다..</div>}
                </div>
                <div>
                </div>
            </Form>
            <Button onClick={aonSubmit}><Link href="/index">로그인</Link></Button>

        </Header>


    );
};
export default Login;
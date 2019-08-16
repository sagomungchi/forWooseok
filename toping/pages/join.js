/*
* 필요없겠지만 회원가입 페이지
* 
* */
import Navigator from '../components/Nav'
import React, {useState} from 'react'
import {Form, Button, Input, Checkbox} from 'antd';
const Join = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);



    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };

    return (
        <Navigator>
            <Form onSubmit={onSubmit} style={{textAlign:"center",marginTop:"30px",marginLeft:-60,padding: 10}}>
                <div>
                    <label htmlFor="user-id" >아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-pass">비밀번호</label>
                    <br/>
                    <Input name="user-pass" type="password" value={password} required onChange={onChangePassword}
                           style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-password-chk">비밀번호 체크</label>
                    <br/>
                    <Input name="user-password-chk" type="password" value={passwordCheck} required
                           onChange={onChangePasswordChk} style={{width: 200}}/>
                </div>
                <div>
                    <Checkbox name="user-term" required value={term} onChange={onChangeTerm}>약관에 동의 합니다.</Checkbox>
                    {termError && <div style={{color: 'red'}}>약관에 동의하셔야 합니다.</div>}
                    {passwordError && <div style={{color: 'red'}}>패스워드가 일치하지 않습니다..</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </Navigator>

    );
};
export default Join;
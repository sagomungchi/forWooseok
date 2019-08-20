/*
* 로그인페이지 간략
* 아이디, 휴대폰번호만 입력하게
* 휴대폰 번호는 휴대폰 번호 두개 불일치시 submit 안되는 조건만 걸어놓음
* json 왔다갔다는 example 폴더안에 example login 참조
* 
* */

import React, {useState} from 'react'
import {Form, Button, Input, Checkbox} from 'antd';

const Login = () => {
    const [id, setId] = useState('');
    const [PN, setPN] = useState('');
    const [PNCheck, setPNCheck] = useState('');
    const [PNError, setPNError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (PN !== PNCheck) {
            return setPNError(true);
        }
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePN = (e) => {
        setPN(e.target.value);
    };
    const onChangePNCheck = (e) => {
        setPNError(e.target.value !== PN);
        setPNCheck(e.target.value);
    };

    return (
            <Form onSubmit={onSubmit} style={{textAlign:"center",marginTop:"30px",marginLeft:-60,padding: 10}}>
                <div>
                    <label htmlFor="user-id" >아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} style={{width: 200}}/>
                </div>

                <div>
                    <label htmlFor="user-pn">휴대폰번호</label>
                    <br/>
                    <Input name="user-pn" value={PN} required onChange={onChangePN}
                           style={{width: 200}}/>
                </div>
                <div>
                    <label htmlFor="user-PN-chk">휴대폰번호 체크</label>
                    <br/>
                    <Input name="user-PN-chk" value={PNCheck} required
                           onChange={onChangePNCheck} style={{width: 200}}/>
                </div>
                <div>

                    {PNError && <div style={{color: 'red'}}>휴대폰번호가 일치하지 않습니다</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">로그인!</Button>
                </div>
            </Form>

    );
};
export default Login;
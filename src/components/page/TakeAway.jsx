import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import styled from 'styled-components';
import SCLogo from '../../assets/SCLogo.svg';
import SCtitle from '../../assets/SCLogoTitle.svg';
import axios from 'axios'; // axios 라이브러리 추가

function TakeAway() {
    const [takeaway, setTakeaway] = useState('');
    const Authorization = useCookies('Authorization');

    const handleTakeawayChange = (e) => {
        setTakeaway(e.target.value);
    };

    const handleSubmitTakeaway = () => {
        axios.post(`https://port-0-secondchance-back-rm6l2llvw8fnyw.sel5.cloudtype.app/v1/feature/takeaway`,{takeaway}, {
            withCredentials: true,
            'Authorization': `Bearer ${Authorization}`
        })
            .then(response => {
                console.log('후기 전송 성공');
            })
            .catch(error => {
                // 오류 발생 시 처리할 내용
                console.error('후기 전송 오류:', error);
            });
    };

    return (
        <TakeAwayBack>
            <StyledLogo src={SCLogo}/>
            <TitleImg src={SCtitle}/>
            <TakeAwayWrapper>
                <TakeAwayInput value={takeaway} onChange={handleTakeawayChange} placeholder="후기를 입력해주세요." />
            </TakeAwayWrapper>
            <SubmitButton onClick={handleSubmitTakeaway}>후기 제출하기!</SubmitButton>
        </TakeAwayBack>
    );
}

export default TakeAway;
const TakeAwayBack = styled.div`
    display : flex;
    padding: 20px;
    flex-direction : column;
    align-items : center;
    gap : 34px;
    background-color : #20C85F;
    color : #FFFFFF;
    height: 100vh;
`;

const TitleImg = styled.img`
`;

const StyledLogo = styled.img`
    margin-top : 15%;
    width : 139px;
    height: 143px;
`;

const TakeAwayWrapper = styled.div` 
    display : flex;
    flex-direction : column;
    align-items : center;

    background-color : #FFFFFF;
    width : 90%;
    height: 50%;
    border-radius: 20px;
`;

const TakeAwayInput = styled.textarea`
    width: 80%;
    height: 80%;
    border : none;
    border-radius: 20px;
    padding: 30px;
    resize: none;
    margin : auto;
    font-family : 'GangwonEduHyeonokT';
    font-size: 25px;
    background-image:
        linear-gradient(to right, white 10px, transparent 10px),
        linear-gradient(to left, white 10px, transparent 10px),
        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
    line-height: 31px;
    &:focus {
        outline: none;
    }
`;

const SubmitButton = styled.button`
    width: 70%;
    height: 61px;
    display : flex;
    align-items : center;
    justify-content : center;
    color :#20C85F;
    font-size : 20px;
    font-weight : 700;
    background: #FFFFFF;
    border-radius: 16px;
    border: none;
    cursor: pointer;
`;

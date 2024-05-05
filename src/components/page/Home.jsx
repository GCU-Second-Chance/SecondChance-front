import React from 'react';
import styled from 'styled-components';
import HomeLogo from '../../assets/HomeLogo.svg';
import { Link } from 'react-router-dom';
import DogSelectList from '../dog/dogswiper/DogSelectList';
import KakaoShare from '../handler/KakaoShare';
import axios from 'axios';

function Home() {

    // 사용자 정보를 기반으로 기부 요청을 보내는 함수
const donate = async (userId) => {
    try {
        // 서버로 기부 요청을 보냄
        const res = await axios.post(`http://localhost:8080/v1/feature/donation`, { id: userId });
        console.log('Donation response:', res.data);
        // 기부 요청에 대한 응답 처리
        // 필요한 경우 응답에 따른 추가 로직을 작성할 수 있습니다.
    } catch (error) {
        console.error('Error donating:', error);
        // 에러 처리
    }
};

// 특정 버튼 클릭 시 기부 요청 함수 호출
const handleDonate = () => {
    // 서버로부터 전달받은 데이터에서 사용자 정보 추출
    const userId = 123123; // 서버로부터 전달받은 사용자 ID
    // 기부 함수 호출
    donate(userId);
};


    return (
        <HomeBack>
            <HeaderImg src={HomeLogo} alt="Home Logo"/>
            <HomeTitle>귀여운 동물들중에 한마리를 선택해주세요!</HomeTitle>
            <DogSelectList/>

            <StyledWrapper>
            <SharedTitle> Second Chance와 함께<br></br>유기동물을 알려주세요!</SharedTitle>
            <ShareButton to='/outro' onClick={() => {KakaoShare(); handleDonate()}}>공유하고 1원 후원하기!</ShareButton>
            <ReviewButton to="/outro">느낀점만 작성할래요</ReviewButton>
            </StyledWrapper>
            <StyledWrapper2>
                <Text>경기도 성남시 수정구 복정동 산55-12<br></br><br></br>
                사업자등록번호 : 예정<br></br><br></br>
                대표 : 박찬영, 지민성<br></br><br></br>
                이메일 : iamjms4237@gachon.ac.kr<br></br><br></br>
                </Text>

                <Text2>해당 웹사이트는 모바일에 최적화되어 있습니다.<br></br><br></br>
                Ⓒ Second Chance Corp.
                </Text2>
            </StyledWrapper2>

        </HomeBack>
    );
}

export default Home;

const HomeBack = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
    background : #F3F4F5;
    padding-bottom: 30px;
`;

const HeaderImg = styled.img`
    width: 100%;
`;

const HomeTitle = styled.div`
    width: 100%;
    font-size: 28px;
    text-align: center;
`;


const StyledWrapper = styled.div`
    width : 100%;
    height : 350px;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;


    font-family: pretendard;
    background : #20C85F;
`

const StyledWrapper2 = styled.div`
    width : 100%;
    height : 250px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap: 40px;

    font-family: pretendard;
`;

const Text = styled.div`
    width : 80%;
    color:#999999;
    font-size : 16px;

`;

const Text2 = styled.div`
    color:#CCCCCC;
    font-size : 16px;
    text-align : center;
`;
const SharedTitle = styled.div`
    width : 80%;
    text-align : center;

    color : #FFFFFF;
    font-size : 25px;
    font-weight : 600;
`;



const ReviewButton = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
`;

const ShareButton = styled(Link)`
    width: 80%;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #20C85F;
    font-size : 20px;
    font-weight : 600;

    background : #FFFFFF;
    border-radius: 8px;
    text-decoration: none;
`;
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const LoginHandler = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    const kakaoLogin = ()=>{
        axios.get(`http://localhost:8080/v1/login/kakao-login?code=${code}`)
        .then(response => {
            // 서버로부터 받은 데이터
            const data = response.data;

            // KakaoDto의 속성에 접근
            const nickname = data.nickname;
            const accessToken = data.accessToken;

            // 여기서 변수 nickname과 accessToken을 사용할 수 있습니다.
            console.log("Nickname:", nickname);
            console.log("AccessToken:", accessToken);
            localStorage.setItem("TOKEN", accessToken);
            localStorage.setItem("nickname", nickname);
        navigate(`/home?code=${code}`);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    }
    

    useEffect(() => {
        kakaoLogin();
    }, []);

    return (
        <>
            <LoadingWrapper>
            <SyncLoader color={'#20C85F'}/>
            </LoadingWrapper>
        </>
    );
};

export default LoginHandler;

const LoadingWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`;


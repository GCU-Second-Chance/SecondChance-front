import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../layout/Loading";

const KakaoLoginHandler = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    const kakaoLogin = () => {
        axios.post(`http://localhost:8080/v1/login/kakao-login`, { code })
        .then(response => {
            // 로그인이 성공했을 때 실행되는 코드
            navigate(`/home`);
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
            <Loading/>
        </>
    );
};

export default KakaoLoginHandler;


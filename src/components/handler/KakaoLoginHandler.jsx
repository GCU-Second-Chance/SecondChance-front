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
            console.log(response)
            navigate('/home');
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


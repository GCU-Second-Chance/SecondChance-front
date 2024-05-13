import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";
import Loading from "../layout/Loading";

const KakaoLoginHandler = () => {
    const [cookies, setCookie] = useCookies(['userId', 'userName']);
    const history = useHistory();
    const code = new URL(window.location.href).searchParams.get("code");

    const kakaoLogin = () => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/v1/login/kakao-login?code=${code}`)
            .then(response => {
                const { id, username } = response.data;
                setCookie('userId', id, { path: '/' });
                setCookie('userName', username, { path: '/' });
                history.push('/home');
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
            <Loading />
        </>
    );
};

export default KakaoLoginHandler;
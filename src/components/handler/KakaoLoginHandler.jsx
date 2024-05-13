import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../layout/Loading";

const KakaoLoginHandler = () => {
    const [cookies, setCookie] = useCookies(['userId', 'userName']);
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        const kakaoLogin = async () => { // 비동기 함수로 변경
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/v1/login/kakao-login?code=${code}`);
                const { id, username } = response.data;
                setCookie('userId', id, { path: '/' });
                setCookie('userName', username, { path: '/' });
                navigate('/home');
            } catch (error) {
                console.error('Error fetching data:', error);
                // 여기에 사용자에게 보여줄 에러 처리 추가 가능
            } finally {
                setLoading(false); // 로딩 상태 갱신
            }
        };

        if (code) { // code가 존재할 때만 요청
            kakaoLogin();
        } else {
            setLoading(false); // code가 없는 경우에도 로딩 상태 갱신
        }
    }, [code, navigate, setCookie]); // 의존성 목록에 추가

    return (
        <>
            {loading ? <Loading /> : null} {/* 로딩 상태에 따라 Loading 컴포넌트 표시 */}
        </>
    );
};

export default KakaoLoginHandler;

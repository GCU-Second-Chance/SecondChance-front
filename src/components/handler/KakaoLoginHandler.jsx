import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";
import Loading from "../layout/Loading";


const KakaoLoginHandler = () => {
    const [cookies, setCookie] = useCookies(['userId', 'userName']);
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    const kakaoLogin = () => {
        axios.post(`https://port-0-secondchance-back-1cupyg2klvnmgdft.sel5.cloudtype.app/v1/login/kakao-login`, { code })
        .then(response => {
            const { id, username } = response.data;
            setCookie('userId', id, { path: '/' });
            setCookie('userName', username, { path: '/' });
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
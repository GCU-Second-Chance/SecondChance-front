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
        http://localhost:8080/
        axios.post(`${import.meta.env.VITE_SERVER_URL}/login?code=${code}`)
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
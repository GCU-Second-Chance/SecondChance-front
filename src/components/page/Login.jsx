import styled from 'styled-components';
import SCLogo from '../../assets/SCLogo.svg';
import SCtitle from '../../assets/SCLogoTitle.svg'
import SCsemititle from '../../assets/SCsemititle.svg'
import kakaologo from '../../assets/kakaologo.svg';
import { Link } from 'react-router-dom';



function Login() {
    
    const handleLogin = () => {
        window.location.href = "https://port-0-secondchance-back-test2-1cupyg2klvnmgdft.sel5.cloudtype.app/oauth2/authorization/kakao";
    }

            
    return (
        <LoginBack>
            <StyledLogo src={SCLogo}/>
            <TitleImg src={SCtitle}/>
            <SemiTitleImg src={SCsemititle}/>
            <BottomBar>
                <KakaoLogin onClick={()=>handleLogin()}>
                <KakaoLogo src={kakaologo}/>
                카카오로 로그인하기
                </KakaoLogin>
            </BottomBar>    
        </LoginBack>
        );
    }
    
    export default Login;

const LoginBack = styled.div`
    position : relative;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 34px;
    background: linear-gradient(45deg, #b7f0cd,#20c85f );
    color : #FFFFFF;
    height: 100vh;
`;

const TitleImg = styled.img`
`;

const SemiTitleImg = styled.img`
`;

const StyledLogo = styled.img`
    margin-top : 40%;
    width : 139px;
    height: 143px;
`;

const BottomBar =  styled.div`
    position : absolute;
    display : flex;
    justify-content : center;
    align-items : center;
    bottom : 0;
    background-color : #FFFFFF;
    width : 100%;
    height: 145px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const KakaoLogin = styled(Link)`
    display : flex;
    justify-content: center;
    gap : 20px;
    align-items : center;
    color : #000000;
    font-size : 20px;
    font-family : pretendard;
    font-weight : 600;
    text-align : center;
    width: 90%;
    height: 70px;
    border-radius : 20px;
    background: #FEE500;
    text-decoration : none;
`;

const KakaoLogo = styled.img`
    width : 28px;
    height : 28px;
`;
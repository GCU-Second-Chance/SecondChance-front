import styled from 'styled-components';
import SCLogo from '../../assets/SCLogo.svg';
import SCtitle from '../../assets/SCLogoTitle.svg'
import SCsemititle from '../../assets/SCsemititle.svg'
import { Link } from 'react-router-dom';



function Onboarding() {
    
            
    return (
        <LoginBack>
            <StyledLogo src={SCLogo}/>
            <TitleImg src={SCtitle}/>
            <SemiTitleImg src={SCsemititle}/>
            
                <StartButton to='/home'>
                귀여운 강아지 보러가기!
                </StartButton>
            
        </LoginBack>
        );
    }
    
    export default Onboarding;

const LoginBack = styled.div`
    position : relative;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 34px;
    // background: linear-gradient(45deg, #b7f0cd,#20c85f );
    background : #20C85F;
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

const StartButton  = styled(Link)`
    display : flex;
    justify-content: center;
    margin-top : 15%;
    gap : 20px;
    align-items : center;
    color : #20C85F;
    font-size : 20px;
    font-family : pretendard;
    font-weight : 600;
    text-align : center;
    width: 80%;
    height: 70px;
    border-radius : 20px;
    background: #FFFFFF;
    text-decoration : none;
`;


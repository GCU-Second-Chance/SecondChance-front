import styled from 'styled-components';
import SCLogo from '../../assets/SCLogo.svg';
import SCtitle from '../../assets/SCLogoTitle.svg';
import SCsemititle from '../../assets/SCsemititle.svg';

function Outro() {

    return (
    <OutroBack>
        <StyledLogo src={SCLogo}/>
        <TitleImg src={SCtitle}/>
        <ReviewWrapper>
            <Review>

            </Review>
            <SubmitButton>후기 제출하기!</SubmitButton>
        </ReviewWrapper>    
    </OutroBack>
    );
}

export default Outro;



const OutroBack = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    gap : 34px;
    background-color : #20C85F;
    color : #FFFFFF;
    height: 100vh;
`;

const TitleImg = styled.img`
`;

const StyledLogo = styled.img`
    margin-top : 15%;
    width : 139px;
    height: 143px;
`;

const ReviewWrapper =  styled.div` 
    position : absolute;
    display : flex;
    justify-content : center;
    align-items : center;
    bottom : 0;
    background-color : #FFFFFF;
    width : 391px;
    height: 60%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;


const Review = styled.div`
    width: 90%;
    height: 90%;
    background-color : #CAFCBD;
    border-radius : 20px;

`;

const SubmitButton = styled.div`
    position : absolute;
    bottom : 10px;
    width: 70%;
    height: 61px;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #FFFFFF;
    font-size : 20px;
    font-weight : 700;
    background: #20C85F;
    border-radius: 16px;
`;

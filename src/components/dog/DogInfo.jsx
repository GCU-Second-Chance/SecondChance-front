import React from 'react';
import styled from 'styled-components';
import ManyDogSwiper from './ManyDogSwiper';

function DogInfo({name, age, breed, sex}) {
    return (
        <>
        <InfoWrapper>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
        </InfoWrapper>

        <InfoWrapper>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
        </InfoWrapper>

        <InfoWrapper>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
            강아지에 관한 정보<br/>
        </InfoWrapper>

        <ManyDogSwiper/>
        </>
    );
}

export default DogInfo;

const InfoWrapper = styled.div`
    width : 80%;
    height : 300px;
    padding : 10px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap: 10px;
    align-items : center;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;
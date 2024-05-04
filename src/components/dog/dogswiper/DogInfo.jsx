import React from 'react';
import styled from 'styled-components';

function DogInfo({ dog }) {
    return (
        <DogInfoWrapper>
            <DogInfoItem>이름: {dog.NM}</DogInfoItem>
            <DogInfoItem>품종: {dog.BREEDS}</DogInfoItem>
            <DogInfoItem>나이: {dog.AGE}</DogInfoItem>
            <DogInfoItem>성별: {dog.SEXDSTN === 'M' ? '수컷' : '암컷'}</DogInfoItem>
        </DogInfoWrapper>
    );
}

export default DogInfo;

const DogInfoWrapper = styled.div`
    margin-top : 15px;
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
`;

const DogInfoItem = styled.div`
    margin-bottom : 15px;
    font-size : 20px;
    font-weight : 400;
`;
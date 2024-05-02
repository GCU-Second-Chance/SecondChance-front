import React from 'react';
import DogSelectSwiper from './DogSelectSwiper';
import styled from 'styled-components';
import DogInfo from './DogInfo';

function DogList({dogs},{images}) {

    const imageMap = images.reduce((map, image) => {
        map[image.ANIMAL_NO] = image;
        return map;
    }, {});

    return (
        <DogListWrapper>
            {dogs && dogs.map((dog) => (
                <DogItem key={dog.ANIMAL_NO}>
                    <DogSelectSwiper key={dog.ANIMAL_NO} name={dog.NM} age={dog.AGE} breed={dog.BREEDS} sex={dog.SEXDSTN} />
                    <DogInfo name={dog.NM} age={dog.AGE} breed={dog.BREEDS} sex={dog.SEXDSTN} image={imageMap[dog.ANIMAL_NO]} />
                </DogItem>
            ))}
            <SelectButton>강아지 선택하기!</SelectButton>
        </DogListWrapper>
    );
}

export default DogList;

const DogListWrapper = styled.div`
    width: 80%;
`;

const DogItem = styled.div`
    margin-bottom: 20px;
`;

const SelectButton = styled.div`
    width: 100%;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    background: #20C85F;
    border-radius: 8px;
`;

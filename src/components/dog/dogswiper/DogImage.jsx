import React from 'react';
import styled from 'styled-components';

function DogImage({images}) {
    // images가 존재하고, 길이가 1 이상일 때만 filteredImages를 정의하고 그렇지 않으면 빈 배열로 설정
    const filteredImages = images && images.length > 0 ? [images[0]] : [];

    return (
        <DogImageWrapper>
            {filteredImages.map((img, index) => (
                <DogImageItem key={`dog_${img.animal_no}_${index}`}>
                    <Img src={`https://${img.photo_url}`} alt={`Dog ${index + 1}`} />
                </DogImageItem>
            ))}
        </DogImageWrapper>
    );
}


export default DogImage;

const DogImageWrapper = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background : #F3F4F5;
    gap: 10px;
    border-radius: 16px;
`;

const DogImageItem = styled.div`
    width: 90%;
    height: 200px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top : 15px;
    border-radius : 16px;
`;

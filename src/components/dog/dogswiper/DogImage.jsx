import React from 'react';
import styled from 'styled-components';

function DogImage({images}) {

    const filteredImages = images && images.length > 0 ? [images[5]] : [];

    return (
        <DogImageWrapper>
            {filteredImages.map((img, index) => (
                <DogImageItem key={`dog_${img.ANIMAL_NO}_${index}`}>
                    <Img src={`https://${img.PHOTO_URL}`} alt={`Dog ${index + 1}`} />
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
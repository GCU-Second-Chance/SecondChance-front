import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

function ManyDogSwiper(props) {
    return (
        <>
        <StyledSwiper
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        >
            
            <StyledSwiperSlide>
                <DogContainer>
                    <DogImg src='src/assets/dog.jpg'/>
                    <DogName>똥개</DogName>
                    <DogAge>5세</DogAge>
                </DogContainer>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
                <DogContainer>
                    <DogImg src='src/assets/dog.jpg'/>
                    <DogName>똥개</DogName>
                    <DogAge>5세</DogAge>
                </DogContainer>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
                <DogContainer>
                    <DogImg src='src/assets/dog.jpg'/>
                    <DogName>똥개</DogName>
                    <DogAge>5세</DogAge>
                </DogContainer>
            </StyledSwiperSlide>
            
        </StyledSwiper>
        </>
    );
}

export default ManyDogSwiper;

const StyledSwiper = styled(Swiper)`
    width : 100%;
    height : 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    width : 100%;
    height : 100%;
    padding-top : 20px;
    padding-bottom : 20px;
    display : flex;
    justify-content: center;
`;

const DogContainer = styled.div`
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

const DogImg = styled.img`
    width : 100%;
    height : 70%;
    border-radius : 16px;
`;

const DogName = styled.div`
    width : 100%;
    font-size : 20px;
    text-align : center;
`;

const DogAge = styled.div`
    width : 100%;
    font-size : 17px;
    text-align : center;
`;
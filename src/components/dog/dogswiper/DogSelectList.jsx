import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DogInfo from './DogInfo';
import DogImage from './DogImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DogDetail from '../dogdetail/DogDetail';

function DogSelectList({ dogs, dogsimges }) {
    const [combinedData, setCombinedData] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);
    const [selectedDogImg, setSelectedDogImg] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            // 1에서 30 사이의 랜덤한 정수를 생성하여 시작 인덱스로 사용
            const start = Math.floor(Math.random() * 30) + 1;
            const randomDogs = dogs.slice(start, start + 3); // 3개의 임의의 개 데이터 선택
            const randomDogImages = dogsimges.slice(start, start + 3); // 선택된 개에 해당하는 이미지 선택

            // 선택된 데이터 결합
            const combined = randomDogs.map((dog, index) => ({
                ...dog,
                images: randomDogImages[index] // 선택된 개에 해당하는 이미지 배열 할당
            }));

            setCombinedData(combined);
        };

        fetchData();
    }, [dogs, dogsimges]);

    return (
        <>
            <StyledSwiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {combinedData.map((dog) => (
                    <SwiperSlide key={dog.ANIMAL_NO}>
                        <DogItem key={dog.ANIMAL_NO}>
                            <DogImage images={dog.images} />
                            <DogInfo dog={dog} />
                        </DogItem>
                        <SelectButton onClick={() => { setSelectedDog(dog); setSelectedDogImg(dog.images); }}>
                            선택하기!
                        </SelectButton>
                    </SwiperSlide>
                ))}
            </StyledSwiper>
            {selectedDog && <DogDetail dog={selectedDog} images={selectedDogImg} />}
        </>
    );
}

export default DogSelectList;

const StyledSwiper = styled(Swiper)`
    margin-top: -30px;
    padding: 30px 50px;
    width: 75%;
    height: 100%;
`;

const DogItem = styled.div`
    width: 100%;
    height: 100%;
    background: #F3F4F5;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;

const SelectButton = styled.button`
    margin-top: 15px;
    margin-left: 25%;
    width: 50%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: #20C85F;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    border: none;
`;

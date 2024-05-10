import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DogInfo from './DogInfo';
import DogImage from './DogImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DogDetail from '../dogdetail/DogDetail'

function DogSelectList() {
    const KEY = import.meta.env.VITE_API_KEY;
    const IMG_KEY = import.meta.env.VITE_IMAGE_API_KEY;
    const randomStartIndex = Math.floor(Math.random() * 35) + 1; // 1부터 35 사이의 랜덤 인덱스 생성
    const randomLastIndex = randomStartIndex + 2; // 간격을 고려하여 마지막 인덱스 설정
    const [combinedData, setCombinedData] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);
    const [selectedDogImg, setSelectedDogImg] = useState(null);

    const combineData = (dogs, images) => {
        const combined = dogs.map(dog => {
            // 해당 개의 이미지 찾기
            const dogImages = images.filter(img => img.ANIMAL_NO === dog.ANIMAL_NO);
            // 개와 이미지 데이터를 합쳐서 객체로 반환
            return {
                ...dog,
                images: dogImages
            };
        });
        return combined;
    };

    const fetchData = async () => {
        try {
            const dogsResponse = await fetch(`https://openapi.seoul.go.kr:8088/${KEY}/json/TbAdpWaitAnimalView/${randomStartIndex}/${randomLastIndex}/`);
            const dogsJsonData = await dogsResponse.json();
            const dogsRow = dogsJsonData.TbAdpWaitAnimalView.row;
    
            const imagesResponse = await fetch(`https://openapi.seoul.go.kr:8088/${IMG_KEY}/json/TbAdpWaitAnimalPhotoView/1/333/`);
            const imagesJsonData = await imagesResponse.json();
            const imagesRow = imagesJsonData.TbAdpWaitAnimalPhotoView.row;
    
            setCombinedData(combineData(dogsRow, imagesRow));
            console.log(imagesRow);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    
    useEffect(() => {
        fetchData();
    }, []);

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
                    <DogItem>
                        <DogImage images={dog.images} />
                        <DogInfo dog={dog} />
                    </DogItem>
                    <SelectButton onClick={() => {setSelectedDog(dog), setSelectedDogImg(dog.images)}}>선택하기!</SelectButton>
                </SwiperSlide>
            ))}
            </StyledSwiper>
            {selectedDog && <DogDetail dog={selectedDog} images={selectedDogImg} />}
        </>
    );
}

export default DogSelectList;

const StyledSwiper = styled(Swiper)`
    margin-top : -30px;
    padding: 30px 50px;
    width: 75%;
    height: 100%;
`;

const DogItem = styled.div`
    width: 100%;
    height: 100%;
    background : #F3F4F5;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;

const SelectButton = styled.button`
    margin-top: 15px;
    margin-left : 25%;
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


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DogInfo from './DogInfo';
import DogImage from './DogImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DogDetail from '../dogdetail/DogDetail';
import { dogsdata } from '../../data/dogsdata';
import { dogsimgesdata } from '../../data/dogsimgesdata';


function DogSelectList() {
    const [combinedData, setCombinedData] = useState([]);
    const [modal, setModal] =  useState(false);
    const [selectedDog, setSelectedDog] = useState(null);
    const [selectedDogImg, setSelectedDogImg] = useState(null);



    const combineData = (dogs, images) => {
        const combined = dogs && dogs.map(dog => {
            // 해당 개의 이미지 찾기
            const dogImages =  images.filter(img => img.animal_no === dog.animal_no);
            // 개와 이미지 데이터를 합쳐서 객체로 반환
            return {
                ...dog,
                images: dogImages ? dogImages : [] // 해당하는 이미지가 있으면 배열로 반환, 없으면 빈 배열 반환
            };
        });
        return combined;
    };
    
    useEffect(() => {
        const fetchData = () => {
            // 1에서 26 사이의 랜덤한 정수를 생성하여 시작 인덱스로 사용
            const start = Math.floor(Math.random() * 25) + 1;
            const randomDogs = dogsdata.DATA.slice(start, start + 3);
            setCombinedData(combineData(randomDogs,dogsimgesdata.DATA));
            console.log(combinedData);
        };
    
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
                {combinedData && combinedData.map((dog) => (
                    <SwiperSlide key={dog.animal_no}>
                        <DogItem
                        onClick={() => { setSelectedDog(dog); setSelectedDogImg(dog.images); setModal(true) }}
                            key={dog.animal_no}>
                            <DogImage images={dog.images} />
                            <DogInfo dog={dog} />
                        </DogItem>
                    </SwiperSlide>
                ))}
            </StyledSwiper>
            { modal &&  <StyledModalWrapper/>}
            { modal &&  selectedDog &&
                <StyledModal>
                    <DogDetail dog={selectedDog} images={selectedDogImg} setModal={setModal}/>
                </StyledModal>
            }
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

const StyledModalWrapper = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background-color : #000000;
    opacity: 0.3;
    z-index : 1;
`;

const StyledModal = styled.div`
    top :5%;
    position : absolute;
    display: flex;
    flex-direction : column;
    gap : 1.25em;
    padding-top : 8%;
    padding-bottom : 8%;
    align-items : center;
    overflow: scroll;

    width : 80%;
    height : 80%;
    font-size : 1.5em;
    background: #F3F4F5;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    z-index:2;
`;


const DogItem = styled.div`
    bottom : 0;
    width: 100%;
    height: 100%;
    background: #F3F4F5;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import downIcon from '../../../assets/icon/triangle_down.jpg';
import rightIcon from '../../../assets/icon/triangle_right.jpg';

function DogDetail({ dog, images, setModal }) {
    const [isDetail, setDetail] = useState(false);

    const DetailHandler = () => {
        setDetail(!isDetail);
    };
    const youtubeUrl = dog.intrcn_mvp_url.substring(17);
    const pureName = dog.nm.replace(/\(.*\)/g, "");
    const detailStory = dog.intrcn_cn.split('\n').map((line, index) => <p key={index}>{line}</p>);

    return (
        <>
            <DetailTitleWrapper>
                <Title>
                    우리 <BrandColor>{pureName}</BrandColor>을/를 선택해주셔서
                </Title>
                <Title>
                    감사합니다!
                </Title>
                <br/>
                <SemiTitle>
                    새로운 주인을 기다리는 <BrandColor>{pureName}</BrandColor>에게
                </SemiTitle>
                <SemiTitle>
                    여러분의 따뜻한 마음으로
                </SemiTitle>
                <SemiTitle2>
                    두번째 기회를 건네주세요!
                </SemiTitle2>
            </DetailTitleWrapper>
            {images && images.map((img, index) => (
                    <DetailContainer key={`dog_${img.animal_no}_${index}`}>
                        <DogImageItem>
                            <Img 
                                src={`https://${img.photo_url}`} 
                                alt={`Dog ${index + 1}`} 
                            />
                        </DogImageItem>
                    </DetailContainer>
                )
                )}
            
            
            <DetailTitleWrapper>
                <SemiTitle>
                    우리 <BrandColor>{pureName}</BrandColor>은/는 <BrandColor>{dog.entrnc_date}</BrandColor>에
                </SemiTitle>
                <SemiTitle>
                    입소했습니다.
                </SemiTitle>
                <br />
                <DetailContainer2>
                    <SemiTitle>
                        <BrandColor>{pureName}</BrandColor>의 자세한 모습이 담긴 영상
                    </SemiTitle>
                    <br />
                    <LiteYouTubeEmbed 
                        id={youtubeUrl}
                        noCookie={true} 
                    />
                </DetailContainer2>
                <SemiTitle>
                    여러분의 따뜻한 마음으로 <BrandColor>{pureName}</BrandColor>에게
                </SemiTitle>
                <SemiTitle2>
                    두번째 기회를 건네주세요!
                </SemiTitle2>
                <br />
                <SemiTitle>
                    <BrandColor>{pureName}</BrandColor>의 자세한 이야기 보기
                    <MoreDetailButton onClick={DetailHandler}>
                        <Icon src={isDetail ? downIcon : rightIcon} />
                    </MoreDetailButton>
                </SemiTitle>
                {isDetail && <StyledTextArea>{detailStory}</StyledTextArea>}
                <ExitButton onClick={()=> setModal(false)}>닫기</ExitButton>
                <br/>
            </DetailTitleWrapper>
        </>
    );
}

export default DogDetail;

const DetailTitleWrapper = styled.div`
    width: 80%;
    height: 100%;
    text-align: center;
    color: #3C3C46;
`;

const BrandColor = styled.span`
    color: #20C85F;
`;

const Title = styled.div`
    font-size: 32px;
`;

const SemiTitle = styled.div`
    font-size: 25px;
`;

const SemiTitle2 = styled(SemiTitle)`
    color: #20C85F;
`;

const MoreDetailButton = styled.div`
    display: inline;
`;

const Icon = styled.img`
    width: 15px;
`;

const StyledTextArea = styled.div`
    font-size: 1.25em;
    font-weight: 400;
`;

const DetailContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    background: #F3F4F5;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 20px;
`;

const DetailContainer2 = styled(DetailContainer)`
    width: 90%;
    margin: 20px auto;
    flex-direction: column;
`;

const DogImageItem = styled.div`
    width: 100%;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
`;



const ExitButton = styled.div`
    width: 50%;
    margin-top : 10%;
    margin-left : 25%;
    text-align : center;
    color: #FFFFFF;
    font-size : 1.25em;
    font-weight : 400;

    background : #20C85F;
    border-radius: 8px;
    text-decoration: none;
`;
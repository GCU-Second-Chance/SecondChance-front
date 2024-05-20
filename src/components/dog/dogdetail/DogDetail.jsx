import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import downIcon from '../../../assets/icon/triangle_down.jpg';
import rightIcon from '../../../assets/icon/triangle_right.jpg';
import DOMPurify from 'dompurify';



function DogDetail({ dog , images}) {

    const [isDetail, setDetail] = useState(false);
    
    const DetailHandler = () => {
        setDetail(isDetail ? false : true);
    }

    const youtubeUrl = dog.INTRCN_MVP_URL.substring(17);
    const pureName = dog.NM.replace(/\(.*\)/g, "");
    const htmlString = dog.INTRCN_CN;
    const filteredHtmlString = DOMPurify.sanitize(htmlString);
    
    
    return (
        <>
        <DetailTitleWrapper >
            <Title>
            우리 <BrandColor>{pureName}</BrandColor>을/를 선택해주셔서
            </Title>
            <Title>
            감사합니다! 
            </Title>
            <SemiTitle>
            우리 <BrandColor>{pureName}</BrandColor>은/는  마음에 상처가 있습니다. 
            </SemiTitle>
            <SemiTitle>
            하지만 언제나 새로운 주인을 기다리고 있어요. 
            </SemiTitle>
            <SemiTitle>
            여러분의 따뜻한 마음으로 <BrandColor>{pureName}</BrandColor>에게 
            </SemiTitle>
            <SemiTitle2>
            두번째 기회를 건네주세요!
            </SemiTitle2>
        </DetailTitleWrapper>
            {images.map((img, index) => (
                <DetailContainer>
                <DogImageItem key={`dog_${img.ANIMAL_NO}_${index}`}>
                    <Img src={`https://${img.PHOTO_URL}`} alt={`Dog ${index + 1}`} />
                </DogImageItem>
                </DetailContainer>
            ))}
        <DetailTitleWrapper>
            <SemiTitle>
            우리 <BrandColor>{pureName}</BrandColor>은/는  <BrandColor>{dog.ENTRNC_DATE}</BrandColor>에
            </SemiTitle>
            <SemiTitle>
            입소했습니다.
            </SemiTitle>
            <br/>

        <DetailContainer2>
            <SemiTitle>
            <BrandColor>{pureName}</BrandColor>의 자세한 모습이 담긴 영상
            </SemiTitle>
            <br/>
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
            <br/>
            <SemiTitle>
                <BrandColor>{pureName}</BrandColor>의 자세한 이야기 보기
                <MoreDetialButton onClick={() => DetailHandler()}>
                    <Icon src={isDetail ? downIcon : rightIcon}/>
                </MoreDetialButton>
            </SemiTitle>
            {isDetail ? <StyledTextArea dangerouslySetInnerHTML={{ __html: filteredHtmlString }} /> : ""}

        </DetailTitleWrapper>
        </>
    );
}

export default DogDetail;

const DetailTitleWrapper = styled.div`
    width : 80%;
    height : 100%;
    text-align : center;
    color : #3C3C46;
`;

const BrandColor = styled.span`
    color: #20C85F;
`

const Title = styled.div`
    font-size : 32px;
`;

const SemiTitle = styled.div`
    font-size : 25px;
`;

const SemiTitle2 = styled(SemiTitle)`
    color: #20C85F;
`;

const MoreDetialButton = styled.div`
    display:inline;
    
`;

const Icon = styled.img`
    width : 15px;
`;



const StyledTextArea = styled.div`
    font-size : 30px;
    font-weight : 400;
`;



const DetailContainer = styled.div`
    width : 60%;
    height : 100%;
    display : flex;
    justify-content : center;
    background : #F3F4F5;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 20px;
`;

const DetailContainer2 = styled(DetailContainer)`
    width : 90%;
    margin : 20px auto;
    flex-direction : column;
`;


const DogImageItem = styled.div`
    width: 100%;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius : 16px;
`;
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import HomeLogo from '../../assets/HomeLogo.svg';
import { Link } from 'react-router-dom';
import DogList from '../dog/DogList';
import Loading from '../layout/Loading';

const KEY = import.meta.env.VITE_API_KEY;
const api_url = `http://openapi.seoul.go.kr:8088/${KEY}/xml/TbAdpWaitAnimalView/1/5/`;

function Home() {

    // const [loading, setLoading] = useState(true);
    const [dogs, setDogs] = useState([])


    const getDogs= async () => {
        const json = await (
            await fetch(api_url)
        ).json();

        
        setDogs(json.results);
        setLoading(false);


    }

    useEffect(() => {
        getDogs();
    }, [])

    return (
        <>
        {/* {loading ? <Loading/> : */}
            <HomeBack >
            <HeaderImg src={HomeLogo}/>
                <HomeTitle>아래 강아지 중에 한마리를 골라보실래요?</HomeTitle>
                <DogList dogs={dogs}/>
                <ShareButton>공유하고 1원 후원하기!</ShareButton>
                <ReviewButton to="/outro">느낀점만 작성할래요</ReviewButton>
            </HomeBack>      
            {/* } */}
        </>
    );
}

export default Home;

const HomeBack = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items:center;
    gap:34px;
    background : #FFFFFF;
    padding-bottom : 30px;
`;

const HeaderImg = styled.img`
    width : 100%;
`;

const HomeTitle = styled.div`
    width : 100%;
    font-size : 20px;
    text-align : center;
`;


const ShareButton = styled(Link)`
    width: 80%;
    height: 61px;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #FFFFFF;
    font-size : 20px;
    font-weight : 700;
    background: #20C85F;
    border-radius: 8px;
    text-decoration : none;
`;

const ReviewButton  = styled(Link)`
    color : #20C85F;
    text-decoration : none;
`;
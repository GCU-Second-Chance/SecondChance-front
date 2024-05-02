import React from 'react';
import styled from 'styled-components';
import {SyncLoader} from 'react-spinners';

function Loading() {
    return (
        <>
            <LoadingWrapper>
            <SyncLoader
                color={"#07E964"}
                loading
                size={30}
                speedMultiplier={5}
            />
            </LoadingWrapper>
            
        </>
    );
}

export default Loading;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content : center;
    align-items : center;
    
`
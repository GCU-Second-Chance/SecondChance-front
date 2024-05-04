import React from 'react';
import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

function Loading() {
    return (
        <LoaderWrapper>
            <SyncLoader
                color={"#07E964"}
                size={20}
                speedMultiplier={1}
            />
        </LoaderWrapper>
    );
}

export default Loading;

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function LayOut(props) {
    return (
        <Back> 
            <Outlet/>
        </Back>
    );
}

export default LayOut;

const Back = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    display: flex;
    flex-direction: column;

`;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function LayOut() {
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
    display: flex;
    flex-direction: column;

`;

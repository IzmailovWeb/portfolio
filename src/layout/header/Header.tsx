import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";

export const Header = () => {
    return (
        <StylledHeader>
           <Logo/>
            <Menu/>
        </StylledHeader>
    );
};
const StylledHeader = styled.header`
    background-color: coral;
`;


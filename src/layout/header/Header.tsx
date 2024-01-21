import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Home","Skills","Contact"]
export const Header = () => {
    return (
        <StylledHeader>
            <Container>
                <FlexWrapper justiify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StylledHeader>
    );
};



const StylledHeader = styled.header`
  background-color:rgba(31, 31, 32, 0.90);
  padding: 20px 0px ;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`


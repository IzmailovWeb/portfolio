import React from 'react';
import photo from '../../../assets/images/IMG_1436.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StylledMaiin>
            <Container>
                <FlexWrapper justiify={"space-between"} align={"center"} >
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am  <span>Victor Izmailov</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWraper>
                        <Photo src={photo}/>
                    </PhotoWraper>
                </FlexWrapper>
            </Container>
        </StylledMaiin>
    );
};

const StylledMaiin = styled.section`
  min-height: 100vh;
  background-color: #ce9985;
  display: flex;
`
const PhotoWraper =styled.div`
 
    position: relative;
  z-index: 0;
  
  &::before{
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const SmallText = styled.h6`
  font-size: 14px;
  font-weight: 400;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
  
`
const Name = styled.h2`
  margin: 10px 0px ;
  font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  
  span{
    position: relative;
    z-index: 0;
    
    &::before{
      content: "";
      display: inline-block;
      height: 20px;
      width: 100%;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

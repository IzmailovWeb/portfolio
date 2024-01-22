import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <LastName>Izmailov</LastName>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={'https://www.instagram.com/iz_viktor?igsh=MThwNDd0Z3J0OHVrbw%3D%3D&utm_source=qr'}>
                            <Icon iconId={"instagramSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={'https://t.me/izviktor'}>
                            <Icon iconId={"telegramSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    {/*<SocialItem>*/}
                    {/*    <SocialLink href={'www.linkedin.com/in/viktor-undefined-b14a232a8'} >*/}
                    {/*        <Icon iconId={"llinkedinSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>*/}
                    {/*    </SocialLink>*/}
                    {/*</SocialItem>*/}
                </SocialList>
                <Copyright>© 2023 Victor Izmailov, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const LastName = styled.h5`
  font-family: Josefin Sans,sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`
 
`

const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  
  
  &:hover{
    color: ${theme.colors.socialHoverColor};
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
    
  }
    

`
const Copyright = styled.small`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`
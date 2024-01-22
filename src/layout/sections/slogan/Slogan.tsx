import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { theme } from '../../../styles/Theme';

export const  Slogan = () => {
    return (
        <StylledSlogan>
            <Container>
                <FlexWrapper justiify={'center'} align={"center"}>
                    <SectionTitle>“Translating ideas into code: my passion for creating interfaces that captivate and code that inspires.”</SectionTitle>
                </FlexWrapper>
            </Container>
        </StylledSlogan>
    );
};

const StylledSlogan = styled.section`
  height: 100%;
    @media ${theme.media.mobile} {
        & h2{
            font-size: 26px;
        }

    }
`
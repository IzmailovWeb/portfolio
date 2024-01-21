import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import SociialWork from '../../../assets/images/worcs1.webp'
import TimerWork from '../../../assets/images/workcs2.webp'
import {Container} from "../../../components/Container";

const WorksItems = ["All", "landing page", "React", "spa"]
export const Works = () => {
    return (
        <StyleedWorks>
            <Container>
                <SectionTitle>My Worcs</SectionTitle>
                <TabMenu menuItems={WorksItems}/>
                <FlexWrapper justiify={"space-between"} align={"flex-start"}>
                    <Work title={"Social Network"}
                          src={SociialWork}
                          subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt " +
                              "ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work title={"Timer"}
                          src={TimerWork}
                          subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyleedWorks>
    );
};

const StyleedWorks = styled.section`

`

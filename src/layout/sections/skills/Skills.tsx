import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkilss>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"}>
                    <Skill iconId={"codeSvg"} title={"html5"}
                           subTitle={"As a detail-oriented front-end developer, my focus is on creating attractive and user-centric web experiences. With a strong foundation in HTML5, I bring my experience using its latest features to create scalable and responsive interfaces to create good structured semantic markup, improve accessibility, and search engine optimization of web content."}/>
                    <Skill iconId={"cssSvg"} title={"css3"}
                           subTitle={"In the world of front-end development, CSS becomes an artistic skill, and I am a master of the art. My background in styling and visual design allows me to create stunning and cross-browser web experiences."}/>
                    <Skill iconId={"reactSvg"} title={"React"}
                           subTitle={"In front-end development, React becomes the source of my creativity. My experience with React includes not only front-end use, but also a deeper implementation of its core principles and capabilities. I strive to be completely immersed in the art of creating complex, high-performance web experiences."}/>
                    <Skill iconId={"typescriptSvg"} title={"typescript"}
                           subTitle={"TypeScript has become incredibly popular in my arsenal. My experience with TypeScript extends beyond simple static typing, a feature that not only improves code reliability but also improves the overall development process."}/>
                    <Skill iconId={"stylledSvg"} title={"styled components"}
                           subTitle={"Taking a deep dive into the world of Styled Components, I don't just style interfaces, I create visual and true masterpieces. My experience with this library allows me to make my code efficient and flexible."}/>
                    <Skill iconId={"redux"}  title={"redux"}
                           subTitle={"Redux for efficient application state management. My experience with this takes into account the method and cost-effectiveness of the code, making it easily scalable and providing reliable data management."}/>
                </FlexWrapper>
            </Container>
        </StyledSkilss>
    );
};

const StyledSkilss = styled.section`

`
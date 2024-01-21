import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    title?: string
    subTitle?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StylledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon height={"50px"} width={"50px"} viewBox={"0 0 50 50"} iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillSubtitle>{props.subTitle}</SkillSubtitle>
            </FlexWrapper>
        </StylledSkill>
    );
};

const StylledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;

`
const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillSubtitle = styled.p`
  text-align: center;
`
export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: ${theme.colors.skillDecor};

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
    color: #fd7003;
  }

`
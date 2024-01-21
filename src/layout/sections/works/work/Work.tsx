import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    title: string
    subtitle: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src}/>
                <Button>view project</Button>
            </ImageWrapper>
            <Deskription>
                <Titlle>{props.title}</Titlle>
                <Subtitle>{props.subtitle}</Subtitle>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Deskription>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  background-color: ${theme.colors.secondaryBg};
  width: 100%;

  ${Link} {
    padding: 10px 0px;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`
const ImageWrapper = styled.div`
  position: relative;
  
  &:hover{

    &::before{
      content:"";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }
    ${Button}{
      opacity: 1;
    }

  }
 
  ${Button}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    
    &::before{
      width: 100%;
      height: 100%;
    }
  }
  
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`
const Titlle = styled.h3`

`
const Subtitle = styled.p`
  margin: 14px 0 10px;

`
const Deskription = styled.div`
  padding: 25px 20px;
`
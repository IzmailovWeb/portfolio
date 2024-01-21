import React, {ElementRef, useRef } from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();
        if (!form.current) return

        emailjs.sendForm('service_et7lazz', 'service_et7lazz', form.current, 'jFVC_dsI-O4mcmbJK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <StyledContact>
            <Container>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <SectionTitle>Contact</SectionTitle>
                    <Field placeholder="Name" name={'user_name'}/>
                    <Field placeholder="Subject" name={'subject'}/>
                    <Field  placeholder="Message" as="textarea" name={'message'}/>
                    <Button type="submit">Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea{
    resize: none;
    height: 155px;
  }

`
const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px ;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: ${theme.colors.font};
  font-family: Poppins, sans-serif;
  
  
  &::placeholder{
    color: ${theme.colors.placeHolderColor};
  }
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  }
`
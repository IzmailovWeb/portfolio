import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contacts/Contacs";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            {/*<Works/>*/}
            {/*<Testimony/>*/}
            <Contact/>
            <Slogan/>
            <Footer/>
        </>
    );
}

export default App;

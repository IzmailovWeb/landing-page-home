import React from 'react';
import './App.css';
import Header from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Title} from "./layout/section/title/Title";
import {Sleeping} from "./layout/section/sleeping/Sleeping";
import {Escape} from "./layout/section/escape/Escape";
import {Testimony} from "./layout/section/testimony/Testimony";
import {Together} from "./layout/section/together/Together";
import {Allredy} from "./layout/section/allredy/Allredy";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Title/>
            <Sleeping/>
            <Escape/>
            <Testimony/>
            <Together/>
            <Allredy/>
            <Footer/>
        </>
    );
}

export default App;


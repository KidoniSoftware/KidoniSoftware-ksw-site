import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {Box} from "@chakra-ui/react";

export default function App() {
    return (
        <Box className="App">
            <Header/>
            <main>
                <Content/>
                <Footer/>
            </main>
        </Box>
    );
}

import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {Box} from "@chakra-ui/react";

function App() {
    return (
        <Box>
            <Header/>
            <main>
                <Content/>
                <Footer/>
            </main>
        </Box>
    );
}

export default App;

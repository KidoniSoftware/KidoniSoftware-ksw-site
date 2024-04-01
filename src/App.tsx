import React from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {Grid, GridItem} from "@chakra-ui/react";

export default function App() {
    return (
        <Grid className="App"
              templateAreas={`"header"
                  "main"
                  "footer"
                  `}
        >
            <GridItem area={'header'}>
                <Header/>
            </GridItem>
            <GridItem area={'main'}>
                <Content/>
            </GridItem>
            <GridItem bg='lightskyblue' area={'footer'}>
                <Footer/>
            </GridItem>
        </Grid>
    );
}

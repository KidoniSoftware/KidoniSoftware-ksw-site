import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Heading} from "@chakra-ui/react";

export default function AboutSection() {
    return (
        <FullScreenSection id="about-section" p={8} spacing={8}>
            <Heading as="h1">
                About Kidoni Software
            </Heading>
        </FullScreenSection>
    );
};

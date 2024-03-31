import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Heading} from "@chakra-ui/react";

export default function AboutSection() {
    return (
        <FullScreenSection
            p={8}
            spacing={8}
            alignItems="flex-start"
        >
            <Heading as="h1" id="about-section">
                About Kidoni Software
            </Heading>
        </FullScreenSection>
    );
};

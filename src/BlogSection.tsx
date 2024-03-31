import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Heading} from "@chakra-ui/react";

export default function BlogSection() {
    return (
        <FullScreenSection
            p={8}
            spacing={8}
            alignItems="flex-start"
        >
            <Heading as="h1" id="blog-section">
                Kidoni Software Blog
            </Heading>
        </FullScreenSection>
    );
};

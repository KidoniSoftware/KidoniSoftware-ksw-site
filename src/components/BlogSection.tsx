import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Heading} from "@chakra-ui/react";

export default function BlogSection() {
    return (
        <FullScreenSection id="blog-section" p={8} spacing={8}>
            <Heading as="h1">
                Kidoni Software Blog
            </Heading>
        </FullScreenSection>
    );
};

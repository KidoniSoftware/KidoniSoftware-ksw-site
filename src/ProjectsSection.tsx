import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Heading} from "@chakra-ui/react";

export default function ProjectsSection() {
    return (
        <FullScreenSection id="projects-section" p={8} spacing={8}>
            <Heading as="h1">
                Featured Projects
            </Heading>
        </FullScreenSection>
    );
};

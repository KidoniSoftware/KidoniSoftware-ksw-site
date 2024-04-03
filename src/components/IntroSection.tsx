import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Center, Text, VStack} from "@chakra-ui/react";

export default function IntroSection() {
    return (
        <FullScreenSection className="IntroSection" p={8} spacing={8}>
            <Center>
                <VStack>
                    <Text id="intro-section" fontSize="32pt" color="#8c0121">Kidoni Software</Text>
                    <Text fontSize="16pt" color="#8c0121">A Software Consultancy</Text>
                </VStack>
            </Center>
        </FullScreenSection>
    );
};

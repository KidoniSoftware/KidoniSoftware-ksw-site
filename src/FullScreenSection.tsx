import * as React from "react";
import {StackDivider, StackProps, VStack} from "@chakra-ui/react";

interface FullScreenLinkProps extends StackProps {
    isDarkBackground?: boolean
}

export default function FullScreenSection({isDarkBackground, children, ...boxProps}: FullScreenLinkProps) {
    return (
        <VStack
            {...boxProps}
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? "white" : "black"}
        >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}
                    align="stretch"
                    divider={<StackDivider borderColor="white"/>}
            >
                {children}
            </VStack>
        </VStack>
    );
};

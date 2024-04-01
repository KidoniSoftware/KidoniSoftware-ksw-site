import * as React from "react";
import {StackProps, VStack} from "@chakra-ui/react";

export default function FullScreenSection({children, ...boxProps}: StackProps) {
    return (
        <VStack minHeight="100vh" minWidth="100vw" {...boxProps} align="stretch">
            {children}
        </VStack>

    );
};

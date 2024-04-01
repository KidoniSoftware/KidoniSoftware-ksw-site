import * as React from "react";
import {StackDivider, StackProps, VStack} from "@chakra-ui/react";

export default function FullScreenSection({children, ...boxProps}: StackProps) {
    return (
        <VStack
            {...boxProps}
            backgroundColor={boxProps.backgroundColor}
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

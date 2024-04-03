import React from "react";
import {Box, Center, Divider, HStack, Text, VStack} from "@chakra-ui/react";
import {FaRegCopyright} from "react-icons/fa";
import Socials from "./Socials";

export default function Footer() {
    return (
        <footer>
            <Box bg="#8c0121" color="black" margin="0 auto">
                <Divider borderColor="black"/>
                <Center>
                    <VStack p={2} spacing={4}>
                        <Socials/>
                        <HStack verticalAlign="middle">
                            <FaRegCopyright size="16px"/><Text>Kidoni Software 2024</Text>
                        </HStack>
                    </VStack>
                </Center>
            </Box>
        </footer>
    );
};

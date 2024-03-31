import React from "react";
import {Box, Flex, Spacer, Text, VStack} from "@chakra-ui/react";

export default function Footer() {
    return (
        <footer>
            <Box color="white" margin="0 auto">
                <VStack spacing={4}>
                    <Flex gap={8}>
                        <VStack>
                            <Text color="white">stuff</Text>
                            <Text color="white">stuff</Text>
                        </VStack>
                        <Spacer/>
                        <VStack>
                            <Text color="white">stuff</Text>
                            <Text color="white">stuff</Text>
                        </VStack>
                    </Flex>
                    <Text color="white">Kidoni Software © 2024</Text>
                </VStack>
            </Box>
        </footer>
    );
};

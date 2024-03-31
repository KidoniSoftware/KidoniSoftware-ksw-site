import React from "react";
import {Box, Divider, Flex, HStack, Spacer, StackDivider, Text, VStack} from "@chakra-ui/react";
import {FaRegCopyright} from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <Box color="black" margin="0 auto">
                <Divider borderColor="gray"/>
                <VStack spacing={4}
                        divider={<StackDivider borderColor="gray"/>}
                >
                    <Flex gap={8}>
                        <VStack>
                            <Text>stuff</Text>
                            <Text>stuff</Text>
                        </VStack>
                        <Spacer/>
                        <VStack>
                            <Text>stuff</Text>
                            <Text>stuff</Text>
                        </VStack>
                    </Flex>
                    <HStack verticalAlign="center">
                        <FaRegCopyright size="16px"/><Text>Kidoni Software 2024</Text>
                    </HStack>
                </VStack>
            </Box>
        </footer>
    );
};

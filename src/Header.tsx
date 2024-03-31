import {Box, Flex, Heading, Spacer, Text} from "@chakra-ui/react";

export default function Header() {
    return (
        <Box position="fixed"
             top={0}
             left={0}
             right={0}
             color="white"
             justifyContent="center">
            <Heading>Kidoni Software</Heading>
            <nav>
                <Flex gap="8" p="4">
                    <Spacer/>
                    <Text>Projects</Text>
                    <Text>Blog</Text>
                    <Text>About</Text>
                </Flex>
            </nav>
        </Box>
    );
};

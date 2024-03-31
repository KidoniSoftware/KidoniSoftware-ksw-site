import {Box, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

export default function Content() {
    return (
        <FullScreenSection isDarkBackground="black"
                           backgroundColor="#2A4365"
                           justifyContent="center"
                           alignItems="flex-start"
        >
            <Box>
                <VStack>
                    <Heading>Kidoni Software</Heading>
                </VStack>
            </Box>
        </FullScreenSection>
    );
}
import {Box, VStack} from "@chakra-ui/react";
import ProjectsSection from "./ProjectsSection";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";

export default function Content() {
    return (
        <Box>
            <VStack>
                <IntroSection/>
                <ProjectsSection/>
                <BlogSection/>
                <AboutSection/>
            </VStack>
        </Box>
    );
}
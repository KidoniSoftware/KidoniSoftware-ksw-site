import {Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer} from "@chakra-ui/react";
import {GrProjects} from "react-icons/gr";
import {TbWritingSign} from "react-icons/tb";
import {FaBars, FaInfo} from "react-icons/fa6";

export default function Header() {

    return (
        <Box position="fixed"
             top={0}
             left={0}
             right={0}>
            <nav>
                <Flex p={8}>
                    <Spacer/>
                    <Menu>
                        <MenuButton as={IconButton} icon={<FaBars/>} colorScheme="blue" size="lg" isRound={true}/>
                        <MenuList color="black">
                            <MenuItem as="a" href="/#projects-section" icon={<GrProjects size="18px"/>}>Featured
                                Projects</MenuItem>
                            <MenuItem as="a" href="/#blog-section" icon={<TbWritingSign size="18px"/>}>Blog</MenuItem>
                            <MenuItem as="a" href="/#about-section"
                                      icon={<FaInfo size="18px" color="blue"/>}>About</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </nav>
        </Box>
    );
};

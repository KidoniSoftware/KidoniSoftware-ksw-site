import {Box, Flex, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Spacer} from "@chakra-ui/react";
import {GrProjects} from "react-icons/gr";
import {TbInfoCircle, TbWritingSign} from "react-icons/tb";
import {FaBars} from "react-icons/fa6";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <Box position="fixed"
             top={0}
             left={10}
             right={10}>
            <nav>
                <Flex p={2} verticalAlign="middle">
                    <Link href="/#">
                        <Image src={logo} borderRadius="full" boxSize="60px" fit="cover" backgroundColor="#3182CE"
                               alt="Home"/>
                    </Link>
                    <Spacer/>
                    <Menu colorScheme="blue">
                        <MenuButton as={IconButton} icon={<FaBars size="24px" color="#8c0121"/>} colorScheme="blue"
                                    boxSize="60px"
                                    isRound={true}/>
                        <MenuList color="black">
                            <MenuItem as="a" href="/#projects-section"
                                      icon={<GrProjects size="18px"/>}>Featured Projects</MenuItem>
                            <MenuItem as="a" href="/#blog-section"
                                      icon={<TbWritingSign size="18px"/>}>Blog</MenuItem>
                            <MenuItem as="a" href="/#about-section"
                                      icon={<TbInfoCircle size="18px"/>}>About</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </nav>
        </Box>
    );
};

import {Container, Flex, Icon} from "@chakra-ui/react";
import React from "react";

import {FaGithub, FaLinkedin, FaMedium, FaStackOverflow} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";

const socials = [
    {
        icon: MdOutlineEmail,
        url: "mailto: ray@kidoniholdings.com",
    },
    {
        icon: FaGithub,
        url: "https://github.com/raysuliteanu",
    },
    {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/raysuliteanu",
    },
    {
        icon: FaMedium,
        url: "https://raysuliteanu.medium.com",
    },
    {
        icon: FaStackOverflow,
        url: "https://stackoverflow.com/users/3768217/rays",
    },
];

export default function Socials() {
    return (<Flex>
        {
            socials.map((item, index) => {
                return (
                    <a key={index} href={item.url} target="#">
                        <Icon as={item.icon} boxSize={6} marginRight={4}/>
                    </a>
                );
            })
        }
    </Flex>);
}

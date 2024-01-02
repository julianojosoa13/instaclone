import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import {AiFillHome} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"


function Sidebar() {
  const sidebarItems = [
    {
        icon: <AiFillHome size={25} />,
        text: "Home",
        link: "/"
    },
    {
        icon: <SearchLogo size={25} />,
        text: "Search",
        link: "/"
    },
    {
        icon: <NotificationsLogo size={25} />,
        text: "Notifications",
        link: "/"
    },
    {
        icon: <CreatePostLogo size={25} />,
        text: "Create",
        link: "/"
    },
    {
        icon: <Avatar size={"sm"} name="Juliano Josoa" src="/picofme.png"/>,
        text: "Profile",
        link: "/julianojosoa"
    }
  ]

  return (
    <Box
        h={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{base: 2, md: 4}}
    >
        <Flex
            direction={"column"} 
            gap={10}
            w={"full"}
            h={"full"}
        >
            <Link as={RouterLink} to="/" pl={2} display={{base: "none", md: "block"}} cursor="pointer">
                <InstagramLogo />
            </Link>
            <Link 
                as={RouterLink} 
                to="/" 
                p={2} 
                display={{base: "block", md: "none"}} 
                cursor="pointer"
                _hover={{
                    bg: "whiteAlpha.200"
                }}
                borderRadius={6}
                w={{base:10}}
            >
                <InstagramMobileLogo />
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
                {sidebarItems.map((item, index) => {
                    return (
                        <Tooltip
                            key={index}
                            hasArrow
                            label={item.text}
                            placement='right'
                            ml={1}
                            openDelay={500}
                            display={{base:'block', md: 'none'}}
                        >
                            <Link
                                display={"flex"}
                                to={item.link}
                                as={RouterLink}
                                alignItems={"center"}
                                gap={4}
                                _hover={{bg: "whiteAlpha.200"}}
                                borderRadius={6}
                                p={2}
                                w={{base: 10, md: "full"}}
                                justifyContent={{base:"center", md: "flex-start"}}
                            >
                                {item.icon}
                                <Box
                                    display={{base: "none", md: "block"}}
                                >
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>                       
                    )
                })}
            </Flex>

            <Tooltip
                hasArrow
                label={"Log out"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{base:'block', md: 'none'}}
            >
                <Link
                    display={"flex"}
                    to={"/auth"}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    _hover={{bg: "whiteAlpha.200"}}
                    borderRadius={6}
                    p={2}
                    w={{base: 10, md: "full"}}
                    justifyContent={{base:"center", md: "flex-start"}}
                    mt="auto"
                >
                    <BiLogOut size={25} />
                    <Box
                        display={{base: "none", md: "block"}}
                    >
                        Log Out
                    </Box>
                </Link>
            </Tooltip> 
        </Flex>
    </Box>
  )
}

export default Sidebar
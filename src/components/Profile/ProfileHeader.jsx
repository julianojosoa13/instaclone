import { Avatar, AvatarGroup, Flex, Text, VStack, Button } from '@chakra-ui/react'
import React from 'react'

function ProfileHeader() {
  return (
    <Flex
        gap={{base: 4, sm: 10}}
        py={10}
        direction={{base: "column", sm: "row"}}
    >
        <AvatarGroup
            size={{base: "xl", md: "2xl"}}
            justifySelf={"center"}
            alignSelf={"center"}
            mx={"auto"}
        >
            <Avatar name="julianojosoa" src="/picofme.png" alt="user profile pic"/>
        </AvatarGroup>

        <VStack
            alignItems={"start"}
            gap={2}
            mx={"auto"}
            flex={1}
        >
            <Flex gap={4} direction={{base: "column", sm:"row"}} justifyContent={{base: "center", sm:"flex-start"}} alignItems={"center"} w="full"> 
                <Text fontSize={{base: "sm", md:"lg"}}>
                    julianojosoa
                </Text>
                <Flex
                    gap={4}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Button
                        bg="white"
                        color="black"
                        _hover={{bg:"whiteAlpha.800 "}}
                        size={{base: "xs", md: "sm"}}
                    >
                        Edit Profile
                    </Button>
                </Flex>
            </Flex>

            <Flex alignItems={"center"} gap={{base:2, sm:4}}>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
                    Posts
                </Text>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>175</Text>
                    Followers
                </Text>
                <Text fontSize={{base: "xs", md: "sm"}}>  
                    <Text as="span" fontWeight={"bold"} mr={1}>65</Text>
                    Following
                </Text>

            </Flex>
            <Flex
                alignItems={"center"}
                gap={4}
            >
                <Text
                    fontSize={"sm"}
                    fontWeight={"bold"}
                >  
                    Juliano Josoa
                </Text>
            </Flex>
            <Text
                fontSize={"sm"}
            >  
                All we get is all we take - Batman The Long Halloween
            </Text>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader
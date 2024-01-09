import React, {useState} from 'react'
import {Flex,Button,Avatar,VStack,Box,Text} from "@chakra-ui/react"

function SuggestedUser({name, followers, avatar}) {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>{name}</Box>
          <Text color="gray.500" fontSize={11}>{followers} followers</Text>
        </VStack>
      </Flex>
      <Button 
        onClick={()=> setIsFollowed(!isFollowed)}
        fontSize={13}
        bg="transparent"
        h="max-content"
        p={0}
        fontWeight={"medium"}
        color={"blue.400"}
        _hover={{color: "white"}}
      >
        {isFollowed? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  )
}

export default SuggestedUser
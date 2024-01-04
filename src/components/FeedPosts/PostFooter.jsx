import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'

function PostFooter({username}) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(1000)
  const hanldeLike = () => {
    if (liked) {
        setLiked(false)
        setLikes(likes -1)
    } else {
        setLiked(true)
        setLikes(likes+1)
    }
  }

  return (
  <Box mb={10}>
    <Flex alignItems={"center"} gap={4} pt={0} mb={2} mt={4}>
        <Box onClick={hanldeLike}>
            {
                !liked ? (<NotificationsLogo />) : (<UnlikeLogo />)
            }
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
    </Flex>
    <Text fontWeight={600} fontSize={"sm"}>
      {likes} likes
    </Text>
    <Text fontWeight={700} fontSize={"sm"}>
      {username} {" "}
      <Text as="span" fontWeight={400}>
            Feeling good
      </Text>
    </Text>
    <Text fontSize={"sm"} color="gray" cursor={"pointer"}>
      View all 1,000 comments
    </Text>
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={2}
      w="full"
    >
      <InputGroup>
            <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14}/>
            <InputRightElement>
              <Button
                fontSize={14}
                color='blue.500'
                fontWeight={600}
                cursor={"pointer"}
                _hover={{
                  color: "white",
                }}
                bg={"transparent"}
              >
                Post
              </Button>
            </InputRightElement>
      </InputGroup>
    </Flex>
  </Box>
  )
}

export default PostFooter
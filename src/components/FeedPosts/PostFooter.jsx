import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NotificationsLogo, UnlikeLogo } from '../../assets/constants'

function PostFooter() {
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

  return (<>
    <Flex alignItems={"center"} gap={4} pt={0} mb={2} mt={"auto"}>
        <Box onClick={hanldeLike}>
            {
                !liked ? (<NotificationsLogo />) : (<UnlikeLogo />)
            }
        </Box>
    </Flex>
  </>
  )
}

export default PostFooter
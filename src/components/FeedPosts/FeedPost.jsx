import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

function FeedPost({username, avatar, img}) {
  return (
    <>
      <PostHeader username={username} avatar={avatar}/>
      <Box my={2} borderRadius={8} overflow={"hidden"}>
        <Image src={img}/>
      </Box>
      <PostFooter username={username}/>
    </>
  )
}

export default FeedPost
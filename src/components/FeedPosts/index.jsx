import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'

function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Container maxW={'container.sm'} py={4} px={2}>
      {
        isLoading && [0,1,2,3].map((_,idx) => {
          return (
            <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size={10} />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height={"10PX"} w={200}/>
                  <Skeleton height={"10PX"} w={200}/>
                </VStack>
              </Flex>
              <Skeleton w="full">
                <Box height={"500px"}>Contents wrapped</Box>
              </Skeleton>
            </VStack>
          )
        })
      }
      {
        !isLoading && (
          <>
            <FeedPost username="sarahrose" img="/img1.png" avatar="img1.png"/>
            <FeedPost username="julianojosoa" img="/img2.png" avatar="img3.png"/>
            <FeedPost username="markronson" img="/img3.png" avatar="img4.png"/>
            <FeedPost username="tracylunie" img="/img4.png" avatar="img3.png"/>
          </>
        )
      }
    </Container>
  )
}

export default FeedPosts
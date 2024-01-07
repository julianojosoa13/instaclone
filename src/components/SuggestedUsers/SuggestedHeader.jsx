import { Avatar, Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"lg"} name="Juliano Josoa" src="/picofme.png"/>
        <Box fontSize={12} fontWeight={"bold"}>
          julianojosoa
        </Box>
        <Link 
          as={RouterLink} 
          to="/auth"
          fontSize={14}
          fontWeight={"medium"}
          style={{textDecoration: "none"}}
          cursor={"pointer"}
          color={"blue.400"}
        >
          Log Out
        </Link>
      </Flex>

    </Flex>
  )
}

export default SuggestedHeader
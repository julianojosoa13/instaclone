import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
        <Box border="1px solid gray" borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram logo"/>
                <Input 
                    placeholder='Email'
                    type="email"
                    fontSize={14}
                />
                <Input 
                    placeholder='Password'
                    type="password"
                    fontSize={14}
                />
                {!isLogin? (
                    <Input 
                        placeholder='Confirm    Password'
                        type="password"
                        fontSize={14}
                    />
                ) : null}

                <Button w='full' colorScheme='blue' size="sm" fontSize={14}>
                    {isLogin? "Log In" : "Sign Up"}
                </Button>

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w="full">
                    <Box h={"1px"} backgroundColor={"gray.400"} flex={2}/>
                    <Text mx={1} color='white'>OR</Text>
                    <Box h={"1px"} backgroundColor={"gray.400"} flex={2}/>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"} cursor="pointer">
                    <Image src="/google.png" w={5} alt="Google logo"/>
                    <Text mx={2} color={"blue.500"}>Log In with Google</Text>
                </Flex>

            </VStack>
        </Box>

        <Box border="1px solid gray" borderRadius={4} padding={5} mt={4}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin? "Don't have an account?" : "Already have an account?"}
                </Box>
                <Box onClick={() => setIsLogin(!isLogin)} cursor={'pointer'} color="blue.500">
                    {isLogin ? "Sign up" : "Log in"}
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default AuthForm
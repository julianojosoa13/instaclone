import { Box, Button, Image, Input, VStack } from '@chakra-ui/react'
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

            </VStack>
        </Box>
    </>
  )
}

export default AuthForm
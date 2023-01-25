import { Box,Flex,Text,Input,Button } from '@chakra-ui/react'
import React from 'react'

const ChangePswrd = () => {
  return (
    <Box w="70%" m='auto'>
     <Flex justifyContent='space-between' pt={10}>
      <Text fontSize={["10px","10px","10px","20px"]}> <b>Old Password</b> </Text>
      <Input w="70%"/>
     </Flex>
     <Flex justifyContent='space-between' pt={5}>
      <Text fontSize={["10px","10px","10px","20px"]}> <b>New Password</b> </Text>
      <Input w="70%"/>
     </Flex>
     <Flex justifyContent='space-between' pt={5}>
      <Text fontSize={["10px","10px","10px","20px"]}> <b>Confirm Password</b> </Text>
      <Input w="70%"/>
     </Flex>
     <Flex justifyContent='space-around' pt={8}>
     <Button fontSize={["10px","10px","10px","20px"]}>Change password</Button>
     <Text fontSize={["10px","10px","10px","20px"]} color="blue">Forget passwrod?</Text>
     </Flex>
    </Box>
  )
}

export default ChangePswrd

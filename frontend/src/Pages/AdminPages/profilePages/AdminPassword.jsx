import React from 'react'
import { Box,Flex,Text,Input,Button } from '@chakra-ui/react'

const AdminPassword = () => {
  return (
    <Box w="70%" m='auto'>
     <Flex justifyContent='space-between' pt={10}>
      <Text> <b>Old Password</b> </Text>
      <Input w="70%"/>
     </Flex>
     <Flex justifyContent='space-between' pt={5}>
      <Text> <b>New Password</b> </Text>
      <Input w="70%"/>
     </Flex>
     <Flex justifyContent='space-between' pt={5}>
      <Text> <b>Confirm Password</b> </Text>
      <Input w="70%"/>
     </Flex>
     <Flex justifyContent='space-around' pt={8}>
     <Button>Change password</Button>
     <Text color="blue">Forget passwrod?</Text>
     </Flex>
    </Box>
  )
}

export default AdminPassword

import { Box,Text,Flex,Input,Textarea, Button,Select } from '@chakra-ui/react'
import React from 'react'

const EditProfile = () => {
  return (
    <Box w="60%" m='auto' mb={10}>
        {/* <Text textAlign='center'>Edit your profile here</Text> */}
        <Flex justifyContent="space-around" pt={10}>
          <Text >Name</Text>
          <Box  w="70%" >
          <Input/>
          <Text fontSize="12px">Help people discover your account by using the name you're known by: either your full name, nickname, or business name. <br /> You can only change your name twice within 14 days. </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Username</Text>
          <Box w="70%">
          <Input />
          <Text fontSize="12px">In most cases, you'll be able to change your username back to ravi.kapro for another 14 days. Learn more</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Website</Text>
          <Box w="70%">
          <Input />
          <Text fontSize="12px">Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Bio</Text>
          <Textarea w='70%'></Textarea>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Phone</Text>
          <Input w="70%"/>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Gender</Text>
          <Select w="70%">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Perfer not to say</option>
          </Select>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
        <Button>Submit</Button>
        <Button>Deactivate Account</Button>
        </Flex>
    </Box>
  )
}

export default EditProfile

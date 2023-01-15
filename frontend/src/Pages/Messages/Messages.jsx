import Navbar from 'Components/Navbar'
import React from 'react'
import { Box, Flex,Text,Input,Image,InputGroup,InputRightElement,Button,InputLeftElement } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import {BsEmojiSmile} from "react-icons/bs"

const Messages = () => {
  const {AllFriends} = useSelector((store)=>store.AppReducer)
  const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)



  return (
    <Box backgroundColor="#f3f4f6">
    <Navbar/>
     <Flex pt={90} w="90%" m="auto" h={650}>
        <Box w="25%" border="2px solid #b8b8b8" backgroundColor="white">
          {
            profileData && profileData.map(ele=>(
          <Flex p={2} w="100%" h={20} >
            <Box>
            <Image h="50px" w="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text pl={5}>{`${ele.firstName} ${ele.lastName}`}</Text>
            </Box>
          </Flex>
            ))
          }
          <hr />
          <Input  m={5} w="90%" placeholder='Search friends...' />
          <hr />  
          {
            AllFriends && AllFriends.map(ele=>(
        <Flex justifyContent="space-around"  p={2} cursor="pointer" key={ele._id} _hover={{ bg: "grey" }}>
            <Box>
                <Image h="50px" w="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text>{ele.location}</Text>
            </Box>
        </Flex>
        ))
            }
        {/* </Box> */}
        </Box>
        <Box border="2px solid #b8b8b8" w="70%" backgroundColor="white">
        <Flex  w="100%" h={20} backgroundColor="white">
            Right navbar
        </Flex>
        <hr />
        <Box h="77%" backgroundColor="white">

        </Box>
        <InputGroup size="md" w="95%" m="auto" borderRadius={30} backgroundColor="white">
            <Input pr="4.5rem" placeholder="Enter message" name="password" borderRadius={30}/>
                <InputLeftElement fontSize='25px'>
                <BsEmojiSmile/>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Text h="1.75rem" size="sm" color='blue'> send </Text>
                </InputRightElement>
                   </InputGroup>
          </Box>
     </Flex>
    </Box>
  )
}

export default Messages
